import React from "react";
import Header from "../components/Header";
import '../styles/NotFound.css';

const NotFound = () => {
    return(
        <>
            <Header />

            <div className="not-found">
                <p>La page que vous recherchez est introvable</p>
                <a className="link" href="/">Retourner a l'accueil</a>
            </div>
        </>
    )
}

export default NotFound;