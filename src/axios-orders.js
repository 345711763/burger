import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-53958.firebaseio.com/'
});

export default instance;