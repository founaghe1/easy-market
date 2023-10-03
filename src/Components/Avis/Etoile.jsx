import React from 'react'
import {
    AiOutlineStar,
    AiFillStar,
  } from "react-icons/ai";
  
const Etoile = () => {
    return (
        <div>
            <p className="etoile text-md-center">
                <AiFillStar className="start" />
                <AiFillStar className=" start" />
                <AiFillStar className=" start" />
                <AiFillStar className=" start" />
                <AiOutlineStar className=" start" />
            </p>
        </div>
    )
}

export default Etoile
