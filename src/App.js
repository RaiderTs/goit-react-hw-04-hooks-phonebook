import { useState } from 'react';

import ContactForm from './components/Form/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import useLocalStorage from '../src/components/hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('userContacts', []);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleCheckUnique = newName => {
    const handleName = newName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === handleName);
  };

  const handleRemoveContact = contactId => {
    setContacts(prevContacts => [
      ...prevContacts.filter(({ id }) => id !== contactId),
    ]);
  };
  
  const handleFilterChange = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };
  
  const onFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = onFilterContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        addContact={handleAddContact} 
        onUnique={handleCheckUnique}
      />
      <h2>Contacts List</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filterContacts} 
        onRemove={handleRemoveContact} 
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}
