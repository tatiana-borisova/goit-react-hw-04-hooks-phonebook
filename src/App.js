import { useState, useEffect } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { saveToLocalStorage } from './helpers/localStorage';
import { getFromLocalStorage } from './helpers/localStorage';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = getFromLocalStorage('contacts');

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage('contacts', contacts);
  }, [contacts]);

  const onSubmitHandler = data => {
    const isNameHere = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );

    const isNumberHere = contacts.find(
      contact => contact.number.toLowerCase() === data.number.toLowerCase(),
    );

    isNameHere || isNumberHere
      ? alert(
          `${isNameHere ? data.name : ''} ${
            isNumberHere ? data.number : ''
          } is already in contacts`,
        )
      : setContacts(prevState => [data, ...prevState]);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <div>
      <Section title="Phonebook">
        <Form onSubmit={onSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={getVisibleContacts()} onClick={deleteContact} />
      </Section>
    </div>
  );
}
