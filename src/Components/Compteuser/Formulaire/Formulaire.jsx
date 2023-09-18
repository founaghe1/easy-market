import React from 'react'
import './Formulaire.css';
import { Link } from "react-router-dom";
const Formulaire = () => {
    return (
        <div className='container'>
            <div className="row my-3">
                <div className='form-titre mt-4'>
                    <h6>Informations personnelles</h6>
                </div>
                <hr />
                <form action="" className="d-md-flex myForm w-75">
                    <div className="w-50 div1 px-2">
                        <div class="input-group d-block">
                            <label for="username">PRÉNOM</label>
                            <input type="text" name="username" id="username" placeholder="Fatou" className='py-3'/>
                        </div>
                        <div class="input-group d-block mt-4">
                            <label for="email">ADRESSE EMAIL</label>
                            <input type="email" name="username" id="email" placeholder="ndiayefatou@gmail.com" className='py-3'/>
                        </div>
                        <div class="input-group d-block mt-4">
                            <label for="adresse">ADRESSE</label>
                            <input type="text" name="adresse" id="adresse" placeholder="Sicap Liberté" className='py-3'/>
                        </div>
                    </div>
                    <div className="w-50 div2 px-2">
                        <div class="input-group d-block mt-sm-4 mt-md-1">
                            <label for="name">NOM</label>
                            <input type="text" name="name" id="name" placeholder="Ndiaye" className='py-3'/>
                        </div>
                        <div class="input-group d-block mt-4">
                            <label for="call">TÉLÉPHONE</label>
                            <input type="text" name="call" id="call" placeholder="77 000 00 00" className='py-3'/>
                        </div>
                    </div>
                </form>
                <div className='btn-total d-flex justify-content-start align-items-center mb-3'>
                    <Link to="/compte" className='button text-white border-0 text-decoration-none w-50 text-center'>ENREGISTRER</Link>
                </div>
            </div>
        </div>
    )
}

export default Formulaire
