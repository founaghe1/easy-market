import React from 'react'

const Product = (props) => {
  return (
    <div>
        <div className="card">
        <img className="product--image" src={props.url} alt="product image" />
        <h2 className='h2card'>{props.name}</h2>
        <p className="pricecar">{props.price}</p>
    </div>
    </div>
  )
}

export default Product