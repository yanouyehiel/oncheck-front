import axios from "./axios";

export function getAllCategories() {
    axios
        .get('/categories')
        .then(res => {
            return res.data;
        })
}

export function getCategorie(id) {
    axios
        .get('/categorie/' + id)
        .then(res => {
            return res.data;
        })
}

export function getCategoriesOfRubrique(id) {
    axios
        .get('/categories/' + id)
        .then(res => {
            return res.data;
        })
}

export function getAllBigCategories() {
    axios
        .get('/grande-categories')
        .then(res => {
            return res.data;
        })
}

export function getAllRubriqueCategories() {
    axios
        .get('/rubrique-categories')
        .then(res => {
            return res.data;
        })
}

export function getAllRubriquesOfBigCategorie(id) {
    axios
        .get('/rubrique-categories/' + id)
        .then(res => {
            return res.data;
        })
}