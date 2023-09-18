import React from 'react';
import './modepaiement.css';
// import Navbar from '../../Dashdoard/Navbar/Navbar';
import { Link } from 'react-router-dom';
// import Newletter from '../../Newsletter/Newletter';
// import Footer from '../../Dashdoard/Footer/Footer';


const Modepaiement = () => {
  return (
    <div>
      {/* <div className="shadow pb-3">
        <Navbar />
      </div> */}
      <p className='fil-arien text-start ps-5 pt-5'>
        <Link to='/produit' className='text-decoration-none'>
          <span className='chemin fw-bold pe-1'>Marketplace  </span>
        </Link> 
        {'>'} 
        <Link to="/mon-panier" className='text-decoration-none'>
          <span className='actuel ps-1 pe-1'> mon panier </span> 
        </Link>
        {'>'} <span className='actuel ps-1'>  valider mon panier</span>
      </p>

      <div className="container-fluid pb-3">
        <div className="row">
          <div className="col-md-9">
            <div className=" mt-5 pt-5">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-point timline1page3 d-flex align-items-center justify-content-center">
                    <span>1</span>{" "}
                  </div>
                  <div className="timeline-content">
                    <p>Informations personnelles</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-point timline2page3 d-flex align-items-center justify-content-center">
                    2
                  </div>
                  <div className="timeline-content">
                    <p>Mode de livraison</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-point timline3page3 d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <div className="timeline-content">
                    <p>Finaliser</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-md-5">
              <h6 className="h1 ps-3">Choisir le mode de paiement</h6>
              <form action="" className="">
                <div className="w-50 div2 px-2 ps-3">
                  <div class=" mt-sm-4 mt-md-1 radio ps-3 py-3 mb-5">
                    <input
                      type="radio"
                      name="radio"
                      id="radio"
                      className="me-2"
                    />
                    <label for="radio">Payer avec paydunya</label>
                  </div>
                  <div class=" mt-sm-4 mt-md-1 radio ps-3 py-3">
                    <input
                      type="radio"
                      name="radio"
                      id="radio"
                      className="me-2"
                    />
                    <label for="radio">Paiement à la livraison</label>
                  </div>
                  <div className="d-flex justify-content-end justify-content-sm-center pt-5 divbtn">
                    <p className="text-center px-2 ">
                      <Link to="/mode-livraison">
                        <button className="btnbloc px-5 py-3 ">RETOUR</button>
                      </Link>
                    </p>
                    <p className="text-center">
                      <Link to="/checkout">
                        <button className="btnblock btnconfir px-5 py-3 ">Confirmer la commande</button>
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
      {/* <div className='newL'>
          <Newletter />
        </div>
        <div>
          <Footer />
        </div> */}
    </div>
  )
}

export default Modepaiement


