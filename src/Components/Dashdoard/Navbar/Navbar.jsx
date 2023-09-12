import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrDeliver } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineBars, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from 'react-icons/io';
import logoNav from "../../../Assets/logoNav.png";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center pt-2 nav1">
          <div className="col-md-4">
            <div>
              <p className="">
                <GrDeliver className="me-2"/>
                <span className="fw-bold">Service disponible 24h/24</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <p>
                <GrDeliver className="me-2" /> <span className="fw-bold">Livraison en 24h</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <p>
                <BsFillTelephoneFill className="me-2" />
                <span className="fw-bold"> 33 00 000 000</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-2 pt-3">
            <img src={logoNav} alt="" />
          </div>
          <div className="col-md-6 pt-5 pb-2">
            <div className="searchbar ">
              <div className="searchbar-wrapper ">
                <div className="searchbar-left">
                  <div className="search-icon-wrapper">
                    <span className="search-icon searchbar-icon">
                      <IoIosSearch className="fs-3 ico"/>
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
                    <AiOutlineBars className="searshIco fs-1  me-2 ico"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-md-flex justify-content-start pt-3 pt-md-5">
            <div className="pe-md-3 pt-1">
                <div>
                    <AiOutlineUser className="fs-3 me-1 ico"/>
                    <span className="fw-bold">Mon compte</span>
                </div>
            </div>
            <div className="pe-md-3 pt-1">
                <AiOutlineHeart className="fs-3 me-1 ico"/>
                <span className="fw-bold">Favoris</span>
            </div>
            <div className="pt-1">
                <AiOutlineShoppingCart className="fs-3 me-1 ico"/>
                <span className="fw-bold">Panier</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
