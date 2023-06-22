import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const MyComparaisons = () => {


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
                            <li>Mes comparaisons </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="privacy py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>Mes </span>comparaisons
                    </h3>
                    
                    <div class="checkout-right">
                        <h4 class="mb-sm-4 mb-3">Votre tableau de comparaisons contient:
                            <span>3 Produits</span>
                        </h4>
                        <div class="table-responsive">
                            <table class="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Produit</th>
                                        <th>Vendeur</th>
                                        <th>Nom du produit</th>
                                        <th>Prix</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="rem1">
                                        <td class="invert">1</td>
                                        <td class="invert-image">
                                            <NavLink to="single.html">
                                                <img src="images/a.jpg" alt=" " class="img-responsive" />
                                            </NavLink>
                                        </td>
                                        <td class="invert">Back Cover</td>
                                        <td class="invert">Back Cover</td>
                                        <td class="invert">$259</td>
                                        <td class="invert">
                                            <div class="rem">
                                                <div class="close1"> </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <tr class="rem2">
                                        <td class="invert">2</td>
                                        <td class="invert-image">
                                            <NavLink to="single2.html">
                                                <img src="images/a4.jpg" alt=" " class="img-responsive" />
                                            </NavLink>
                                        </td>
                                        <td class="invert">
                                            <div class="quantity">
                                                <div class="quantity-select">
                                                    <div class="entry value-minus">&nbsp;</div>
                                                    <div class="entry value">
                                                        <span>1</span>
                                                    </div>
                                                    <div class="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="invert">Cordless Trimmer</td>
                                        <td class="invert">$1,999</td>
                                        <td class="invert">
                                            <div class="rem">
                                                <div class="close2"> </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="rem3">
                                        <td class="invert">3</td>
                                        <td class="invert-image">
                                            <NavLink to="single.html">
                                                <img src="images/a3.jpg" alt=" " class="img-responsive" />
                                            </NavLink>
                                        </td>
                                        <td class="invert">
                                            <div class="quantity">
                                                <div class="quantity-select">
                                                    <div class="entry value-minus">&nbsp;</div>
                                                    <div class="entry value">
                                                        <span>1</span>
                                                    </div>
                                                    <div class="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="invert">Nikon Camera</td>
                                        <td class="invert">$37,490</td>
                                        <td class="invert">
                                            <div class="rem">
                                                <div class="close3"> </div>
                                            </div>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <div class="checkout-left">
                        <div class="address_form_agile mt-sm-5 mt-4">
                            <h4 class="mb-sm-4 mb-3">Add a new Details</h4>
                            <form action="payment.html" method="post" class="creditly-card-form agileinfo_form">
                                <div class="creditly-wrapper wthree, w3_agileits_wrapper">
                                    <div class="information-wrapper">
                                        <div class="first-row">
                                            <div class="controls form-group">
                                                <input class="billing-address-name form-control" type="text" name="name" placeholder="Full Name" required />
                                            </div>
                                            <div class="w3_agileits_card_number_grids">
                                                <div class="w3_agileits_card_number_grid_left form-group">
                                                    <div class="controls">
                                                        <input type="text" class="form-control" placeholder="Mobile Number" name="number" required />
                                                    </div>
                                                </div>
                                                <div class="w3_agileits_card_number_grid_right form-group">
                                                    <div class="controls">
                                                        <input type="text" class="form-control" placeholder="Landmark" name="landmark" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="controls form-group">
                                                <input type="text" class="form-control" placeholder="Town/City" name="city" required />
                                            </div>
                                            <div class="controls form-group">
                                                <select class="option-w3ls">
                                                    <option>Select Address type</option>
                                                    <option>Office</option>
                                                    <option>Home</option>
                                                    <option>Commercial</option>

                                                </select>
                                            </div>
                                        </div>
                                        <button class="submit check_out btn">Delivery to this Address</button>
                                    </div>
                                </div>
                            </form>
                            <div class="checkout-right-basket">
                                <NavLink to="payment.html">Make a Payment
                                    <span class="far fa-hand-point-right"></span>
                                </NavLink>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MyComparaisons;