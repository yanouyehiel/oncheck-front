import axios from "./axios";
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from "./LocalStorage";

export function hasAuthenticated() {
    const token = getItem('oncheckToken');
    const isValid = token ? tokenIsValid(token) : false;

    if (false === isValid) {
        removeItem('oncheckToken');
    }

    return isValid;
}

export function login(credentials) {
    return axios
        .post('/login', credentials)
        .then(res => {
            addItem('oncheckToken', res.data.token)
            addItem('oncheckUser', JSON.stringify(res.data.user))
            return true;
        })
}

export function register(credentials) {
    return axios
        .post('/register', credentials)
        .then(response => response.data)
}

export function logout() {
    removeItem('oncheckToken');
    removeItem('oncheckUser');
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    }
    return false;
}