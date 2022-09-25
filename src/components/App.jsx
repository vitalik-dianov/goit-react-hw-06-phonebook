import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'Box';

import { addItem, deleteItem } from './redux/itemsSlice';
import { setFilter } from './redux/filterSlice';

import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(el => {
        return el.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`Sorry, but ${name} is already in contacts!`);
      return;
    } else {
      dispatch(addItem(name, number));
    }

    resetForm();
  };
  const handleFilterContacts = e => {
    dispatch(setFilter(e.target.value));
  };
  const handleDeleteContact = contactId => {
    dispatch(deleteItem(contactId));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      mr="auto"
      ml="auto"
      maxWidth={6}
      p={5}
    >
      <AddContactForm handleSubmit={handleSubmit} />
      <FilterContacts handleFilterContacts={handleFilterContacts} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDeleteContacts={handleDeleteContact}
      />
    </Box>
  );
};
