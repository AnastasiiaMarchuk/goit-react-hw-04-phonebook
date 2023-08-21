import React from 'react';
import { Component } from 'react';
import AddingForm from '../AddingForm/AddingForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiContactsBookLine } from 'react-icons/ri';
import {
  ContactsSection,
  Container,
  SearchSection,
  SubTitle,
  Title,
  TitleWrapper,
  Wrapper,
} from './App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.contacts !== nextState.contacts) {
      localStorage.setItem(
        'saved-contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const oldContact = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (oldContact) {
      toast.error(`${oldContact.name} already exists`, {
        autoClose: 3000,
      });
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));

    toast.success('Contact added successfully', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  findContact = event => {
    const searchName = event.currentTarget.value.toLowerCase();
    this.setState({ filter: searchName });
  };

  clearInput = () => {
    this.setState({
      filter: '',
    });
  };

  showNewList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const newList = this.showNewList();

    return (
      <Container>
        <TitleWrapper>
          <Title>Phonebook</Title> <RiContactsBookLine size={40} color="#fff" />
        </TitleWrapper>
        <Wrapper>
          <SearchSection>
            <Filter
              clearInput={this.clearInput}
              filter={filter}
              findContact={this.findContact}
            />
            /
            <AddingForm addContact={this.addContact} />/
          </SearchSection>
          <ContactsSection>
            <SubTitle>Contacts</SubTitle>
            <ContactList
              filter={filter}
              newList={newList}
              removeContact={this.removeContact}
            />
            <ToastContainer />
          </ContactsSection>
        </Wrapper>
      </Container>
    );
  }
}
