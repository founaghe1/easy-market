import React from 'react';
import quote from "../../../Assets/quote-up.png";
import { AiFillStar } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";

import "../Accueil/accueil.css";

const Testimonials = (props) => {
  return (
    <div className="temoin col-md-4 mt-3">
            <div className="testi px-3 py-2 rounded">
              <img src={quote} alt="" />
              <p className="fs-5 description">
                {props.description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <img src={props.img} alt="" />
                  <span className="ms-2 fw-bold fs-5">{props.userName}</span>
                </p>
                <p className="d-flex justify-content-between align-items-center">
                  <AiFillStar className="stoile fs-2"/> <span className="fw-bold fs-5">{props.note}</span>
                </p>
              </div>
            </div>
          </div>
  )
}

export default Testimonials