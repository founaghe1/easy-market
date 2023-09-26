import React from "react";
import "./produit.css";
import Sidebar from "../Sidebar/Sidebar";
import Productreutisable from "../Productreutilisable/Productreutisable";
import { Link } from "react-router-dom";


const Produit = () => {
  return (
    <div>
      <p className="fil-arien text-start ps-5 pt-5">
        <Link to="/" className="text-decoration-none">
          <span className="chemin fw-bold pe-1">Accueil </span>
        </Link>
        {">"} <span className="actuel ps-1"> Produits</span>
      </p>
      <div className="container-fluid overflow">
        <div className="row">
          <div className="col-md-2 sideba">
            <Sidebar />
          </div>
          <div className="col-md-10 ps-md-5">
            <Productreutisable />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Produit;
