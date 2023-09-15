import React from 'react';
import './hommesproduct.css'
import Navbar from '../Dashdoard/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Productreutisable from '../Productreutilisable/Productreutisable'
import Newletter from '../Newsletter/Newletter'
import Footer from '../Dashdoard/Footer/Footer';
import { IoIosMan } from 'react-icons/io';

const HommesProduct = () => {
  return (
    <div >
        <div>
            <Navbar />
        </div> 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 sideb'>
                    <Sidebar />
                </div>
                <div className='col-md-10 ps-md-5 pt-5'>
                    <p className='ps-2'> <span className='spMan p-2'> <IoIosMan className='fs-3 man'/> </span> <span className='ps-2 homm'>Hommes</span> </p>
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

export default HommesProduct