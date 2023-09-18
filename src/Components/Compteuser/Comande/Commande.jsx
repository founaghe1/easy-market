import React from "react";
import "./Commande.css";
import Newsletter from "../../Newsletter/Newletter";
import Footer from "../../Dashdoard/Footer/Footer";
import SideBarCompte from "../SideBarCompte/SideBarCompte";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import Navbar from "../../Navbar/Navbar";
import { AiFillDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const Commande = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <div className="container-fluid my-3 ps-md-5">
        <div className="row">
          <div className="col-lg-2">
            <SideBarCompte />
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
            <div className="title">
              <h1>Mes commandes</h1>
            </div>
            <div className="my-3">
              <div className="container my-3">
                <div className="row justify-content-center">
                  <div className="col-12 pe-md-5">
                    <div className="row pe-md-5">
                      <div className="table-responsive resp">
                        <table className="table myTab">
                          <thead>
                            <tr className="tableau">
                              <th className="th">N.Commande</th>
                              <th className="th">Date</th>
                              <th className="th">Montant total</th>
                              <th className="th">Statut</th>
                              <th className="th">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="myRow ">
                              <td className="tabRow ">
                                <div className="mt-3 ms-3 d-flex align-items-center">
                                  <p class="anonyme" scope="row">
                                    35678
                                  </p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="div-p mt-3 d-flex align-items-center">
                                  <p className="p">31/10/2022</p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="div-p mt-3 d-flex align-items-center">
                                  <p className="p">500 €</p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="div-para mt-3 d-flex align-items-center">
                                  <p className="para p-2 rounded">Livré</p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                                  <IoEyeSharp className="text-success" />
                                  <AiFillDelete className="text-danger ms-3" />
                                </div>
                              </td>
                            </tr>

                            <tr className="myRow">
                              <td className="td tabRow">
                                <div className="mt-3 ms-3 d-flex align-items-center">
                                  <p class="anonyme" scope="row">
                                    35678
                                  </p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="div-p mt-3 d-flex align-items-center">
                                  <p className="p">31/10/2022</p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="div-p mt-3 d-flex align-items-center">
                                  <p className="p">500 €</p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="div-para mt-3 d-flex align-items-center">
                                  <p className="para p-2 rounded">Livré</p>
                                </div>
                              </td>

                              <td className="td tabRow">
                                <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                                  <IoEyeSharp className="text-success" />
                                  <AiFillDelete className="text-danger ms-3" />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <SidebarFooter />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Commande;
