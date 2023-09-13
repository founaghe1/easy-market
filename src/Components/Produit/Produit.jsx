import React from 'react'
import Navbar from '../Dashdoard/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Productreutisable from '../Productreutilisable/Productreutisable'
import Newletter from '../Newsletter/Newletter'
import Footer from '../Dashdoard/Footer/Footer'

const Produit = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 sideb'>
                    <Sidebar />
                </div>
                <div className='col-md-10 ps-5'>
                    <Productreutisable />
                    <Productreutisable />
                </div>
            </div>
            <div>
                <Newletter />
            </div>
            
                <Footer />
        </div>
    </div>
  )
}

export default Produit