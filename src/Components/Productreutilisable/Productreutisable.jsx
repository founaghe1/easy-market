import React from 'react';
import './productreutisable.css'
import { prod } from '../../Data/Data';

const Productreutisable = () => {
  return (
    <div>
      <div>
        <div className="sect3">
          <div className="row sect3 pt-5 px-3">
            {prod.map((image) => (
              <div className="col-md-3 col-sm-6">
                <div className="card rounded-4 mb-3 w-100">
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
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productreutisable