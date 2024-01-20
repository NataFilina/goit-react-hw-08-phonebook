import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/thunks';
import { selector } from '../../redux/selectors';

const ContactList = () => {
  const selectorContacts = useSelector(selector);

  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const newContact = selectorContacts.map(({ id, name, phone }) => {
    return (
      <li key={id} className={css.item}>
        <span className={css.itemName}>{name}:</span> {phone}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <ul className={css.list}>{newContact}</ul>;
};

export default ContactList;
