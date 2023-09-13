import React from "react";
import './newsletter.css';
import { GoPaperAirplane } from "react-icons/go";

const Newletter = () => {
  return (
    <div>
      <div className="newsletterC">
        <div className="container-fluid  py-5 ">
          <div className="row">
            <div className="col-md-4 ps-5 ">
              <h2 className="ms-md-5 ps-md-5">NEWSLETTER</h2>
              <p className="ms-md-5 ps-md-5">Stay Up to Date</p>
            </div>
            <div className="col-md-8">
              <div>
                <div className="search w-100 px-5">
                  <input placeholder="Search..." type="text" className="py-3" />
                  <button type="submit" className="rounded-circle">
                    {" "}
                    <GoPaperAirplane className="fs-3" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
