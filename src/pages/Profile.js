import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { logout } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { dateParser } from "../functions/index";
import Comparaison from "../components/Comparaison";

const Profile = () => {
    const { navigate } = useNavigate()
    const userStorage = localStorage.getItem('oncheckUser')
	const [user, setUser] = useState(userStorage ? JSON.parse(userStorage) : {})

    const handleSubmit = (e) => {
        e.preventDefault()

        if (window.alert('Voulez-vous vraiment supprimer votre compte ?')) {
            console.log('Supprimer');
            logout()
            navigate('/home')
        }
    }

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
                            <li>Mon Profil </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="privacy py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>Mon </span>Compte
                    </h3>
                    
                    <div class="checkout-right">
                        <div class="table-responsive">
                            <table class="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Date de naissance</th>
                                        <th>Nombre de produits compares</th>
                                        <th>Membre depuis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="rem1">
                                        <td class="invert">{user.nom}</td>
                                        <td class="invert">{user.prenom}</td>
                                        <td class="invert">{dateParser(user.date_naissance)}</td>
                                        <td class="invert">15</td>
                                        <td class="invert">{dateParser(user.created_at)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="checkout-left">
                        <div class="address_form_agile mt-sm-5 mt-4">
                            <form onSubmit={handleSubmit} class="creditly-card-form agileinfo_form">
                                <button type="submit" class="submit check_out btn">Supprimer mon compte</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="privacy py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>Mes </span>Comparaisons
                    </h3>
                    
                    <div class="checkout-right">
                        <h4 class="mb-sm-4 mb-3">Votre liste de comparaisons contient:
                            <span>3 Produits</span>
                        </h4>
                        <div class="table-responsive">
                            <table class="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Article</th>
                                        <th>Prix</th>
                                        <th>Date d'ajout</th>
                                        <th>Revoir</th>
                                        <th>Enlever</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Comparaison />
                                    <Comparaison />
                                    <Comparaison />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="checkout-right-basket">
                        <NavLink to='/' class="submit check_out btn">Back to home</NavLink>
					</div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Profile;