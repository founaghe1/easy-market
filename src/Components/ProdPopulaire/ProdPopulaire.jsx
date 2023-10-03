import React from 'react'
import './ProdPopulaire.css';
import './media-querrie-prod.css';
import { Link } from "react-router-dom";
import { prod } from '../../Data/Data';
import BoutonBlanc from '../Boutouns/BoutonBlanc/BoutonBlanc';

const ProdPopulaire = () => {
    return (
        <section className='proPopulaire'>
            <div className='container'>
                <h1 className="h1-title text-center">Produits populaires</h1>
                <div className="row justify-content-center align-items-center my-5">
                    {prod.map((image) => (
                        <div className="colonne col-lg-3 col-md-6 col-sm-6">
                            <div className="card rounded-4 mb-3 w-100">
                                <div>
                                    <div className='div-image position-relative'>
                                        <img src={image.img} className="card-img-top" alt="image" />
                                    </div>
                                    <div className='div-icon rounded-circle bg-white position-absolute'>
                                        <p className='icon text-center'>{image.icon}</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{image.title}</h5>
                                    <p className="card-text">{image.texte}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='col-12 text-end'>
                        <BoutonBlanc />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProdPopulaire
