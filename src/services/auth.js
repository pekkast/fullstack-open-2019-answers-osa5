import axios from 'axios';
const baseUrl = '/api/auth';

const login = async (username, password) => {
  try {
    const response = await axios.post(baseUrl + '/login', { username, password });
    return response.data;
  } catch (err) {
    console.log(err.response);
    return null;
  }
};

const signup = async (username, password, name) => {
  try {
    await axios.post(baseUrl + '/signup', { username, password, name });
    return true;
  } catch (err) {
    console.log(err.response);
    return false;
  }
};

export default { login, signup };
