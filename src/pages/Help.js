import Footer from "../components/Footer";
import Header from "../components/Header";

const Help = () => {
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
                            <li>Aide</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="faqs-w3l py-sm-5 py-4">
                <div class="container py-xl-4 py-lg-2">
                    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>A</span>ide
                    </h3>
                    <div class="wthree-help mb-sm-5 mb-4">
                        <div class="agile-left-help">
                            <h3 class="w3-head">Comment pouvons-nous vous aider</h3>
                            <form action="#" method="get">
                                <textarea placeholder="Votre requete" name="Message" required=""></textarea>
                                <input type="submit" value="Envoyer" />
                            </form>
                            <h5 class="my-sm-4 my-3">OU</h5>
                            <a href="/contact-us">Nous Contacter</a>
                            <h5 class="my-sm-4 my-3">Maitriser mieux ce comparateur</h5>
                            <a href="/faqs">FAQS</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Help;