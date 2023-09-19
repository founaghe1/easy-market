import React from "react";
import "./hommesproduct.css";
// import Navbar from '../Dashdoard/Navbar/Navbar'
import Sidebar from "../Sidebar/Sidebar";
import Productreutisable from "../Productreutilisable/Productreutisable";
// import Newletter from '../Newsletter/Newletter'
// import Footer from '../Dashdoard/Footer/Footer';
import { IoIosMan } from "react-icons/io";
import { Link } from "react-router-dom";
import ProdPopulaire from "../ProdPopulaire/ProdPopulaire";
import { prod } from "../../Data/Data";

const HommesProduct = () => {
  return (
    <div>
      {/* <div>
            <Navbar />
        </div>  */}
      <p className="fil-arien text-start ps-5 pt-5">
        <Link to="/" className="text-decoration-none">
          <span className="chemin fw-bold pe-1">Accueil </span>
        </Link>
        {">"}
        <Link to="/produit" className="text-decoration-none">
          <span className="actuel ps-1 pe-1"> Nos produits </span>
        </Link>
        {">"} <span className="actuel ps-1"> Hommes</span>
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 sideb">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-12  pt-5">
            <p className="ps-2">
              {" "}
              <span className="spMan p-2">
                {" "}
                <IoIosMan className="fs-3 man" />{" "}
              </span>{" "}
              <span className="ps-2 homm">Hommes</span>{" "}
            </p>
             
            <div className="row myRow pe-5 justify-content-center align-items-center my-5 ">
                    {prod.map((image) => (
                        <div className="colonne col-lg-3 col-md-6 col-sm-6">
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
        {/* <div>
                <Newletter />
            </div> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default HommesProduct;
