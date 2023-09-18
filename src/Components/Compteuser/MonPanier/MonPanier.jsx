import React from 'react'
import Newsletter from '../../Newsletter/Newletter'
import Footer from '../../Dashdoard/Footer/Footer'
import SideBarCompte from '../SideBarCompte/SideBarCompte'
import TablePanier from '../TablePanier/TablePanier'
import SidebarFooter from '../SidebarFooter/SidebarFooter'
import Navbar from '../../Dashdoard/Navbar/Navbar'
const MonPanier = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <div className='container-fluid my-3 ps-md-5'>
                <div className="row my-3">
                    <div className="col-lg-2">
                        <SideBarCompte />
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 ">
                        <div className='title p-2'>
                            <h1>Mon panier</h1>
                        </div>
                        <TablePanier />

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

export default MonPanier
