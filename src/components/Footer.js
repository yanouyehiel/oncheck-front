import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Test Newsletter');
    }

    return (
        <>
            {/* Middle section */}
            <div class="join-w3l1 py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="join-agile text-left p-4">
                                <div class="row">
                                    <div class="col-sm-7 offer-name">
                                        <h6>Smooth, Rich & Loud Audio</h6>
                                        <h4 class="mt-2 mb-3">Branded Headphones</h4>
                                        <p>Sale up to 25% off all in store</p>
                                    </div>
                                    <div class="col-sm-5 offerimg-w3l">
                                        <img src="images/off1.png" alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-lg-0 mt-5">
                            <div class="join-agile text-left p-4">
                                <div class="row ">
                                    <div class="col-sm-7 offer-name">
                                        <h6>A Bigger Phone</h6>
                                        <h4 class="mt-2 mb-3">Smart Phones 5</h4>
                                        <p>Free shipping order over $100</p>
                                    </div>
                                    <div class="col-sm-5 offerimg-w3l">
                                        <img src="images/off2.png" alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="footer-top-first">
                    <div class="container py-md-5 py-sm-4 py-3">
                        <h2 class="footer-top-head-w3l font-weight-bold mb-2">OnCheck Sarl Cameroun</h2>
                        <p class="footer-main mb-4">
                        OnCheck est un comparateur de prix proposant de milliers d'offres de plusieurs marchands. La possibilité de retrouver donc un produit avec ses différents prix devient très grande.</p>
                        <div class="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
                            <div class="col-md-4 offer-footer">
                                <div class="row">
                                    <div class="col-4 icon-fot">
                                        <i class="fas fa-dolly"></i>
                                    </div>
                                    <div class="col-8 text-form-footer">
                                        <h3>Comparaison Gratuite</h3>
                                        <p>Produits à partir de 500 XAF</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 offer-footer my-md-0 my-4">
                                <div class="row">
                                    <div class="col-4 icon-fot">
                                        <i class="fas fa-shipping-fast"></i>
                                    </div>
                                    <div class="col-8 text-form-footer">
                                        <h3>Livraison Possible</h3>
                                        <p>Nos marchands vous livrent chez vous et rapidement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 offer-footer">
                                <div class="row">
                                    <div class="col-4 icon-fot">
                                        <i class="far fa-thumbs-up"></i>
                                    </div>
                                    <div class="col-8 text-form-footer">
                                        <h3>Meilleur Guide</h3>
                                        <p>OnCheck est le bon choix pour vous aider</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w3l-middlefooter-sec">
                    <div class="container py-md-5 py-sm-4 py-3">
                        <div class="row footer-info w3-agileits-info">
                            <div class="col-md-3 col-sm-6 footer-grids">
                                <h3 class="text-white font-weight-bold mb-3">Categories</h3>
                                <ul>
                                    <li class="mb-3">
                                        <a href="/">Electronique </a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="/">Electroménager</a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="/">Beauté & Santé</a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="/">Mode</a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="/">Alimentation</a>
                                    </li>
                                    <li>
                                        <a href="/">Intérieur & Design</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                                <h3 class="text-white font-weight-bold mb-3">Liens Importants</h3>
                                <ul>
                                    <li class="mb-3">
                                        <NavLink to="/about-us">A Propos de nous</NavLink>
                                    </li>
                                    <li class="mb-3">
                                        <NavLink to="/contact-us">Nous contactez</NavLink>
                                    </li>
                                    <li class="mb-3">
                                        <NavLink to="/help">Aide</NavLink>
                                    </li>
                                    <li class="mb-3">
                                        <NavLink to="/faqs">Faqs</NavLink>
                                    </li>
                                    <li class="mb-3">
                                        <NavLink to="/terms">Conditions d'utilisation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/privacy">Privacy Policy</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                                <h3 class="text-white font-weight-bold mb-3">Nos Contacts</h3>
                                <ul>
                                    <li class="mb-3">
                                        <i class="fas fa-map-marker"></i> PK8 Derrière ESG Douala, CAMEROUN.</li>
                                    <li class="mb-3">
                                        <i class="fas fa-mobile"></i> +(237) 694 750 509 </li>
                                    <li class="mb-3">
                                        <i class="fas fa-phone"></i> +(237) 672 155 866 </li>
                                    <li class="mb-3">
                                        <i class="fas fa-envelope-open"></i>
                                        <a href="mail@oncheckcm.com"> mail@oncheckcm.com</a>
                                    </li>
                                    <li>
                                        <i class="fas fa-envelope-open"></i>
                                        <a href="mailto:ncheck237@gmail.com"> oncheck237@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                                <h3 class="text-white font-weight-bold mb-3">Newsletter</h3>
                                <p class="mb-3">Rejoignez-nous et bénéficiez de conseils pour acheter des produits au bon prix et trouver des produits bien cotés</p>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email" name="email" required />
                                        <input type="submit" value="Go" />
                                    </div>
                                </form>
                                <div class="footer-grids  w3l-socialmk mt-3">
                                    <h3 class="text-white font-weight-bold mb-3">Suivez-nous</h3>
                                    <div class="social">
                                        <ul>
                                            <li>
                                                <a class="icon fb" target="_BLANK" href="https://www.facebook.com/OnCheck-Comparateur-de-prix-108506331692864/?ref=page_internal">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="icon gp" target="_BLANK" href="https://chat.whatsapp.com/CCUNl94owykFt5uIeGc8xc">
                                                    <i class="fab fa-whatsapp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="icon tw" target="_BLANK" href="https://www.linkedin.com/company/oncheck/">
                                                    <i class="fab fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="agile-sometext py-md-5 py-sm-4 py-3">
                    <div class="container">
                        <div class="sub-some">
                            <h5 class="font-weight-bold mb-2">Electronique</h5>
                            <ul>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Téléphones mobiles</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Accessoires pour téléphones</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Tablettes</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Ordinateurs</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Accessoires pour ordinateurs</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Jeux Vidéo</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Accessoires pour jeux vidéo</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Accessoires informatiques</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Appareils électriques</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Télécommunication</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sub-some mt-4">
                            <h5 class="font-weight-bold mb-2">Electroménager</h5>
                            <ul>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Gros Electroménager </a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Petit Electroménager</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sub-some mt-4">
                            <h5 class="font-weight-bold mb-2">Beauté & Santé</h5>
                            <ul>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Lotions</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Senteurs</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Accessoires de beauté</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Appareils de beauté</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Médécine</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sub-some mt-4">
                            <h5 class="font-weight-bold mb-2">Mode</h5>
                            <ul>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Vêtements pour hommes</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Vêtements pour femmes</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Vêtements mixtes</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Accessoires</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Chaussures pour hommes</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Chaussures pour femmes</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2"> Bijoux</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sub-some mt-4">
                            <h5 class="font-weight-bold mb-2">Alimentation</h5>
                            <ul>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Vins</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Whisky</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Bières</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Jus gazeux</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Jus naturel</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sub-some mt-4">
                            <h5 class="font-weight-bold mb-2">Intérieur & Design</h5>
                            <ul>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Mobilier d'intérieur</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Installation d'intérieur</a>
                                </li>
                                <li class="m-sm-1">
                                    <a href="/" class="border-right pr-2">Ustensiles de cuisine</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sub-some child-momu mt-4">
                            <h5 class="font-weight-bold mb-3">Payment Method</h5>
                            <ul>
                                <li>
                                    <img src="images/pay2.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay5.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay1.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay4.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay6.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay3.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay7.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay8.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay9.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* Copyright */}
            <div class="copy-right py-3">
                <div class="container">
                    <p class="text-center text-white">© 2023 OnCheck. All rights reserved | Design by
                        <a href="http://oncheckcm.com"> OnCheck Company.</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;