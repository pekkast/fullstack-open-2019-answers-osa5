import axios from 'axios';
const baseUrl = '/api/blogs';

const axiosConfig = {
  headers: { 'Accept': 'application/json' }
};

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl, axiosConfig);
    return response.data
  } catch (err) {
    return [];
  }
};

const setToken = token => {
  if (token) {
    axiosConfig.headers.Authorization = 'Bearer ' + token;
  } else {
    delete axiosConfig.headers.Authorization;
  }
};

const addOne = async (title, author, url) => {
  try {
    await axios.post(baseUrl, { title, author, url }, axiosConfig);
    return true
  } catch (err) {
    return false;
  }
};

export default { addOne, getAll, setToken };
