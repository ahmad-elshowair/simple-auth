import axios from 'axios';

const devApi = 'http://localhost:5000/users';

export default axios.create({
  baseURL: devApi
})