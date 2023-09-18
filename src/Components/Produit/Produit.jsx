import React from "react";
import "./produit.css";
// import Navbar from '../Dashdoard/Navbar/Navbar'
import Sidebar from "../Sidebar/Sidebar";
import Productreutisable from "../Productreutilisable/Productreutisable";
import { Link } from "react-router-dom";
// import Newletter from '../Newsletter/Newletter'
// import Footer from '../Dashdoard/Footer/Footer'

const Produit = () => {
  return (
    <div>
      {/* <div className='navb shadow pb-3'>
            <Navbar />
        </div> */}
      <p className="fil-arien text-start ps-5 pt-5">
        <Link to="/" className="text-decoration-none">
          <span className="chemin fw-bold pe-1">Accueil </span>
        </Link>
        {">"} <span className="actuel ps-1"> Produits</span>
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 sideba">
            <Sidebar />
          </div>
          <div className="col-md-10 ps-md-5">
            <Productreutisable />
            <Productreutisable />
          </div>
        </div>
        {/* <div>
                <Newletter />
            </div>
            
                <Footer /> */}
      </div>
    </div>
  );
};

export default Produit;
