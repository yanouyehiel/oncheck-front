import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import FilterSide from '../components/FilterSide';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Search = () => {
    const { keyword } = useParams()
    const [produits, setProduits] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/search/' + keyword
            )
            .then((res) => {
                setProduits(res.data)
            }
        );
    }, [keyword])
    

    return (
        <>
            <Header />

            <div class="page-head_agile_info_w3l">
            </div>

            <div class="services-breadcrumb">
                <div class="agile_inner_breadcrumb">
                    <div class="container">
                        <ul class="w3_short">
                            <li>
                                <NavLink to="/">Accueil</NavLink>
                                <i>|</i>
                            </li>
                            <li>Recherche de {keyword}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="ads-grid py-sm-5 py-4">
                {produits.length > 0 ? (
                    <div class="container py-xl-4 py-lg-2">
                        <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                            Produits
                        </h3>
                        <div class="row">
                            <div class="agileinfo-ads-display col-lg-9">
                                <div class="wrapper">
                                    <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <div class="row">
                                            <div class="col-md-4 product-men">
                                                <Card />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FilterSide />

                        </div>
                    </div>
                ) : (
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3" 
                        style={{color: 'red', textAlign: 'center'}}>
                            Aucun produit trouve !
                    </h3>
                )}
            </div>

            <Footer />
        </>
    )
}

export default Search;