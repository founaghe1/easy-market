import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./accueil.css";
import pull from "../../../Assets/PULL.png";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/im";
import { BiChild } from "react-icons/bi";
import { PiWatchDuotone } from "react-icons/pi";
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
import client from "../../../Assets/clienttesti.png"

const Accueil = () => {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 2; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  return (
    <div className="container-fluid princip">
      <div className="row banner mt-2">
        <div className="col-md-7">
          <div className="text-light ps-2 ps-md-5">
            <h1 className="display-3 fw-bold">
              Votre site e-commerce{" "}
              <span className="display-1 fw-bold">personnalisable</span>
            </h1>
            <p className="fw-bold fs-5 mt-3">
              Vendez facilement vos meilleurs produits grâce à Easy Market
            </p>
            <button className="btn text-light mb-sm-2 py-3 px-5 fw-bold mt-3">
              VOIR NOS PRODUITS
            </button>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img src={pull} alt="pull" className="pull" />
        </div>
      </div>
      <div className="row section1 text-center pt-5">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fs-4">Hommes</p>
            <p className="sect1Ico rounded-circle d-flex flex-column justify-content-center align-items-center">
              <IoIosMan className="display-1 ico icoSect1" />
            </p>
          </div>
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
        <h1 className="text-center">Nouveautés du moments</h1><br/>
        <div class="row">
          <div class="col">
            <div class="container text-center my-3">
              <div class="row mx-auto my-auto justify-content-center">
                <div
                  id="recipeCarousel"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-img">
                            <img
                              src="https://via.placeholder.com/700x500.png/CB997E/333333?text=1"
                              class="img-fluid"
                            />
                          </div>
                          <div class="card-img-overlay">Slide 1</div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-img">
                            <img
                              src="https://via.placeholder.com/700x500.png/DDBEA9/333333?text=2"
                              class="img-fluid"
                            />
                          </div>
                          <div class="card-img-overlay">Slide 2</div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-img">
                            <img
                              src="https://via.placeholder.com/700x500.png/FFE8D6/333333?text=3"
                              class="img-fluid"
                            />
                          </div>
                          <div class="card-img-overlay">Slide 3</div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-img">
                            <img
                              src="https://via.placeholder.com/700x500.png/B7B7A4/333333?text=4"
                              class="img-fluid"
                            />
                          </div>
                          <div class="card-img-overlay">Slide 4</div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-img">
                            <img
                              src="https://via.placeholder.com/700x500.png/A5A58D/333333?text=5"
                              class="img-fluid"
                            />
                          </div>
                          <div class="card-img-overlay">Slide 5</div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-img">
                            <img
                              src="https://via.placeholder.com/700x500.png/6B705C/eeeeee?text=6"
                              class="img-fluid"
                            />
                          </div>
                          <div class="card-img-overlay">Slide 6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev bg-transparent w-aut"
                    href="#recipeCarousel"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <a
                    class="carousel-control-next bg-transparent w-aut"
                    href="#recipeCarousel"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sect3">
        <div className="row sect3 pt-5 px-3">
          <h1 className="text-center mb-4">Produits populaires</h1>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card ">
                <img src={sacamain} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={parfum2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={coca} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={ceinture} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-3">
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card ">
                <img src={shose1} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={montre} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={sac} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={shose2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-end pe-5"><button className="voirplus fs-3 ">Voir plus</button></p>
      </div>

      <div className="testimonial pb-5 px-3">
        <h1 className="text-center mt-4">Ce que dises nos clients</h1>
        <div className="row">
            <div className="col-md-4 mt-3">
                <div className="testi px-3 py-2 rounded">
                    <img src={quote} alt="" />
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti molestias vel eos laboriosam id, consectetur sit similique esse soluta odit eligendi iste.</p>
                    <div>
                        <p>
                            <img src={client} alt="" />
                            <span className="ms-2 fw-bold fs-5">Coper Toby</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-3">
                <div className="testi px-3 py-2 rounded">
                    <img src={quote} alt="" />
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti molestias vel eos laboriosam id, consectetur sit similique esse soluta odit eligendi iste.</p>
                    <div>
                        <p>
                            <img src={client} alt="" />
                            <span className="ms-2 fw-bold fs-5">Coper Toby</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-3">
                <div className="testi px-3 py-2 rounded">
                    <img src={quote} alt="" />
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti molestias vel eos laboriosam id, consectetur sit similique esse soluta odit eligendi iste.</p>
                    <div>
                        <p>
                            <img src={client} alt="" />
                            <span className="ms-2 fw-bold fs-5">Coper Toby</span>
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
