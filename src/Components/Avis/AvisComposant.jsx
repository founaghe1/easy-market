import React from 'react'
import Etoile from './Etoile';

const AvisComposant = () => {
  return (
    <div>
      <h1 className="h3 text-md-center">Avis des clients</h1>
      <p className="moyen text-md-center">NOTE MOYENNE</p>
      <div>
        <p className="text-md-center">
          <span className="quatre fw-bold">4</span>
          <span className="cinq">/</span>
          <span className="cinq">5</span>
        </p>
        <Etoile />
        <p className="avis text-md-center">sur 12 avis</p>
      </div>

    </div>
  )
}

export default AvisComposant
