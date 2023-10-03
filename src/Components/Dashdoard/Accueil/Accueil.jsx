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
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { favorisData, productData, responsive, respTestimonial } from "./Data";
import ProdPopulaire from "../../ProdPopulaire/ProdPopulaire";
import Testimonials from "../Testimonials/Testimonials";

import BoutonHome from "./BoutonHome";
import { service } from "../../../Data/Data";

const Accueil = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const favoris = favorisData.map((item) => (
    <Testimonials
      userName={item.userName}
      img={item.img}
      note={item.note}
      description={item.description}
    />
  ));

  return (
    <div className="container-fluid princip">
      <div className="row banner">
        <div className="col-md-7 mb-5">
          <div className="text-light ps-2 ps-md-5">
            <h1 className="display-3 fw-bold h1">
              <span className="eCommerce">
                Votre site e-commerce{" "}
              </span>
              <span className="personnalisable">personnalisable</span>
            </h1>
            <p className="p-banner mt-3">
              Vendez facilement vos meilleurs produits grâce à Easy Market
            </p>
            <Link to="/produit">
              <BoutonHome />
            </Link>
          </div>
        </div>
        <div className="col-md-5 text-center monPull">
          <img src={pull} alt="pull" className="pull" />
        </div>
      </div>
      <div className="row section1 text-center pt-5">
        {service.map((service) => (
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to={service.lien} className="link">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="fs-4">{service.texte}</p>
                <p className="sect1Ico rounded-circle d-flex flex-column justify-content-center align-items-center">
                  <span className="display-1 ico icoSect1">{service.iconService}</span>
                </p>
              </div>

            </Link>
          </div>
        ))}

      </div>

      <section className="bg-white">
        <div class="container pt-5">
          <h1 className="h1-title text-center">Nouveaux produits</h1>
          <br />
          <div className="row">
            <div className="col">
              <div className="container text-center my-3">
                <div className="row  justify-content-center">
                  {/* carroussel */}
                  <Carousel showDots={true} infinite autoPlay={true} responsive={responsive} className="pb-5">
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
        <div className="container-fluid bg-white">
          <div className="row">
            <div className="col-12">
              <h1 className="title text-center mt-4">Ce que dises nos clients</h1>
            </div>
          </div>
        </div>

      </section>

      <div className="testimonial pb-5 px-3">
        <div className="container">
          <div className="row">
            {/* carroussel */}
            <Carousel
              showDots={true}
              responsive={respTestimonial}
              autoPlay={true}
              infinite
              className="pb-5"
            >
              {favoris}
            </Carousel>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Accueil;
