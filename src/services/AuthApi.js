import axios from "axios";
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
        .post('http://localhost:8000/api/login', credentials)
        .then(response => response.data.token)
        .then(token => {
            addItem('oncheckToken', token);
            return true;
        })
}

export function logout() {
    removeItem('oncheckToken');
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    }
    return false;
}