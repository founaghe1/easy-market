import React from 'react'
import './Compte.css';
import Newsletter from '../../Newsletter/Newletter';
import Footer from '../../Dashdoard/Footer/Footer';
import SideBarCompte from '../SideBarCompte/SideBarCompte';
import Formulaire from '../Formulaire/Formulaire';
import SidebarFooter from '../SidebarFooter/SidebarFooter';
import Navbar from '../../Navbar/Navbar';

const Compte = () => {
    return (
        <div>
            <Navbar />
            <div className='container-fluid my-3 ps-md-5'>
                <div className="row">
                    <div className="col-md-2 ">
                        <SideBarCompte />
                    </div>

                    <div className="col-lg-10 col-md-12 col-sm-12 d-flex flex-column">
                        <div className='title p-2'>
                            <h1>Mon profil</h1>
                        </div>
                        <div className="">
                            <Formulaire />
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

export default Compte
