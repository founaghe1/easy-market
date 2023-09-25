import React, { useState } from "react";
import "./modevalidation.css";
import { Link } from "react-router-dom";

const Modevalidation = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = (e) => {
    e.preventDefault();

    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container-fluid">
      <div className="py-5">
        <ul className="nav nav-pills ul mb-3 d-flex justify-content-around">
          <li className={`nav-item`}>
            <button
              className={`nav-link active  rounded-circle ${
                currentPage >= 1 ? "active" : "inactive"
              } `}
              type="button"
            >
              1
            </button>
            <p>Information personnelles</p>
          </li>
          <li className={`nav-item`}>
            <button className={`nav-link  rounded-circle ${currentPage >= 2 ? "active" : "inactive"}`} type="button">
              2
            </button>
            <p>Mode de livraison</p>
          </li>

          <li className={`nav-item`}>
            <button className={`nav-link rounded-circle ${currentPage > 2 ? "active" : "inactive"}`} type="button">
              3
            </button>
            <p>Finaliser</p>
          </li>
        </ul>

        {currentPage === 1 && (
          <div>
            <div className="row">
              <div className="col-md-9">
                <div className="ps-md-5">
                  <h1 className="h1 ps-1">Informations personnelles</h1>
                  <form action="" className="d-md-flex ">
                    <div className="w-50 div1 px-2">
                      <div class="input-group d-block">
                        <label for="username">Prénom</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Fatou"
                        />
                      </div>
                      <div class="input-group d-block mt-4">
                        <label for="email">Adresse mail</label>
                        <input
                          type="email"
                          name="username"
                          id="email"
                          placeholder="ndiayefatou@gmail.com"
                        />
                      </div>
                      <div class="input-group d-block mt-4">
                        <label for="adresse">Adresse</label>
                        <input
                          type="text"
                          name="adresse"
                          id="adresse"
                          placeholder="Sicap Liberté"
                        />
                      </div>
                    </div>
                    <div className="w-50 div2 px-2">
                      <div class="input-group d-block mt-sm-4 mt-md-1">
                        <label for="name">NOM</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Ndiaye"
                        />
                      </div>
                      <div class="input-group d-block mt-4">
                        <label for="call">TÉLÉPHONE</label>
                        <input
                          type="text"
                          name="call"
                          id="call"
                          placeholder="77 000 00 00"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="d-flex justify-content-end divbtn pt-5">
                    <p className="text-center px-2">
                      <button
                        className="btnbloc px-5 py-3 "
                        onClick={handlePrevClick}
                      >
                        RETOUR
                      </button>
                    </p>
                    <p className="text-center">
                      <button
                        className="btnblock px-5 py-3 "
                        onClick={handleNextClick}
                      >
                        SUIVANT
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mt-md-5 pt-md-5">
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
        )}
        {currentPage === 2 && (
          <div>
            <div className="row">
              <div className="col-md-9">
                <div className="ps-md-5">
                  <h6 className="h1 ps-3">Mode de livraison </h6>
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
                          <button
                            className="btnbloc px-5 py-3 "
                            onClick={handlePrevClick}
                          >
                            RETOUR
                          </button>
                        </p>
                        <p className="text-center">
                          <button
                            className="btnblock px-5 py-3 "
                            onClick={handleNextClick}
                          >
                            SUIVANT
                          </button>
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
        )}

        {currentPage === 3 && (
          <div>
            <div className="row">
              <div className="col-md-9">
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
                          <button
                            className="btnbloc px-5 py-3 "
                            onClick={handlePrevClick}
                          >
                            RETOUR
                          </button>
                        </p>
                        <p className="text-center">
                          <button
                            className="btnblock btnconfir px-5 py-3 "
                            onClick={handleNextClick}
                          >
                            Confirmer la commande
                          </button>
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
        )}
      </div>
    </div>
  );
};

export default Modevalidation;
