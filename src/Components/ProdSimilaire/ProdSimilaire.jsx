import React from 'react'
import { prods } from '../../Data/Data'

const ProdSimilaire = () => {
  return (
    <section>
      <div className="container">
        <div className="row pt-5 justify-content-center align-items-center ">
          {prods.map((image) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mx-sm-auto text-sm-center ">
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
    </section>
  )
}

export default ProdSimilaire
