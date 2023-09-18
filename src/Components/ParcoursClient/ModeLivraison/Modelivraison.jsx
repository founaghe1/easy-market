import React from "react";
import "./modelivraison.css";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Newletter from "../../Newsletter/Newletter";
import Footer from "../../Dashdoard/Footer/Footer";

const Modelivraison = () => {
  return (
    <div>
    <div className="shadow pb-3">
      <Navbar />
    </div>
    <div className="container-fluid pb-3">
      <div className="row">
        <div className="col-md-9">
          <div className=" mt-5 pt-5">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-point timline1page2 d-flex align-items-center justify-content-center">
                  <span>1</span>{" "}
                </div>
                <div className="timeline-content">
                  <p>Informations personnelles</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-point timline2page2 d-flex align-items-center justify-content-center">
                  2
                </div>
                <div className="timeline-content">
                  <p>Mode de livraison</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-point timline3 d-flex align-items-center justify-content-center">
                  3
                </div>
                <div className="timeline-content">
                  <p>Finaliser</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-md-5">
            <h6 className="h1 ps-3">Mode de livraison</h6>
            <form action="" className="">
              <div className="w-50 div2 px-2 ps-3">
                <div class=" mt-sm-4 mt-md-1 radio ps-3 py-3 mb-5">
                  <input
                    type="radio"
                    name="radio"
                    id="radio"
                    className="me-2"
                  />
                  <label for="radio">Retrait en magasin</label>
                </div>
                <div class=" mt-sm-4 mt-md-1 radio ps-3 py-3">
                  <input
                    type="radio"
                    name="radio"
                    id="radio"
                    className="me-2"
                  />
                  <label for="radio">Livraison à Domicile</label>
                </div>
                <div className="d-flex justify-content-end divbtn pt-5">
                  <p className="text-center px-2 ">
                    <Link to="/infopersonnelle">
                      <button className="btnbloc px-5 py-3 ">RETOUR</button>
                    </Link>
                  </p>
                  <p className="text-center">
                    <Link to="/modepaiement">
                      <button className="btnblock px-5 py-3 ">SUIVANT</button>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-3 mt-md-5 pt-md-5 ps-sm-5 ps-md-0">
          <div className="pt-5 totpan">
            <div className="totalPan p-3 rounded">
              <h6>TOTAL DU PANIER</h6>
              <p className="d-flex justify-content-between ">
                {" "}
                <span> Sous-total</span>{" "}
                <span className="fw-bold pe-3">1000</span>{" "}
              </p>

              <p className="px-2">
                <hr />
              </p>
              <p className="d-flex justify-content-between">
                <span>TOTAL</span>{" "}
                <span className="fw-bold pe-3 fs-4">1000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='newL'>
        <Newletter />
      </div>
      <div>
        <Footer />
      </div>
  </div>
  );
};

export default Modelivraison;
