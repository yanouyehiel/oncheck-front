import React, { Suspense } from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSide from "../components/FilterSide";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { ColorRing, CirclesWithBar, Bars } from "react-loader-spinner";

const Home = () => {
    const [mobilePhones, setMobilePhones] = useState([])
    const [laptops, setLaptops] = useState([])
    const [ecrans, setEcrans] = useState([])
    const [playOne, setPlayOne] = useState(true)
    const [rangeValue, setRangeValue] = useState(1000);
    const [selectedRadioReduction, setSelectedRadioReduction] = useState('');
    const [selectedRadioCategorie, setSelectedRadioCategorie] = useState('');
    const [selectedRadioLivraison, setSelectedRadioLivraison] = useState('');
    const [selectedRadioNewProduit, setSelectedRadioNewProduit] = useState('');
    
    useEffect(() => {
        if (playOne) {
            axios
                .get('http://localhost:8000/api/produits-categorie/62'
                )
                .then((res) => {
                    console.log(mobilePhones)
                    setMobilePhones(res.data);
                    setPlayOne(false);
                }
            );
            axios
                .get('http://localhost:8000/api/produits-categorie/1'
                )
                .then((res) => {
                    setLaptops(res.data);
                    setPlayOne(false);
                }
            );
            axios
                .get('http://localhost:8000/api/produits-categorie/6'
                )
                .then((res) => {
                    setEcrans(res.data);
                    setPlayOne(false);
                }
            );
        }

        /*const sortedProduits = () => {
            const produitObj = Object.keys(produitsHome).map((i) => produitsHome[i]);
            const sortedArray = produitObj.sort((a, b) => {
                return b.prix - a.prix
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        }
        sortedProduits();*/
    
    }, [mobilePhones, laptops, ecrans, playOne])

    return (
        <>
            <Header />

            {/* La banniere */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item item1 active">
                        <div class="container">
                            <div class="w3l-space-banner">
                                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                                    <p>Get flat
                                        <span>10%</span> Cashback</p>
                                    <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">The
                                        <span>Big</span>
                                        Sale
                                    </h3>
                                    <a class="button2" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item item2">
                        <div class="container">
                            <div class="w3l-space-banner">
                                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                                    <p>advanced
                                        <span>Wireless</span> earbuds</p>
                                    <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">Best
                                        <span>Headphone</span>
                                    </h3>
                                    <a class="button2" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item item3">
                        <div class="container">
                            <div class="w3l-space-banner">
                                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                                    <p>Get flat
                                        <span>10%</span> Cashback</p>
                                    <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">New
                                        <span>Standard</span>
                                    </h3>
                                    <a class="button2" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item item4">
                        <div class="container">
                            <div class="w3l-space-banner">
                                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                                    <p>Get Now
                                        <span>40%</span> Discount</p>
                                    <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">Today
                                        <span>Discount</span>
                                    </h3>
                                    <a class="button2" href="product.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="ads-grid py-sm-5 py-4">
		        <div class="container py-xl-4 py-lg-2">
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        {/* <span>N</span>os
                        <span> N</span>ouveaux
                        <span> P</span>roduits */}Produits populaires
                    </h3>
			        <div class="row">
				        <div class="agileinfo-ads-display col-lg-9">
							<div class="wrapper">
								<div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
									<h3 class="heading-tittle text-center font-italic">Téléphones Mobiles</h3>
									<div class="row">
                                        {/* <Suspense fallback={<ColorRing
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
                                        }>
                                            {mobilePhones
                                                .map((phone) => (
                                                    <Card key={phone.id} produit={phone} />
                                                ))
                                            }
                                        </Suspense> */}
                                        {mobilePhones
                                            .map((phone) => 
                                            (!selectedRadioReduction || selectedRadioReduction === phone.reduction) &&
                                            (!selectedRadioCategorie || selectedRadioCategorie === phone.categorie) &&
                                            (!selectedRadioLivraison || selectedRadioLivraison === phone.livraison) ?
                                            (
                                                <Card key={phone.id} produit={phone} />
                                            ) : null)
                                        }
									</div>
								</div>
								<div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
									<h3 class="heading-tittle text-center font-italic">Ordinateurs portables</h3>
									<div class="row">
                                        <Suspense fallback={<CirclesWithBar
                                            height="100"
                                            width="100"
                                            color="#4fa94d"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            barColor=""
                                            ariaLabel='circles-with-bar-loading'
                                            />
                                        }>
                                            {laptops
                                                .map((laptop) => (
                                                    <Card key={laptop.id} produit={laptop} />
                                                ))
                                            }
                                        </Suspense>
                                        {/* {laptops
                                            .map((laptop) => (
                                                <Card key={laptop.id} produit={laptop} />
                                            ))
                                        } */}
									</div>
								</div>
                                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
									<h3 class="heading-tittle text-center font-italic">Ecrans Plasma</h3>
									<div class="row">
                                        {/* <Suspense fallback={<Bars
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="bars-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}/>
                                        }>
                                            {ecrans
                                                .map((ecran) => (
                                                    <Card key={ecran.id} produit={ecran} />
                                                ))
                                            }
                                        </Suspense> */}
                                        {ecrans
                                            .map((ecran) => (
                                                <Card key={ecran.id} produit={ecran} />
                                            ))
                                        }
									</div>
								</div>
								<div class="product-sec1 product-sec2 px-sm-5 px-3">
									<div class="row">
										<h3 class="col-md-4 effect-bg">Produits en solde</h3>
										<p class="w3l-nut-middle">Get Extra 10% Off</p>
										<div class="col-md-8 bg-right-nut">
											<img src="images/image1.png" alt="" />
										</div>
									</div>
								</div>
								<div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
									<h3 class="heading-tittle text-center font-italic">Large Appliances</h3>
									<div class="row">
										
									</div>
								</div>
							</div>
						</div>
                
						<FilterSide
                            selectedRadioReduction={selectedRadioReduction}
                            setSelectedRadioReduction={setSelectedRadioReduction}
                            selectedRadioCategorie={selectedRadioCategorie}
                            setSelectedRadioCategorie={setSelectedRadioCategorie}
                            selectedRadioLivraison={selectedRadioLivraison}
                            setSelectedRadioLivraison={setSelectedRadioLivraison}
                            selectedRadioNewProduit={selectedRadioNewProduit}
                            setSelectedRadioNewProduit={setSelectedRadioNewProduit}
                        />
                	</div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home;