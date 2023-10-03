import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { header } from "../../Data/Data";
import NavbarReutilisable from "../NavbarReutilisable/NavbarReutilisable";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* Header début */}
        <div className="row text-center pt-2 nav1">
          {header.map((image) => (
            <div className="col-lg-4 col-md-4 col-sm-6 colHeader">
              <div>
                <p className="">
                  <span className="me-2">{image.iconHeader}</span>
                  <span className="span-nav">{image.texte}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar début */}
      <NavbarReutilisable />
      {/* Navbar fin */}
    </div>

  );
};

export default Navbar;
