import Filter from 'components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import AddFirst from 'components/AddFirst/AddFirst';
import { useSelector } from 'react-redux';
import { selectorItems } from '../redux/selectors';

const ContactsPage = () => {
  const selectorContacts = useSelector(selectorItems);
  return (
    <>
      <ContactForm />
      <Filter />
      {selectorContacts.length ? <ContactList /> : <AddFirst />}
    </>
  );
};

export default ContactsPage;
