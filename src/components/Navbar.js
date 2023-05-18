import { useState, useEffect } from 'react';
import axios from 'axios';
//import Categories from './Categories';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    //const [activeCategory, setActiveCategory] = useState('')
    const [categories, setCategories] = useState([]);
    const [playOne, setPlayOne] = useState(true);

    useEffect(() => {
        if (playOne) {
            axios
                .get('http://localhost:8000/api/categories'
                )
                .then((res) => {
                    setCategories(res.data);
                    setPlayOne(false);
                    console.log(categories)
                }
            );
        }
        
    }, [categories, playOne])

    return (
        <div className="navbar-inner">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <Categories
                        categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    /> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto text-center mr-xl-5">
                            <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                                <NavLink className="nav-link" to="/">Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Electronique
                                </a>
                                <div className="dropdown-menu">
                                    <div className="agile_inner_drop_nav_info p-4">
                                        <h5 className="mb-3">Téléphonie, Ordinateurs, Divertissement et Appareils électriques</h5>
                                        <div className="row">
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Téléphones mobiles</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Accessoires pour téléphones</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Tablettes</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Ordinateurs</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Accessoires pour ordinateurs</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Jeux Vidéo</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Accessoires pour jeux vidéo</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Accessoires informatiques</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Appareils électriques</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Télécommunication</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Electroménager
                                </a>
                                <div className="dropdown-menu">
                                    <div className="agile_inner_drop_nav_info p-4">
                                        <h5 className="mb-3">Gros et Petit Electroménager</h5>
                                        <div className="row">
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Machine à laver</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Machine pour vaisselle</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Refrigérateur</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Climatiseur</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Cuisinière</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Congélateur</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Autres gros appareils...</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Cafétière</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Filtre à eau</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Fer à repasser</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Ventilateur</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Friteuse</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Bouilloire</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Autres petits appareils...</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Beauté & Santé
                                </a>
                                <div className="dropdown-menu">
                                    <div className="agile_inner_drop_nav_info p-4">
                                        <h5 className="mb-3">Beauté et Accessoires, Santé</h5>
                                        <div className="row">
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Lotion</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Senteur</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Accessoires de beauté</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Appareils de beauté</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Médécine</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Power Banks</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >All Certified Refurbished</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Tablets</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Wearable Devices</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Smart Home</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Wearable Devices</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Smart Home</NavLink>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Mode
                                </a>
                                <div className="dropdown-menu">
                                    <div className="agile_inner_drop_nav_info p-4">
                                        <h5 className="mb-3">Vêtements, Chaussures, Accessoires</h5>
                                        <div className="row">
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Vêtements pour hommes</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Vêtements pour femmes</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Vêtements mixtes</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Accessoires</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Chaussures pour hommes</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Chaussures pour femmes</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Chaussures mixtes</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Alimentation
                                </a>
                                <div className="dropdown-menu">
                                    <div className="agile_inner_drop_nav_info p-4">
                                        <h5 className="mb-3">Boissons</h5>
                                        <div className="row">
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Vins</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Whisky</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Bières</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Jus gazeux</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Jus naturel</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Intérieur & Design
                                </a>
                                <div className="dropdown-menu">
                                    <div className="agile_inner_drop_nav_info p-4">
                                        <h5 className="mb-3">Mobilier, Ustensiles, Installation</h5>
                                        <div className="row">
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Mobilier d'intérieur</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink >Installation d'intérieur</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li>
                                                        <NavLink >Ustensiles de cuisine</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Découvrir
                                </a>
                                <div className="dropdown-menu">
                                    <NavLink className="dropdown-item" to="/about-us">A propos</NavLink>
                                    <NavLink className="dropdown-item" to="/contact-us">Nous contacter</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink to="/terms" className="dropdown-item" >Conditions d'utilisation</NavLink>
                                    <NavLink className="dropdown-item" to="/faqs">FAQS</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/help">Aide</NavLink>
                                    <NavLink className="dropdown-item" to="/privacy">Privacy</NavLink>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;