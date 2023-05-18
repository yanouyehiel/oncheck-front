import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FilterSide = () => {
    const [rangeValue, setRangeValue] = useState(1000);
    const [selectedRadioReduction, setSelectedRadioReduction] = useState('');
    const [selectedRadioCategorie, setSelectedRadioCategorie] = useState('');
    const [selectedRadioLivraison, setSelectedRadioLivraison] = useState('');
    const [selectedRadioNewProduit, setSelectedRadioNewProduit] = useState('');

    const radiosReduction = ["5", "10", "20", "30", "50", "60"];
    const radiosCategorie = ["Electroménager", "Intérieur & Design", "Electronique", "Mode", "Alimentation", "Beauté & Santé"];

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
                        (selectedRadioReduction || selectedRadioCategorie || selectedRadioLivraison || selectedRadioNewProduit) 
                        && <h5 onClick={() => 
                            [
                                setSelectedRadioReduction(""), 
                                setSelectedRadioCategorie(""),
                                setSelectedRadioLivraison(""),
                                setSelectedRadioNewProduit("")
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
                                        checked={radio === selectedRadioReduction} 
                                        onChange={(e) => setSelectedRadioReduction(e.target.value)} 
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
                                        checked={radio === selectedRadioCategorie} 
                                        onChange={(e) => setSelectedRadioCategorie(e.target.value)} 
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
                            <input type="radio" className="checked" />
                            <span className="span">Oui</span>
                        </li>
                        <li>
                            <input type="radio" className="checked" />
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
                            <div className="row">
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <img src="images/k1.jpg" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <NavLink>Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</NavLink>
                                    <p className="price-mar mt-2">$12,990.00</p>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <img src="images/k2.jpg" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <NavLink>Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</NavLink>
                                    <p className="price-mar mt-2">$12,499.00</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <img src="images/k3.jpg" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <NavLink>Ambrane 13000 mAh Power Bank (P-1310 Premium)</NavLink>
                                    <p className="price-mar mt-2">$1,199.00 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSide;