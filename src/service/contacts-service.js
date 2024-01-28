import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const result = await axios.get('/contacts');
  return result.data;
};

export const createContact = async data => {
  const result = await axios.post('/contacts', data);
  return result.data;
};

export const deleteContactApi = async id => {
  const result = await axios.delete(`/contacts/${id}`);
  return result.data;
};

export const registerNewUser = async data => {
  const result = await axios.post('/users/signup', data);
  return result.data;
};

export const loginUser = async data => {
  const result = await axios.post('/users/login', data);
  return result.data;
};

export const currentUser = async () => {
  const result = await axios.get('/users/current');
  return result.data;
};

export const logoutUser = async token => {
  await axios.post('/users/logout');
};
