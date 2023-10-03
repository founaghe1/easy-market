import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

const BoutonAjouter = () => {
    return (
        <div>
            <button className="btnAjou">
                Ajouter au panier <AiOutlineShoppingCart className="fs-4" />
            </button>
        </div>
    )
}

export default BoutonAjouter
