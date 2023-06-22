/* eslint-disable no-undef */
import React, { useContext } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Auth from "../contexts/Auth";
import { NavLink } from "react-router-dom";
import { logout } from "../services/AuthApi";

const Header = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    let navigate = useNavigate()
    const [produitSearch, setProduitSearch] = useState('')

    const search = (e) => {
        e.preventDefault()
        navigate("/search/" + produitSearch)
        setProduitSearch('')
    }

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        navigate('/')
    }
    console.log(isAuthenticated);
    return (
        <>
            <div className="agile-main-top">
                <div className="container-fluid">
                    <div className="row main-top-w3l py-2">
                        <div className="col-lg-4 header-most-top">
                            <p className="text-white text-lg-left text-center">OnCheck Votre Comparateur de prix
                                <i className="fas fa-shopping-cart ml-1"></i>
                            </p>
                        </div>
                        <div className="col-lg-8 header-right mt-lg-0 mt-2">
                            <ul>
                                <li className="text-center border-right text-white">
                                    <i className="fas fa-check mr-2"></i>Comparaison
                                </li>
                                <li className="text-center border-right text-white">
                                    <NavLink to="/acces-marchand" className="text-white">
                                        <i className="fas fa-truck mr-2"></i>Acces Marchand
                                    </NavLink>
                                </li>
                                <li className="text-center border-right text-white">
                                    <i className="fas fa-phone mr-2"></i>694 750 509
                                </li>
                                { (!isAuthenticated && (
                                    <>
                                        <li className="text-center border-right text-white">
                                            <NavLink to="/" data-toggle="modal" data-target="#exampleModal1" className="text-white">
                                                <i className="fas fa-sign-in-alt mr-2"></i> Connexion 
                                            </NavLink>
                                        </li>
                                        <li className="text-center text-white">
                                            <NavLink to="/" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                                                <i className="fas fa-sign-out-alt mr-2"></i>Inscription 
                                            </NavLink>
                                        </li>
                                        <li className="text-center border-right text-white">
                                            <NavLink to="/profile" className="text-white">
                                                <i className="fas fa-sign-in-alt mr-2"></i> Mon Profile 
                                            </NavLink>
                                        </li>
                                        <li className="text-center border-right text-white">
                                            <NavLink to="/my-comparaisons" className="text-white">
                                                <i className="fas fa-sign-in-alt mr-2"></i> Mes Comparaisons 
                                            </NavLink>
                                        </li>
                                        <li className="text-center text-white">
                                            <NavLink onClick={handleLogout} className="text-white">
                                                <i className="fas fa-sign-out-alt mr-2"></i>Deconnexion
                                            </NavLink>
                                        </li>
                                    </>
                                )) || (
                                    <>
                                        <li className="text-center border-right text-white">
                                            <NavLink to="/profile" className="text-white">
                                                <i className="fas fa-sign-in-alt mr-2"></i> Mon Profile 
                                            </NavLink>
                                        </li>
                                        <li className="text-center border-right text-white">
                                            <NavLink to="/my-comparaisons" className="text-white">
                                                <i className="fas fa-sign-in-alt mr-2"></i> Mes Comparaisons 
                                            </NavLink>
                                        </li>
                                        <li className="text-center text-white">
                                            <NavLink onClick={handleLogout} className="text-white">
                                                <i className="fas fa-sign-out-alt mr-2"></i>Deconnexion
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Login />
            <Register />

            <div className="header-bot">
                <div className="container">
                    <div className="row header block-header">
                        <div className="col-md-3 logo_agile">
                            <NavLink to="/" className="font-weight-bold font-italic">
                                <img src="assets/images/logo-oncheck.png" alt="Logo OnCheck" className="img-logo" />
                            </NavLink>
                        </div>
                        <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                            <div className="row">
                                <div className="col-12 agileits_search">
                                    <form onSubmit={search} className="form-inline">
                                        <input className="form-control mr-sm-2" onChange={(e) => setProduitSearch(e.target.value)} value={produitSearch} type="text" placeholder="Rechercher un produit..." aria-label="Search" required />
                                        <button className="btn my-2 my-sm-0 btn-search" type="submit">Rechercher</button>
                                    </form>
                                </div>
                                {/* <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                        <form className="last">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <button className="btn w3view-cart" type="submit" name="submit" value="">
                                                <i className="fas fa-cart-arrow-down"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    )
}

export default Header;