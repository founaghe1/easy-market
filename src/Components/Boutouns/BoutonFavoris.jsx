import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

const BoutonFavoris = () => {
  return (
    <div>
       <button className="btnFav px-5 py-2 fs-3 me-2">
                    Favoris <AiOutlineHeart className="coeur" />
                  </button>
    </div>
  )
}

export default BoutonFavoris
