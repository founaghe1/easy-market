import React from 'react';
import './footer.css'
import logofooter from '../../../Assets/logofooter.png';
import { BsWhatsapp, BsTelephone, BsDot } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-fluid'>
                <div className='row py-5  text-light'>
                    <div className='col-md-4'>
                        <div className='text-sm-center text-xs-start ps-5'>
                            <img src={logofooter} alt="" />
                            <div className='mt-2'>
                            <h4>Contactez nous</h4>
                            <div className='d-flex justify-content-sm-center mt-4'>
                                <BsWhatsapp className='fs-3' />
                                <p className='text-start ps-3'>WhatsApp <br /> +221 76 371 99 99</p>
                            </div>
                            <div className='d-flex justify-content-sm-center mt-4'>
                                <BsTelephone className='fs-3' />
                                <p className='text-start ps-3'>Téléphone <br /> +221 33 863 16 10</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 ps-md-5 categorie'>
                        <div className='text-light text-sm-center text-md-start ps-md-5'>
                            <div className="titre">
                                <h5 className=''>Nos catégories</h5>
                                <div className='tiret'></div>
                            </div>
                            <ul className='ul text-sm-center text-md-start ps-md-5'>
                                <li className='li py-2'> <BsDot /> <a href="#">Immobilier</a></li>
                                <li className='li py-2'> <BsDot /> <a href="#">Equipement</a></li>
                                <li className='li py-2'> <BsDot /> <a href="#">Voiture</a></li>
                                <li className='li py-2'> <BsDot /> <a href="#">Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 ps-md-5 categorie'>
                        <div className='text-light text-sm-center text-md-start'>
                            <div className="titre">
                                <h5 className=''>Assistance</h5>
                                <div className='tiret text-center'></div>
                            </div>
                            <ul className='ul text-sm-center text-md-start '>
                                <li className='list py-2'> <BsDot /> <a href="#">Comment ça marche</a></li>
                                <li className='list py-2'> <BsDot /> <a href="#">Conditions d'utilisation </a></li>
                                <li className='list py-2'> <BsDot /> <a href="#">Nos abonnements</a></li>
                                <li className='list py-2'> <BsDot /> <a href="#">Politique de confidentialité</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className='px-5 text-light'><hr /></p>
                    <p className='text-center copy text-light'>© 2023 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer