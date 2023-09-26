import React from "react";
import './newsletter.css';
import { GoPaperAirplane } from "react-icons/go";

const Newletter = () => {
  return (
      <section className="newsletterC">
        <div className="container py-5 ">
          <div className="row">
            <div className="col-md-4 ps-5 ">
              <h2 className="ms-md-5 ps-md-3">NEWSLETTER</h2>
              <p className="ms-md-5 ps-md-3 newsletter-p">Stay Up to Date</p>
            </div>
            <div className="col-md-8">
              <div>
                <div className="search w-100 px-5">
                  <input placeholder="Your email..." type="text" className="py-3 rounded-pill" />
                  <button type="submit" className="rounded-circle">
                    {" "}
                    <GoPaperAirplane className="fs-3" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Newletter;
