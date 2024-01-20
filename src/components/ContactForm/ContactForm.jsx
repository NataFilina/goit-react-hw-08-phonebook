import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/thunks';
import { selectorItems } from '../../redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const items = useSelector(selectorItems);
  const dispatch = useDispatch();

  const handlerFormSubmits = e => {
    e.preventDefault();

    items?.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(name + ' is already in contacts')
      : dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'phone':
        setPhone(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handlerFormSubmits}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="phone"
            required
            value={phone}
            onChange={handleChange}
          ></input>
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
