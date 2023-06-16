import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import Header from "../components/Header";
import FilterSide from "../components/FilterSide";
import Footer from "../components/Footer";

const Category = () => {
    const { id } = useParams()
    const [produits, setProduits] = useState([])
    const [categorie, setCategorie] = useState("")

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/categorie-produit/' + id
            )
            .then((res) => {
                setCategorie(res.data.data)
            }
        );
        axios
            .get('http://localhost:8000/api/produits-categorie/' + id
            )
            .then((res) => {
                setProduits(res.data.data)
                console.log(produits)
            }
        );
    }, [id])

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
                            <li>{categorie.nom}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="ads-grid py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        Produits par catégorie
                    </h3>
                    <div class="row">
                        <div class="agileinfo-ads-display col-lg-9">
                            <div class="wrapper">
                                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                    <div class="row">
                                        <div class="col-md-4 product-men">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/m1.jpg" alt="" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Samsung Galaxy J7</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$200.00</span>
                                                        <del>$280.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Samsung Galaxy J7" />
                                                                <input type="hidden" name="amount" value="200.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/m2.jpg" alt="" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <span class="product-new-top">New</span>

                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">OPPO A37f</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$230.00</span>
                                                        <del>$250.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="OPPO A37f" />
                                                                <input type="hidden" name="amount" value="230.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/m3.jpg" alt="" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <span class="product-new-top">New</span>

                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Apple iPhone X</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$280.00</span>
                                                        <del>$300.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Apple iPhone X" />
                                                                <input type="hidden" name="amount" value="280.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                    <div class="row">
                                        <div class="col-md-4 product-men">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk1.jpg" alt="" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Infinix Hot S3</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$300.00</span>
                                                        <del>$320.00</del>
                                                    </div>
                                                    <span class="product-new-top">New</span>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Infinix Hot S3" />
                                                                <input type="hidden" name="amount" value="300.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk2.jpg" alt="" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Moto X4 (6 GB)</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$233.00</span>
                                                        <del>$240.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Moto X4 (6 GB)" />
                                                                <input type="hidden" name="amount" value="233.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk3.jpg" alt="" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">iVooMi i Series</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$249.00</span>
                                                        <del>$260.00</del>
                                                    </div>
                                                    <span class="product-new-top">New</span>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="iVooMi i Series" />
                                                                <input type="hidden" name="amount" value="249.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                                    <div class="row">
                                        <div class="col-md-4 product-men">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk4.jpg" alt="" class="img-fluid" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Dell Vostro Laptop</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$252.00</span>
                                                        <del>$260.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Dell Vostro Laptop" />
                                                                <input type="hidden" name="amount" value="252.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk5.jpg" alt="" class="img-fluid" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Acer Laptop</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$240.00</span>
                                                        <del>$260.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Acer Laptop" />
                                                                <input type="hidden" name="amount" value="240.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk6.jpg" alt="" class="img-fluid" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Lenovo </a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$300.00</span>
                                                        <del>$320.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Alcatel Tablet" />
                                                                <input type="hidden" name="amount" value="300.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                                    <div class="row">
                                        <div class="col-md-4 product-men">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk7.jpg" alt="" class="img-fluid" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Intex Power Bank</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$100.00</span>
                                                        <del>$200.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Intex Power Bank" />
                                                                <input type="hidden" name="amount" value="100.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk8.jpg" alt="" class="img-fluid" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">HP Wireless Printer</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$243.00</span>
                                                        <del>$250.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="HP Wireless Printer" />
                                                                <input type="hidden" name="amount" value="243.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                            <div class="men-pro-item simpleCart_shelfItem">
                                                <div class="men-thumb-item text-center">
                                                    <img src="images/mk9.jpg" alt="" class="img-fluid" />
                                                    <div class="men-cart-pro">
                                                        <div class="inner-men-cart-pro">
                                                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-info-product text-center border-top mt-4">
                                                    <h4 class="pt-1">
                                                        <a href="single.html">Alcatel Tablet</a>
                                                    </h4>
                                                    <div class="info-product-price my-2">
                                                        <span class="item_price">$320.00</span>
                                                        <del>$350.00</del>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Alcatel Tablet" />
                                                                <input type="hidden" name="amount" value="320.00" />
                                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                                <input type="hidden" name="currency_code" value="USD" />
                                                                <input type="hidden" name="return" value=" " />
                                                                <input type="hidden" name="cancel_return" value=" " />
                                                                <input type="submit" name="submit" value="Add to cart" class="button btn" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FilterSide />
                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Category;