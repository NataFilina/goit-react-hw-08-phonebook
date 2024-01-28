import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/thunks';
import { selector } from '../../redux/selectors';
import { GoPerson } from 'react-icons/go';

const ContactList = () => {
  const dispatch = useDispatch();
  const selectorContacts = useSelector(selector);

  const question = () => {
    return prompt(
      'Are you sure you want to delete the contact? If not, click cancel.',
      'Ok'
    );
  };

  const onDelete = id => {
    if (question()) {
      dispatch(deleteContact(id));
    }
    return;
  };

  const newContact = selectorContacts.map(({ id, name, number }) => {
    return (
      <>
        <li key={id} className={css.item}>
          <GoPerson />
          <span className={css.itemName}>{name}:</span>
          <span className={css.itemNumber}>{number}</span>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      </>
    );
  });

  return <ul className={css.list}>{newContact}</ul>;
};

export default ContactList;
