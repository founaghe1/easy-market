import React from 'react';
import like from "../../../Assets/like.svg";

const Product = (props) => {
  return (
    <div>
      <div className="card">
        <span class="pricing">Nouveau</span>
        <img className="product--image" src={props.url} alt="product image" />
        <div className="position-relative">
          <div className="btn text-light rounded-circle like position-absolute top-5 end-0">
            <img className="svg" src={like} alt="" />
          </div>
        </div>
        <div className='ms-2 mt-3'>
          <h5 className="card-title">Cotton shirt regular fit</h5>
          <p className="card-text">150 000 fca</p>
        </div>
      </div>
    </div>
  )
}

export default Product