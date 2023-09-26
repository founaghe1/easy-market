import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrDeliver } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineBars, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from 'react-icons/io';
import logoNav from "../../Assets/logoNav.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center pt-2 nav1">
          <div className="col-lg-4 col-md-4 col-sm-6 colHeader">
            <div>
              <p className="">
                <GrDeliver className="me-2" />
                <span className="span-nav">Service disponible 24h/24</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 colHeader">
            <div>
              <p>
                <GrDeliver className="me-2" /> <span className="span-nav">Livraison en 24h</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 colHeader">
            <div>
              <p>
                <BsFillTelephoneFill className="me-2" />
                <span className="span-nav"> 33 00 000 000</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="d-md-flex justify-content-md-center">


            <div className="col-lg-8 col-md-6 d-sm-flex logCherche justify-content-sm-center justify-content-md-around  px-sm-5">
              <div className="col-lg-3 col-md-6 col-sm-6 pt-3 log">
                <Link to="/">
                  <img src={logoNav} alt="" />
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pt-5 pb-2 pe-sm-5  w-75 recherche">
                <div className="searchbar ">
                  <div className="searchbar-wrapper ">
                    <div className="searchbar-left">
                      <div className="search-icon-wrapper">
                        <span className="search-icon searchbar-icon">
                          <IoIosSearch className="fs-5 ico" />
                        </span>
                      </div>
                    </div>

                    <div className="searchbar-center">
                      <div className="searchbar-input-spacer"></div>

                      <input
                        type="text"
                        className="searchbar-input"
                        maxlength="2048"
                        name="q"
                        autocapitalize="off"
                        autocomplete="off"
                        title="Search"
                        role="combobox"
                        placeholder="Recercher un produit"
                      />
                    </div>

                    <div className="searchbar-right">
                      <AiOutlineBars className="searshIco mt-2 fs-5 me-2 ico" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 d-sm-flex justify-content-sm-around pt-3 pt-md-5 comptFavPani" id=" ">
              <div className="pe-md-3 pt-1 div">
                <div>
                  <Link to="/compte" className='text-decoration-none linkNav mb-0'>
                    <AiOutlineUser className="fs-3 me-1 ico" />
                    <span className="icon-text">Mon compte</span>
                  </Link>
                </div>
              </div>
              <div>
                <Link to="/favoris" className="text-decoration-none linkNav">
                  <div className="pe-md-3 pt-1">
                    <AiOutlineHeart className="fs-3 me-1 ico" />
                    <span className="icon-text">Favoris</span>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/mon-panier" className="linkNav text-decoration-none">
                  <div className="pt-1">
                    <AiOutlineShoppingCart className="fs-3 me-1 ico" />
                    <span className="icon-text">Panier</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
