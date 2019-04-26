import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-maicon.herokuapp.com'
});

export default api;