import React from 'react';
import chemise from "../../Assets/chemise.png";
import parfum2 from "../../Assets/parfum2.png";
import coca from "../../Assets/coca.png";
import ceinture from "../../Assets/ceinture.png";
import shose1 from "../../Assets/shose1.png";
import montre from "../../Assets/montre.png";
import sac from "../../Assets/sac.png";
import shose2 from "../../Assets/shose2.png";
import { Link } from 'react-router-dom';
import { prod } from '../../Data/Data';

const Productreutisable = () => {
  return (
    <div>
      <div>
        <div className="sect3">
          <div className="row sect3 pt-5 px-3">
            {/* <h1 className="text-center mb-4">Produits populaires</h1> */}
            {prod.map((image) => (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card rounded-4 mb-3">
                  <div>
                    <div className='div-image position-relative'>
                      <img src={image.img} className="card-img-top" alt="image" />
                    </div>
                    <div className='div-icon rounded-circle bg-white position-absolute'>
                      <p className='icon text-center'>{image.icon}</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{image.title}</h5>
                    <p className="card-text">{image.texte}</p>
                  </div>
                </div>
              </div>

            ))}
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
        </div>
      </div>
    </div>
  )
}

export default Productreutisable