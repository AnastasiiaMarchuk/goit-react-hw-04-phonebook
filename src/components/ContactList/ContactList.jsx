import { FiTrash } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import {
  Button,
  Item,
  LineWithShadow,
  List,
  Name,
  Number,
  TextMessage,
  Title,
  TitlesWrapper,
} from './ContactList.styled';

export const ContactList = ({ filter, newList, removeContact }) => {
  const noContactsMessage =
    filter && newList.length === 0
      ? 'No contact with this name'
      : "There are no entries in your phone book yet. It's time to add your first contact";

  return (
    <>
      <LineWithShadow />
      <TitlesWrapper>
        <Title>Name</Title>
        <Title>Number</Title>
      </TitlesWrapper>
      <LineWithShadow />
      {newList.length > 0 ? (
        <List>
          {newList.map(contact => {
            return (
              <Item key={contact.id}>
                <BsPersonCircle size={21} color="#fff" />
                <Name>{contact.name}</Name>
                <Number>{contact.number}</Number>
                <Button onClick={() => removeContact(contact.id)}>
                  <FiTrash size={21} />
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <TextMessage>{noContactsMessage}</TextMessage>
      )}
    </>
  );
};

// export const ContactList = ({ newList, removeContact }) => {
//   return (
//     <>
//       <LineWithShadow />
//       <TitlesWrapper>
//         <Title>Name</Title>
//         <Title>Number</Title>
//       </TitlesWrapper>
//       <LineWithShadow />
//       {newList.length > 0 ? (
//         <List>
//           {newList.map(contact => {
//             return (
//               <Item key={contact.id}>
//                 <BsPersonCircle size={21} color="#fff" />
//                 <Name>{contact.name}</Name>
//                 <Number>{contact.number}</Number>
//                 <Button onClick={() => removeContact(contact.id)}>
//                   <FiTrash size={21} />
//                 </Button>
//               </Item>
//             );
//           })}
//         </List>
//       ) : (
//         <TextMessage>
//           There are no entries in your phone book yet. It's time to add your
//           first contact
//         </TextMessage>
//       )}
//     </>
//   );
// };
