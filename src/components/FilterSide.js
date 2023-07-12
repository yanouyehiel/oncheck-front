import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const FilterSide = (props) => {
    const [rangeValue, setRangeValue] = useState(1000);
    const [productsMostCompared, setProductsMostCompared] = useState([])

    const radiosReduction = ["5", "10", "20", "30", "50", "60"];
    const radiosCategorie = ["Electroménager", "Intérieur & Design", "Electronique", "Mode", "Alimentation", "Beauté & Santé"];

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/produits-categorie/62'
            )
            .then((res) => {
                setProductsMostCompared(res.data);
            }
        );
    }, [])

    return(
        <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
            <div className="side-bar p-sm-4 p-3">
                {/* <div className="search-hotel border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Recherchez ici..</h3>
                    <form>
                        <input type="search" placeholder="Nom du produit..." name="search" required="" />
                        <input type="submit" value=" " />
                    </form>
                </div> */}
                <div className="range border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Prix</h3>
                    <div className="w3l-range">
                        <input type="range" className="checked" min="1000" max="1000000" value={rangeValue}
                        onChange={(e) => setRangeValue(e.target.value)} />
                    </div>
                </div>
                <div className="cancel border-bottom py-2">
                    {
                        (props.selectedRadioReduction || props.selectedRadioCategorie || props.selectedRadioLivraison || props.selectedRadioNewProduit) 
                        && <h5 onClick={() => 
                            [
                                props.setSelectedRadioReduction(""), 
                                props.setSelectedRadioCategorie(""),
                                props.setSelectedRadioLivraison(""),
                                props.setSelectedRadioNewProduit("")
                            ]
                        }>Annuler le filtre</h5>
                    }
                </div>
                <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Réduction</h3>
                    <ul>
                        {radiosReduction.map((radio) => {
                            return(
                                <li key={radio}>
                                    <input type="radio" 
                                        value={radio}
                                        className="checked"
                                        id={radio} 
                                        checked={radio === props.selectedRadioReduction} 
                                        onChange={(e) => props.setSelectedRadioReduction(e.target.value)} 
                                    />
                                    <span className="span">Moins de {radio}%</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Catégories</h3>
                    <ul>
                        {radiosCategorie.map((radio) => {
                            return(
                                <li key={radio}>
                                    <input type="radio" 
                                        value={radio}
                                        className="checked"
                                        id={radio} 
                                        checked={radio === props.selectedRadioCategorie} 
                                        onChange={(e) => props.setSelectedRadioCategorie(e.target.value)} 
                                    />
                                    <span className="span">{radio}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Livraison disponible</h3>
                    <ul>
                        <li>
                            <input type="radio" 
                                className="checked"
                                value={props.selectedRadioLivraison} 
                                onChange={(e) => props.setSelectedRadioLivraison(e.target.value)}
                            />
                            <span className="span">Oui</span>
                        </li>
                        <li>
                            <input type="radio" 
                                className="checked"
                                value={props.selectedRadioLivraison} 
                                onChange={(e) => props.setSelectedRadioLivraison(e.target.value)}
                            />
                            <span className="span">Non</span>
                        </li>
                    </ul>
                </div>
                <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Nouveaux produits</h3>
                    <ul>
                        <li>
                            <input type="radio" className="checked" />
                            <span className="span">Moins de 30 jours</span>
                        </li>
                        <li>
                            <input type="radio" className="checked" />
                            <span className="span">Moins de 90 jours</span>
                        </li>
                        <li>
                            <input type="radio" className="checked" />
                            <span className="span">Plus de 90 jours</span>
                        </li>
                    </ul>
                </div>
                <div className="f-grid py-2">
                    <h3 className="agileits-sear-head mb-3">Produits les plus comparés</h3>
                    <div className="box-scroll">
                        <div className="scroll">
                            {productsMostCompared.slice(0, 10).map((product, item) => (
                                <div key={item} className={(item % 2 === 0) ? "row" : "row my-4"}>
                                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                        {"assets/images/" + product.image_1 ?
                                            <img src={"assets/images/" + product.image_1} alt={product.image_1} className="img-fluid" />
                                            : <img src="assets/images/noimage.jpg" alt={product.image_1} className="img-fluid" />
                                        }
                                    </div>
                                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                        <NavLink to={"product/" + product.id}>{product.nom}</NavLink>
                                        <p className="price-mar mt-2">{product.prix} FCFA</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSide;