import React from "react";
import "./infoclient.css";
import Navbar from "../../../Dashdoard/Navbar/Navbar";
import { Link } from "react-router-dom";
import Newletter from "../../../Newsletter/Newletter";
import Footer from "../../../Dashdoard/Footer/Footer";

const Infoclient = () => {
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
                  <div className="timeline-point timline1 d-flex align-items-center justify-content-center"><span>1</span> </div>
                  <div className="timeline-content">
                    <p>Informations personnelles</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-point timline2 d-flex align-items-center justify-content-center">2</div>
                  <div className="timeline-content">
                    <p>Mode de livraison</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-point timline3 d-flex align-items-center justify-content-center">3</div>
                  <div className="timeline-content">
                    <p>Finaliser</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-md-5">
                <h1 className="h1 ps-1">Informations personnelles</h1>
                <form action="" className="d-md-flex ">
                    <div className="w-50 div1 px-2">
                        <div class="input-group d-block">
                            <label for="username">Prénom</label>
                            <input type="text" name="username" id="username" placeholder="Fatou" />
                        </div>
                        <div class="input-group d-block mt-4">
                            <label for="email">Adresse mail</label>
                            <input type="email" name="username" id="email" placeholder="ndiayefatou@gmail.com" />
                        </div>
                        <div class="input-group d-block mt-4">
                            <label for="adresse">Adresse</label>
                            <input type="text" name="adresse" id="adresse" placeholder="Sicap Liberté" />
                        </div>
                    </div>
                    <div className="w-50 div2 px-2">
                        <div class="input-group d-block mt-sm-4 mt-md-1">
                            <label for="name">NOM</label>
                            <input type="text" name="name" id="name" placeholder="Ndiaye" />
                        </div>
                        <div class="input-group d-block mt-4">
                            <label for="call">TÉLÉPHONE</label>
                            <input type="text" name="call" id="call" placeholder="77 000 00 00" />
                        </div>
                    </div>
                </form>
                <div className="d-flex justify-content-end divbtn pt-5">
                    <p className='text-center px-2'>
                        <Link to="/monPanier"><button className='btnbloc px-5 py-3 '>RETOUR</button></Link>
                    </p>
                    <p className='text-center'>
                        <Link to="/modelivraison"><button className='btnblock px-5 py-3 '>SUIVANT</button></Link>
                    </p>
                </div>
                
            </div>
          </div>

          <div className="col-md-3 mt-md-5 pt-md-5">
            <div className="pt-5 totpan">
            <div className='totalPan p-3 rounded'>
                      <h6>TOTAL DU PANIER</h6>
                      <p className='d-flex justify-content-between '> <span> Sous-total</span> <span className='fw-bold pe-3'>1000</span> </p>

                      <p className='px-2'><hr /></p>
                      <p className='d-flex justify-content-between'><span>TOTAL</span> <span className='fw-bold pe-3 fs-4'>1000</span></p>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newL">
        <Newletter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Infoclient;
