import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink } from 'react-router-dom';

const ContactUs = () => {
    return(
        <>
            <Header />

            <div class="page-head_agile_info_w3l"></div>

            <div class="services-breadcrumb">
                <div class="agile_inner_breadcrumb">
                    <div class="container">
                        <ul class="w3_short">
                            <li>
                                <a href="/">Accueil</a>
                                <i>|</i>
                            </li>
                            <li>Nous Contacter</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="contact py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>C</span>ontactez
                        <span> N</span>ous
                    </h3>
                    <div class="row contact-grids agile-1 mb-5">
                        <div class="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
                            <div class="contact-grid1 text-center">
                                <div class="con-ic">
                                    <i class="fas fa-map-marker-alt rounded-circle"></i>
                                </div>
                                <h4 class="font-weight-bold mt-sm-4 mt-3 mb-3">Addresse</h4>
                                <p>PK8 Derrière ESG, Douala
                                    <label>Cameroun.</label>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
                            <div class="contact-grid1 text-center">
                                <div class="con-ic">
                                    <i class="fas fa-phone rounded-circle"></i>
                                </div>
                                <h4 class="font-weight-bold mt-sm-4 mt-3 mb-3">Appellez-nous</h4>
                                <p>+(237) 694 750 509
                                    <label>+(237) 672 155 866</label>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-4 contact-grid agileinfo-6">
                            <div class="contact-grid1 text-center">
                                <div class="con-ic">
                                    <i class="fas fa-envelope-open rounded-circle"></i>
                                </div>
                                <h4 class="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
                                <p>
                                    <NavLink to="mailto:info@example.com">mail@oncheckcm.com</NavLink>
                                    <label>
                                        <NavLink to="mailto:info@example.com">oncheck237@gmail.com</NavLink>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form action="#" method="post">
                        <div class="contact-grids1 w3agile-6">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 contact-form1 form-group">
                                    <label class="col-form-label">Nom</label>
                                    <input type="text" class="form-control" name="Name" placeholder="" required="" />
                                </div>
                                <div class="col-md-6 col-sm-6 contact-form1 form-group">
                                    <label class="col-form-label">E-mail</label>
                                    <input type="email" class="form-control" name="Email" placeholder="" required="" />
                                </div>
                            </div>
                            <div class="contact-me animated wow slideInUp form-group">
                                <label class="col-form-label">Message</label>
                                <textarea name="Message" class="form-control" placeholder="" required=""> </textarea>
                            </div>
                            <div class="contact-form">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs;