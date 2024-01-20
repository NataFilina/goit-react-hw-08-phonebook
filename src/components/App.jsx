import { ContactForm } from './ContactForm/ContactForm';
import { Error } from './Error/Error';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {
  return (
    <>
      <h1 className="title">Phone book</h1>
      <Error />
      <ContactForm />
      <Loader />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
