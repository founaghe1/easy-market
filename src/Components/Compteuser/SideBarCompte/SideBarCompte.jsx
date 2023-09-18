import React from 'react'
import './SideBarCompte.css';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";

const SideBarCompte = () => {
    return (
        <div className='sidebars'>
            <div className='container-fluid'>
                <div className="row my-3">
                    <div className='col-md-12'>

                    
                    <ul className='ul'>
                        <Link to="/compte" className="link text-decoration-none text-dark mb">
                            <li className='li  mb-1 d-flex align-items-center'>
                                <p className='ps-3'>
                                    <FaUserAlt className='ICON ' /> <span className='compte  ps-2'>Mon profil</span>
                                </p>
                            </li>
                        </Link>

                        <Link to="/commande" className="link text-decoration-none text-dark mb-5 ">
                            <li className='li  mb-1 d-flex align-items-center'>
                                <p className='ps-3'>
                                    <ImFolderUpload className='ICON mb-0' /> <span className='compte mb-0 ps-2'>Mes commandes</span>
                                </p>
                            </li>
                        </Link>

                        <Link to="/panier" className="link text-decoration-none text-dark">
                            <li className='li  mb-1 d-flex align-items-center'>
                                <p className=' ps-3'>
                                    <FaCartShopping className='ICON mb-0' /> <span className='compte mb-0 ps-2'>Mon panier</span>
                                </p>
                            </li>
                        </Link>


                        <Link to="/favoris" className="link text-decoration-none text-dark">
                            <li className='li  mb-1 d-flex align-items-center'>
                                <p className=' ps-3'>
                                    <AiFillHeart className='ICON mb-0' /> <span className='compte mb-0 ps-2'>Mes favoris</span>
                                </p>
                            </li>
                        </Link>

                    </ul>
                    

                    <ul className='ul'>
                        <Link to="/logout" className="text-decoration-none text-dark p-2">
                            <li className='li pb-3 ps-4'>
                                <span className='deconnexion mb-0 ms-3'>Déconnexion</span>
                            </li>
                        </Link>
                    </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideBarCompte
