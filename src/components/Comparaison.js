import React from 'react';
import { NavLink } from 'react-router-dom';

const Comparaison = (comparaison) => {


    return (
        <tr class="rem1">
            <td class="invert-image">
                <NavLink to="/product">
                    <img src="assets/images/a.jpg" alt="image_produit" class="img-responsive" />
                </NavLink>
            </td>
            <td class="invert"></td>
            <td class="invert">FCFA</td>
            <td class="invert"></td>
            <td class="invert">
                <NavLink to='/product'>Voir</NavLink>
            </td>
            <td class="invert">
                <div class="rem">
                    <div class="close1"></div>
                </div>
            </td>
        </tr>
    )
}

export default Comparaison;