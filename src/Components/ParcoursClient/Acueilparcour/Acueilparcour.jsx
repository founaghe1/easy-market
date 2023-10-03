import React from "react";
import "./acueilparcour.css";
import chemise from "../../../Assets/chemise.png";
import {
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ProdSimilaire from "../../ProdSimilaire/ProdSimilaire";
import BoutonFavoris from "../../Boutouns/BoutonFavoris";
import BoutonAjouter from "../../Boutouns/BoutonAjouter";
import PoduitDetail from "../../PoduitDetail";
import AvisComposant from "../../Avis/AvisComposant";
import Votes from "../../Avis/Votes";
import TableAvis from "../../Avis/TableAvis";
import Avis from "../../Avis/Avis";

const Acueilparcour = () => {
  return (
    <div>
      <p className="fil-arien text-start ps-5 pt-5">
        <Link to="/" className="text-decoration-none">
          <span className="chemin fw-bold pe-1">Accueil </span>
        </Link>
        {">"}
        <Link to="/produit-homme" className="text-decoration-none">
          <span className="actuel ps-1 pe-1"> Hommes </span>
        </Link>
        {">"} <span className="actuel ps-1"> Crown Summit Backpack</span>
      </p>
      <div className="container-fluid pt-3">
        <div className="row p-3 ps-md-5">
          <div className="col-md-6 ">
            <div className="imgChemise rounded-3">
              <img
                src={chemise}
                alt="chemise"
                className="w-100 h-100 chemise"
              />
            </div>
            <div className="tripleImg d-flex p-1">
              <p className="p-2 ps-0">
                <img src={chemise} alt="" className="w-100 rounded-3" />
              </p>
              <p className="p-2">
                <img src={chemise} alt="" className="w-100 rounded-2" />
              </p>
              <p className="p-2 pe-0">
                <img src={chemise} alt="" className="w-100 rounded-3" />
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <PoduitDetail/>
            <div className="butt col-lg-10 col-md-12 col-sm-6 d-flex flex-lg-row flex-md-column flex-sm-column justify-content-center justify-content-md-center align-items-md-center">
              <div className="">
                <p>
                <Link to="/favoris">
                  <BoutonFavoris/>
                  </Link>
                </p>
              </div>

              <div className="">
                <p>
                  <Link to="/mon-panier">
                    <BoutonAjouter/>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>


        <p className="px-5 my-4">
          <hr />
        </p>

       <Avis/>

        <p className="px-5 my-5">
          <hr />
        </p>

        <div className="row px-md-4">
          <div className="col-md-12">
            <h1 className="products ps-4">Produits similaires</h1>
            <ProdSimilaire />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acueilparcour;
