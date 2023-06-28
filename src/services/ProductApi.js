import axios from "./axios";

export function getAllProducts() {
    axios
        .get('/produits')
        .then(res => {
            return res.data;
        })
}

export function getProductsByCategory(id) {
    axios
        .get('/produits-categorie/' + id)
        .then(res => {
            return res.data;
        })
}

export function getCategoryOfProduct(id) {
    axios
        .get('/categorie-produit/' + id)
        .then(res => {
            return res.data;
        })
}

export function getOneProduct(id) {
    axios
        .get('/produit/' + id)
        .then(res => {
            return res.data;
        })
}

export function getProductsMostCompared() {
    axios
        .get('/produits-compares')
        .then(res => {
            return res.data
        })
}

export function getProductsMostSaw() {
    axios
        .get('/produits-vus')
        .then(res => {
            return res.data
        })
}

export function searchProduct(keyword) {
    axios
        .get('/search/' + keyword)
        .then(res => {
            return res.data
        })
}

export function variationPriceProduct(id) {
    axios
        .get('/variation-prix-produit/' + id)
        .then(res => {
            return res.data
        })
}

export function saveAlertePrice(alerte) {
    axios
        .post('/alerte-prix', alerte)
        .then(res => {
            return res.data
        })
}

export function commentsOfProduct(id) {
    axios
        .get('/comments-produits/' + id)
        .then(res => {
            return res.data
        })
}

export function addComment(comment) {
    axios
        .post('/add-comment', comment)
        .then(res => {
            return res.data
        })
}