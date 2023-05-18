import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

const About = () => {
    return(
        <>
            <Header />

            <div className="page-head_agile_info_w3l"></div>

            <div className="services-breadcrumb">
                <div className="agile_inner_breadcrumb">
                    <div className="container">
                        <ul className="w3_short">
                            <li>
                                <NavLink to="">Accueil</NavLink>
                                <i>|</i>
                            </li>
                            <li>A Propos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="welcome py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                    <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        A propos de nous
                    </h3>
                    <div className="row">
                        <div className="col-lg-6 welcome-left">
                            <h3>Bienvenu sur OnCheck !</h3>
                            <h4 className="my-sm-3 my-2">OnCheck est un comparateur de prix proposant de milliers d'offres de plusieurs marchands. La possibilité de retrouver donc un produit avec ses différents prix devient très grande.</h4>
                            <p>La vie étant de plus en plus chère, il devient nécessaire voire urgent que nous économisions dans les achats que nous
                                faisons. C'est à ce moment qu'OnCheck entre en jeu pour vous permettre ainsi d'atteindre ce but tout en achetant le bon article.
                            </p>
                        </div>
                        <div className="col-lg-6 welcome-right-top mt-lg-0 mt-sm-5 mt-4">
                            <img src="images/ab.jpg" className="img-fluid" alt=" " />
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                    <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        Témoignages des clients
                    </h3>
                    <div className="row gallery-index">
                        <div className="col-sm-6 med-testi-grid">
                            <div className="med-testi test-tooltip rounded p-4">
                                <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="row med-testi-left my-5">
                                <div className="col-lg-2 col-3 w3ls-med-testi-img">
                                    <img src="images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-lg-10 col-9">
                                    <h4 className="font-weight-bold mb-lg-1 mb-2">Tyson</h4>
                                    <p>fames ac turpis</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 med-testi-grid">
                            <div className="med-testi test-tooltip rounded p-4">
                                <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="row med-testi-left my-5">
                                <div className="col-lg-2 col-3 w3ls-med-testi-img">
                                    <img src="images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-lg-10 col-9">
                                    <h4 className="font-weight-bold mb-lg-1 mb-2">Alejandra</h4>
                                    <p>fames ac turpis</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 med-testi-grid">
                            <div className="med-testi test-tooltip rounded p-4">
                                <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="row med-testi-left mt-sm-5 my-5">
                                <div className="col-lg-2 col-3 w3ls-med-testi-img">
                                    <img src="images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-lg-10 col-9">
                                    <h4 className="font-weight-bold mb-lg-1 mb-2">Charles</h4>
                                    <p>fames ac turpis</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 med-testi-grid">
                            <div className="med-testi test-tooltip rounded p-4">
                                <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="row med-testi-left mt-5">
                                <div className="col-lg-2 col-3 w3ls-med-testi-img">
                                    <img src="images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-lg-10 col-9">
                                    <h4 className="font-weight-bold mb-lg-1 mb-2">Jessie</h4>
                                    <p>fames ac turpis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About;