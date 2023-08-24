import React, { useEffect, useState } from 'react';
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

// const savedContacts = JSON.parse(localStorage.getItem('saved-contacts'));

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('saved-contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const oldContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (oldContact) {
      toast.error(`${oldContact.name} already exists`, {
        autoClose: 2000,
      });
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);

    toast.success('Contact added successfully', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const findContact = event => {
    const searchName = event.currentTarget.value.toLowerCase();
    setFilter(searchName);
  };

  const clearInput = () => {
    setFilter('');
  };

  const showNewList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>Phonebook</Title> <RiContactsBookLine size={40} color="#fff" />
      </TitleWrapper>
      <Wrapper>
        <SearchSection>
          <Filter
            clearInput={clearInput}
            filter={filter}
            findContact={findContact}
          />
          /
          <AddingForm addContact={addContact} />/
        </SearchSection>
        <ContactsSection>
          <SubTitle>Contacts</SubTitle>
          <ContactList
            filter={filter}
            newList={showNewList()}
            removeContact={removeContact}
          />
          <ToastContainer />
        </ContactsSection>
      </Wrapper>
    </Container>
  );
};
