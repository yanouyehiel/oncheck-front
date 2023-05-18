import React from "react";
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Data } from "../utils/data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import LineChart from "../components/LineChart";
//import Table from "../components/Table";
import MaterialReactTable from 'material-react-table';

Chart.register(CategoryScale);

const Product = () => {
    const { id } = useParams()
    const [produit, setProduit] = useState({})
    const [produitsCompares, setProduitsCompares] = useState([])
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    })
    const columns = useMemo(
    () => [
      {
        accessorKey: 'nom', //access nested data with dot notation
        header: 'Nom du produit',
      },
      {
        accessorKey: 'image_1',
        header: 'Image du produit',
      },
      {
        accessorKey: 'prix', //normal accessorKey
        header: 'Prix',
      },
      {
        accessorKey: 'categorie_id', //normal accessorKey
        header: 'Catégorie',
      },
      {
        accessorKey: 'vendeur_id',
        header: 'Vendeur',
      },
      {
        accessorKey: 'livre',
        header: 'Livraison',
      },
    ],
    [],
  );

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/produit/' + id
            )
            .then((res) => {
                setProduit(res.data)
            }
        );
        axios
            .get('http://localhost:8000/api/produits-categorie/' + produit.categorie_id
            )
            .then((res) => {
                setProduitsCompares(res.data)
            }
        );
    }, [id, produit.categorie_id])

    return (
        <>
            <Header />
            <div class="page-head_agile_info_w3l"></div>
            <div class="services-breadcrumb">
                <div class="agile_inner_breadcrumb">
                    <div class="container">
                        <ul class="w3_short">
                            <li>
                                <NavLink to="/">Accueil</NavLink>
                                <i>|</i>
                            </li>
                            <li>{produit.nom}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="banner-bootom-w3-agileits py-5">
                <div class="container py-xl-4 py-lg-2">
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        Nom du produit
                    </h3>
                    <div class="row">
                        <div class="col-lg-5 col-md-8 single-right-left ">
                            <div class="grid images_3_of_2">
                                <div class="flexslider">
                                    <ul class="slides">
                                        <li data-thumb="images/{produit.image_1}">
                                            <div class="thumb-image">
                                                <img src={produit.image_1} data-imagezoom="true" class="img-fluid" alt={produit.image_1} /> </div>
                                        </li>
                                        <li data-thumb="images/{produit.image_2}">
                                            <div class="thumb-image">
                                                <img src={produit.image_2} data-imagezoom="true" class="img-fluid" alt={produit.image_2} /> </div>
                                        </li>
                                        <li data-thumb="images/{produit.image_3}">
                                            <div class="thumb-image">
                                                <img src={produit.image_3} data-imagezoom="true" class="img-fluid" alt={produit.image_3} /> </div>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-7 single-right-left simpleCart_shelfItem">
                            <h3 class="mb-3">{produit.nom}</h3>
                            <p class="mb-3">
                                <span class="item_price">{produit.prix} FCFA</span>
                                { produit.reduction > 0 && 
                                    <del>{ (1 + produit.reduction) * produit.prix }</del>
                                }
                                { produit.livraison === 1 && 
                                    <label>Livraison possible</label>
                                }
                            </p>
                            <div class="single-infoagile">
                                <ul>
                                    <li class="mb-3">
                                        Description
                                    </li>
                                    <li class="mb-3">
                                        {produit.description}   
                                    </li>
                                    <li class="mb-3">
                                        EMIs from $655/month.
                                    </li>
                                    <li class="mb-3">
                                        Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C
                                    </li>
                                </ul>
                            </div>
                            <div class="product-single-w3l">
                                <p class="my-3">
                                    <i class="far fa-hand-point-right mr-2"></i>
                                    <label>1 Year</label> Garantie</p>
                                <ul>
                                    <li class="mb-1">
                                        {produit.description}
                                    </li>
                                </ul>
                                <p class="my-sm-4 my-3">
                                    <i class="fas fa-retweet mr-3"></i>Paiement Cash/ Electronique/ Bancaire chez le vendeur
                                </p>
                            </div>

                            <LineChart chartData={chartData} /><br />

                            <div class="occasion-cart">
                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                    <form>
                                        <fieldset>
                                            <input type="submit" value="Alerte-moi sur ce prix" class="button" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <Table columns={columns} data={data} /> */}
            <MaterialReactTable columns={columns} data={produitsCompares} />

            <Footer />
        </>
    )
}

export default Product;