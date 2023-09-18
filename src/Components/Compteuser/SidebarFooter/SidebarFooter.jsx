import React from 'react'
import './SidebarFooter.css';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";

const SidebarFooter = () => {
    return (
        <section className='sidebar-footer fixed-bottom'>
            <div className='container'>
                <div className="row my-3 ">
                    <ul className='ul d-flex flex-row justify-content-center align-items-center justify-content-md-between align-items-md-center'>
                        <Link to="/compte" className="link text-decoration-none text-dark">
                            <li className='list d-flex'>
                                <FaUserAlt className='ICONS mb-0' />
                            </li>
                        </Link>

                        <Link to="/commande" className="link text-decoration-none text-dark">
                            <li lassName='list d-flex'>
                                <ImFolderUpload className='ICONS mb-0' />
                            </li>
                        </Link>

                        <Link to="/monpanier" className="link text-decoration-none text-dark">
                            <li lassName='list d-flex'>
                                <FaCartShopping className='ICONS mb-0' />
                            </li>
                        </Link>

                        <Link to="/favoris" className="link text-decoration-none text-dark">
                            <li lassName='list d-flex'>
                                <AiFillHeart className='ICONS mb-0' />
                            </li>
                        </Link>
                        <Link to="/logout" className="text-decoration-none text-dark">
                            <li className='list'>
                                <RiLogoutBoxRFill className='ICONS mb-0' />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SidebarFooter
