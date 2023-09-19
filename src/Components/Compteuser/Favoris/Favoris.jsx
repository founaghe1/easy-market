import React from 'react'
import SideBarCompte from "../SideBarCompte/SideBarCompte";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import { favoirisImg } from '../../../Data/Data';


const Favoris = () => {
    return (
        <div>

            <div className='container-fluid my-3 ps-md-5'>
                <div className="row my-3">
                    <div className="col-lg-2">
                        <SideBarCompte />
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 my-4 pe-md-5">
                        <div className="row justify-content-center align-items-center my-5">
                            {favoirisImg.map((image) => (
                                <div className="colonne col-lg-3 col-md-6 col-sm-12">
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
                        </div>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SidebarFooter />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Favoris
