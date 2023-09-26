import React from "react";
import "./acueilparcour.css";
import chemise from "../../../Assets/chemise.png";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ProdSimilaire from "../../ProdSimilaire/ProdSimilaire";

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
            <h1 className="h1-span">Crown Summit Backpack</h1>
            <p className="marhom fs-4">Marque: Home </p>
            <p>
              <AiFillStar className="fs-2 start" />
              <AiFillStar className="fs-2 start" />
              <AiFillStar className="fs-2 start" />
              <AiFillStar className="fs-2 start" />
              <AiOutlineStar className="fs-2 start" />
            </p>
            <p className="dispo">Disponible: 74</p>
            <p className="plorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              accusamus cupiditate accusantium facere possimus quidem nisi
              provident qui, nostrum suscipit explicabo odio natus atque. Hic ad
              aut dolores esse reiciendis.
            </p>
            <p className="price my-5">200.000 FCFA</p>
            <div className="d-flex">
              <p className="qte pe-5">Quantité</p>
              <p className="fs-3">
                <span className="">-</span>
                <span className="px-4">2</span>
                <span className="">+</span>
              </p>
            </div>
            <div className="d-flex">
              <p className="total pe-5 ">Total</p>
              <p className="priTotal ps-md-5 fw-bold">200.000 FCFA</p>
            </div>
            <div className="butt col-lg-10 col-md-12 col-sm-6 d-flex flex-lg-row flex-md-column flex-sm-column justify-content-center justify-content-md-center align-items-md-center">
              <div className="">
                <p>
                  <button className="btnFav px-5 py-2 fs-3 me-2">
                    Favoris <AiOutlineHeart className="coeur" />
                  </button>
                </p>
              </div>

              <div className="">
                <p>
                  <Link to="/mon-panier">
                    <button className="btnAjou">
                      Ajouter au panier <AiOutlineShoppingCart className="fs-4" />
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>


        <p className="px-5 my-4">
          <hr />
        </p>

        <div className="row ps-4 pt-5">
          <div className="col-md-4">
            <h1 className="h3 text-md-center">Avis des clients</h1>
            <p className="moyen text-md-center">NOTE MOYENNE</p>
            <div>
              <p className="text-md-center">
                <span className="quatre fw-bold">4</span>
                <span className="cinq">/</span>
                <span className="cinq">5</span>
              </p>
              <p className="etoile text-md-center">
                <AiFillStar className="start" />
                <AiFillStar className=" start" />
                <AiFillStar className=" start" />
                <AiFillStar className=" start" />
                <AiOutlineStar className=" start" />
              </p>
              <p className="avis text-md-center">sur 12 avis</p>
            </div>
          </div>
          <div className="col-md-4 pt-md-5">
            <div>
              <div className="d-flex align-items-center">
                <p className="etoile mb-0">5 étoiles</p>
                <p className="progres mx-3"></p>
                <p className="etoile mb-0">4</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="etoile mb-0">5 étoiles</p>
                <p className="progre mx-3"></p>
                <p className="etoile mb-0">4</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="etoile mb-0">5 étoiles</p>
                <p className="progre mx-3"></p>
                <p className="etoile mb-0">4</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="etoile mb-0">5 étoiles</p>
                <p className="progre mx-3"></p>
                <p className="etoile mb-0">4</p>
              </div>
            </div>
          </div>
        </div>

        <p className="px-5 my-4">
          <hr />
        </p>

        <div className="row px-md-5">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-primary">auteur</th>
                  <th scope="col" className="text-primary">notes</th>
                  <th scope="col" className="text-primary">motif</th>
                  <th scope="col" className="text-primary">commentaire</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <th scope="row">
                    <p className="anonyme">Anonyme A</p>
                    <p className="date">12 Décembre 2022</p>{" "}
                  </th>
                  <td>
                    <div>
                      <p className="text-md-center">
                      <span className="chiffre">4</span>
                        <span className="chiffre">/</span>
                        <span className="chiffre">5</span>
                      </p>
                      <p className="etoile text-md-center">
                        <AiFillStar className="start" />
                        <AiFillStar className=" start" />
                        <AiFillStar className=" start" />
                        <AiFillStar className=" start" />
                        <AiOutlineStar className=" start" />
                      </p>
                    </div>
                  </td>
                  <td>
                    <p className="paragraphe">
                      Suite à une commande <br /> du 12 Décembre 2022
                    </p>
                  </td>
                  <td>
                    <p>
                      {" "}
                      <span className="bien">Bien</span> <br /> <span className="produit">Le produit
                      est parfait</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                  <p className="anonyme">Anonyme A</p>
                    <p className="date">12 Décembre 2022</p>{" "}
                  </th>
                  <td>
                    <div>
                      <p className="text-md-center">
                        <span className="chiffre">4</span>
                        <span className="chiffre">/</span>
                        <span className="chiffre">5</span>
                      </p>
                      <p className="etoile text-md-center">
                        <AiFillStar className="start" />
                        <AiFillStar className=" start" />
                        <AiFillStar className=" start" />
                        <AiFillStar className=" start" />
                        <AiOutlineStar className=" start" />
                      </p>
                    </div>
                  </td>
                  <td>
                    <p className="paragraphe">
                      Suite à une commande <br /> du 12 Décembre 2022
                    </p>
                  </td>
                  <td>
                    <p>
                      {" "}
                      <span className="bien">Bien</span> <br /> <span className="produit">Le produit
                      est parfait</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
