import axios from 'axios';

// define app API url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
