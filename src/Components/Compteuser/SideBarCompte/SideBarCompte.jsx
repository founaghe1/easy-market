import React from 'react'
import './SideBarCompte.css';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { compteSidebar, logout } from '../../../Data/Data';

const SideBarCompte = () => {
    return (
        <div className='sidebars'>
            <div className='container-fluid w-100'>
                <div className="row my-3">
                    <div className='col-md-12'>
                        {/* Sidebar Mon compte */}
                        {compteSidebar.map((sidebar) => (
                            <ul className='ul w-100'>
                                <Link to={sidebar.lien} className="link text-decoration-none text-dark mb">
                                    <li className='li  mb-1 d-flex align-items-center'>
                                        <p className='ps-3'>
                                            <span className='ICON mb-0'>{sidebar.iconSidebar}</span>
                                            <span className='compte mb-0 ps-2'>{sidebar.texte}</span>
                                        </p>
                                    </li>
                                </Link>
                            </ul>
                        ))}
                        
                        {logout.map((sidebar) => (
                            <ul className='ul'>
                                <Link to={sidebar.lien} className="link text-decoration-none text-dark mb">
                                <li className='li pb-3 ps-4'>
                                <span className='deconnexion mb-0 ms-3'>{sidebar.texte}</span>
                            </li>
                                </Link>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarCompte
