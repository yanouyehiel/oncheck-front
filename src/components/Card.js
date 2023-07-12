import React from "react";
import { useNavigate } from "react-router-dom";
import { longueurTexte } from "../functions";

const Card = ({ produit }) => {
    let navigate = useNavigate()

    const redirect = (idProduit) => {
        navigate("/product/" + idProduit)
    }

    return (
        <div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                    {("assets/images/" + produit.image_1) ?
                        <img src={"assets/images/" + produit.image_1} alt={produit.image_1} width="200px" height="200px" />
                        : <img src="assets/images/noimage.jpg" alt={produit.image_1} />
                    }
                    <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                            <a role="button" onClick={() => redirect(produit.id)} className="link-product-add-cart">Comparer</a>
                        </div>
                    </div>
                </div>
                <div className="item-info-product text-center border-top mt-4">
                    <h4 className="pt-1">
                        <a onClick={() => redirect(produit.id)}>{ longueurTexte(produit.nom) }</a>
                    </h4>
                    <div className="info-product-price my-2">
                        <span className="item_price">{ produit.prix } FCFA</span>
                        { produit.reduction > 0 && 
                            <del>{ (1 + produit.reduction) * produit.prix }</del>
                        }
                    </div>
                    
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <input type="button" value="Comparer" onClick={() => redirect(produit.id)} className="button btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;