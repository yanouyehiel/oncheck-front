import axios from "./axios";
import { getItem } from "./LocalStorage";

export function myComparaisons() {
    const userStorage = getItem('oncheckUser');
    const user = JSON.parse(userStorage);

    axios
        .get('/mes-comparaisons/' + user.id)
        .then(res => {
            return res.data
        })
}

export function abonnementNewsletter(email) {
    axios
        .post('/newsletter', email)
        .then(res => {
            return res.data.message
        })
}

export function sendMessage(contenu) {
    axios
        .post('/send-message', contenu)
        .then(res => {
            return res.data.message
        })
}

export function likerProduct(like) {
    axios
        .post('/liker', like)
        .then(res => {
            return res.data
        })
}