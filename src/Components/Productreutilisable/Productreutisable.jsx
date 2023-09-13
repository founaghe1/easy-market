import React from 'react';
import sacamain from "../../Assets/sacamain.png";
import parfum2 from "../../Assets/parfum2.png";
import coca from "../../Assets/coca.png";
import ceinture from "../../Assets/ceinture.png";
import shose1 from "../../Assets/shose1.png";
import montre from "../../Assets/montre.png";
import sac from "../../Assets/sac.png";
import shose2 from "../../Assets/shose2.png";

const Productreutisable = () => {
  return (
    <div>
        <div>
        <div className="sect3">
        <div className="row sect3 pt-5 px-3">
          {/* <h1 className="text-center mb-4">Produits populaires</h1> */}
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card ">
                <img src={sacamain} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={parfum2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={coca} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={ceinture} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-3">
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card ">
                <img src={shose1} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={montre} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={sac} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-2">
              <div class="card">
                <img src={shose2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cotton shirt Regular Fit</h5>
                  <p class="card-text fs-4">1500 fca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-end pe-5">
          {/* <button className="voirplus fs-3 ">Voir plus</button> */}
        </p>
      </div>
        </div>
    </div>
  )
}

export default Productreutisable