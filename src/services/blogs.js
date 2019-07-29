import axios from 'axios';
const baseUrl = '/api/blogs';

let bearerToken;

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data
  } catch (err) {
    return [];
  }
};

const setToken = token => { bearerToken = token; };

export default { getAll, setToken };
