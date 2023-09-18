import React from 'react'
import './NewProduit.css';
import chemise from "../../Assets/chemise.png";
import shose from "../../Assets/shose.png";
import parfum from "../../Assets/parfum.png";
import coca from "../../Assets/coca.png";
import ceinture from "../../Assets/ceinture.png";
import montre from "../../Assets/montre.png";
import sac from "../../Assets/sac.png";
import shose2 from "../../Assets/shose2.png";
import { AiOutlineHeart } from "react-icons/ai";

const NewProduit = () => {
    return (
        <section className='newprod'>
            <div className="container">
                <div className="row">
                    <div className="div">
                        <h1 className='text-center'>Nouveaux produits</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default NewProduit
