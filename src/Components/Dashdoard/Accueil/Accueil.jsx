import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./accueil.css";
import pull from "../../../Assets/PULL.png";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/im";
import { BiChild } from "react-icons/bi";
import { PiWatchDuotone } from "react-icons/pi";
import { GoPaperAirplane } from "react-icons/go";
import chemise from "../../../Assets/chemise.png";
import shose from "../../../Assets/shose.png";
import parfum from "../../../Assets/parfum.png";
import sacamain from "../../../Assets/sacamain.png";
import parfum2 from "../../../Assets/parfum2.png";
import coca from "../../../Assets/coca.png";
import ceinture from "../../../Assets/ceinture.png";
import shose1 from "../../../Assets/shose1.png";
import montre from "../../../Assets/montre.png";
import sac from "../../../Assets/sac.png";
import shose2 from "../../../Assets/shose2.png";
import quote from "../../../Assets/quote-up.png";
import client from "../../../Assets/clienttesti.png";
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./Data";
import { AiFillStar } from "react-icons/ai"
import ProdPopulaire from "../../ProdPopulaire/ProdPopulaire";



const Accueil = () => {

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  

  return (
    <div className="container-fluid princip">
      <div className="row banner mt-2">
        <div className="col-md-7">
          <div className="text-light ps-2 ps-md-5">
            <h1 className="display-3 fw-bold h1">
              Votre site e-commerce{" "}
              <span className="display-1 fw-bold">personnalisable</span>
            </h1>
            <p className="fw-bold fs-5 mt-3">
              Vendez facilement vos meilleurs produits grâce à Easy Market
            </p>
            <Link to="/produit">
              <button className="btn text-light mb-sm-2 py-3 px-5 fw-bold mt-3">
                VOIR NOS PRODUITS
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img src={pull} alt="pull" className="pull" />
        </div>
      </div>
      <div className="row section1 text-center pt-5">
        <div className="col-md-3 col-sm-6 ">
          <Link to="/produit-homme" className="link">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fs-4">Hommes</p>
            <p className="sect1Ico rounded-circle d-flex flex-column justify-content-center align-items-center">
              <IoIosMan className="display-1 ico icoSect1" />
            </p>
          </div>
          </Link>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fs-4">Femmes</p>
            <p className="sect1Ico rounded-circle d-flex flex-column justify-content-center align-items-center">
              <ImWoman className="display-1 ico icoSect1" />
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fs-4">Enfants</p>
            <p className="sect1Ico rounded-circle d-flex flex-column justify-content-center align-items-center">
              <BiChild className="display-1 ico icoSect1" />
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fs-4">Equipement</p>
            <p className="sect1Ico rounded-circle d-flex flex-column justify-content-center align-items-center">
              {" "}
              <PiWatchDuotone className="display-1 ico icoSect1" />{" "}
            </p>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <h1 className="text-center">Nouveaux produits </h1>
        <br />
        <div className="row">
          <div className="col">
            <div className="container text-center my-3">
              <div className="row  justify-content-center">
                {/* carroussel */}
                <Carousel showDots={true} responsive={responsive} className="pb-5">
                  {product}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <ProdPopulaire />
      </div>

      <div className="testimonial pb-5 px-3">
        <h1 className="text-center mt-4">Ce que dises nos clients</h1>
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="testi px-3 py-2 rounded">
              <img src={quote} alt="" />
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti molestias vel eos laboriosam id, consectetur
                sit similique esse soluta odit eligendi iste.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <img src={client} alt="" />
                  <span className="ms-2 fw-bold fs-5">Coper Toby</span>
                </p>
                <p className="d-flex justify-content-between align-items-center">
                  <AiFillStar className="stoile fs-2"/> <span className="fw-bold fs-5">4.1</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="testi px-3 py-2 rounded">
              <img src={quote} alt="" />
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti molestias vel eos laboriosam id, consectetur
                sit similique esse soluta odit eligendi iste.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <img src={client} alt="" />
                  <span className="ms-2 fw-bold fs-5">Coper Toby</span>
                </p>
                <p className="d-flex justify-content-between align-items-center">
                  <AiFillStar className="stoile fs-2"/> <span className="fw-bold fs-5">4.3</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 shadow">
            <div className="testi px-3 py-2 rounded">
              <img src={quote} alt="" />
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti molestias vel eos laboriosam id, consectetur
                sit similique esse soluta odit eligendi iste.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <img src={client} alt="" />
                  <span className="ms-2 fw-bold fs-5">Coper Toby</span>
                </p>
                <p className="d-flex justify-content-between align-items-center">
                  <AiFillStar className="stoile fs-2"/> <span className="fw-bold fs-5">4.5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Accueil;
