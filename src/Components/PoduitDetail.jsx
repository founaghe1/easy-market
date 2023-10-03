import React from 'react'
import Etoile from './Avis/Etoile';

const PoduitDetail = () => {
  return (
    <div>
      <h1 className="h1-span">Crown Summit Backpack</h1>
            <p className="marhom fs-4">Marque: Home </p>
            <Etoile/>
            <p className="dispo">Disponible: 74</p>
            <p className="plorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              accusamus cupiditate accusantium facere possimus quidem nisi
              provident qui, nostrum suscipit explicabo odio natus atque. Hic ad
              aut dolores esse reiciendis.
            </p>
            <p className="price my-5">200.000 FCFA</p>
            <div className="d-flex">
              <p className="qte pe-5">Quantité</p>
              <p className="fs-3">
                <span className="">-</span>
                <span className="px-4">2</span>
                <span className="">+</span>
              </p>
            </div>
            <div className="d-flex">
              <p className="total pe-5 ">Total</p>
              <p className="priTotal ps-md-5 fw-bold">200.000 FCFA</p>
            </div>
    </div>
  )
}

export default PoduitDetail
