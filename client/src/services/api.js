import axios from 'axios';

const api = axios.create({
    baseURL: "https://olympus-gym-api.herokuapp.com/"
});

export default api;