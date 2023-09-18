import React from 'react'
import Newsletter from "../../Newsletter/Newletter";
import Footer from "../../Dashdoard/Footer/Footer";
import SideBarCompte from "../SideBarCompte/SideBarCompte";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import Navbar from "../../Dashdoard/Navbar/Navbar";
import { similaire } from '../data/Data'


const Favoris = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <div className='container-fluid my-3 ps-md-5'>
                <div className="row my-3">
                    <div className="col-lg-2">
                        <SideBarCompte />
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 my-4 pe-md-5">
                        <div className="row g-3">
                            {similaire.map((image) => (
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
                                    <div className='d-flex flex-column align-items-start'>
                                        <img src={image.img} alt="image" className='img-fluid image-cartes mx-auto' />
                                    </div>
                                    <div className='d-flex flex-column text-center my-3'>
                                        <p className='p-texte text-center'>{image.title}</p>
                                        <p className='paragraphe text-center'>{image.texte}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SidebarFooter />
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Favoris
