import React from 'react';
import './produit.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Productreutisable from '../Productreutilisable/Productreutisable'
import Newletter from '../Newsletter/Newletter'
import Footer from '../Dashdoard/Footer/Footer'

const Produit = () => {
  return (
    <div> 
        <div className='navb shadow pb-3'>
            <Navbar />
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 sideba'>
                    <Sidebar />
                </div>
                <div className='col-md-10 ps-md-5'>
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