import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { logout } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { navigate } = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (window.alert('Voulez-vous vraiment supprimer votre compte ?')) {
            console.log('Supprimer');
            logout()
            navigate('/home')
        }
        logout()
        navigate('/home')
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
                                        <td class="invert">Yanou</td>
                                        <td class="invert">Yehiel</td>
                                        <td class="invert">Le 25 Janvier 2023</td>
                                        <td class="invert">15</td>
                                        <td class="invert">Le 25 Janvier 2023</td>
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

            <Footer />
        </>
    )
}

export default Profile;