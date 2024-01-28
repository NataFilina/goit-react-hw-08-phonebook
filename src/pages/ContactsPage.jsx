import Filter from 'components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import AddFirst from 'components/AddFirst/AddFirst';
import { useDispatch, useSelector } from 'react-redux';
import { selectorItems } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/thunks';

const ContactsPage = () => {
  const selectorContacts = useSelector(selectorItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {selectorContacts.length ? <ContactList /> : <AddFirst />}
    </>
  );
};

export default ContactsPage;
