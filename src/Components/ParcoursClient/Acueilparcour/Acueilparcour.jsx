import React from 'react';
import './acueilparcour.css'
import Navbar from '../../Dashdoard/Navbar/Navbar';
import chemise from '../../../Assets/chemise.png';
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Productreutisable from '../../Productreutilisable/Productreutisable';
import Newletter from '../../Newsletter/Newletter';
import Footer from '../../Dashdoard/Footer/Footer';
import { Link } from 'react-router-dom';



const Acueilparcour = () => {
  return (
    <div>
        <div className='shadow pb-3'>
            <Navbar/>
        </div>
        <div className='container-fluid'>
            <div className='row p-3 ps-md-5'>
                <div className='col-md-6 '>
                    <div className='imgChemise rounded-3'>
                        <img src={chemise} alt="chemise" className='w-100 h-100 chemise' />
                    </div>
                    <div className='tripleImg d-flex p-1'>
                        <p className='p-2 ps-0'>
                            <img src={chemise} alt="" className='w-100 rounded-3'/>
                        </p>
                        <p className='p-2'>
                            <img src={chemise} alt="" className='w-100 rounded-2'/>
                        </p>
                        <p className='p-2 pe-0'>
                            <img src={chemise} alt="" className='w-100 rounded-3' />
                        </p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h1 className='h1'>Crown Summit Backpack</h1>
                    <p className='marhom fs-4'>Marque: Home </p>
                    <p>
                        <AiFillStar className='fs-2 start'/>
                        <AiFillStar className='fs-2 start' />
                        <AiFillStar className='fs-2 start' />
                        <AiFillStar className='fs-2 start' />
                        <AiOutlineStar className='fs-2 start' />
                    </p>
                    <p className='dispo'>Disponible: 74</p>
                    <p className='plorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus cupiditate accusantium facere possimus quidem nisi provident qui, nostrum suscipit explicabo odio natus atque. Hic ad aut dolores esse reiciendis.</p>
                    <p className='price fw-bold my-5'>200.000 FCFA</p>
                    <div className='d-flex'>
                        <p className='fw-bold qte pe-5'>Quantité</p>
                        <p className='fs-3'>
                            <span className=''>-</span>
                            <span className='px-4'>2</span>
                            <span className=''>+</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <p className='total pe-5 fw-bold'>Total</p>
                        <p className='priTotal ps-md-5 fw-bold'>200.000 FCFA</p>
                    </div>
                    <div className='butt d-md-flex'>
                        <p>
                            <button className='btnFav px-5 py-2 fs-3 me-2'>Favoris <AiOutlineHeart className='coeur'/></button>
                        </p>
                        <p>
                            <Link to="/monPanier" >
                                <button className='btnAjou px-4 text-light pt-3 pb-3 fw-bold'>Ajouter au panier <AiOutlineShoppingCart className='fs-4' /></button>
                            </Link>
                        </p>
                        
                    </div>
                </div>
            </div>
            
            <p className='px-5 my-4'>
                <hr />
            </p>

            <div className='row ps-4 pt-5'>
                <div className='col-md-4'>
                    <h3 className='mb-4 text-md-center'>Avis des clients</h3>
                    <p className='moyen text-md-center'>NOTE MOYENNE</p>
                    <div>
                        <p className='text-md-center'>
                            <span className='quatre fw-bold'>4</span>
                            <span className='div'>/</span>
                            <span className='cinq'>5</span>
                        </p>
                        <p className='etoile text-md-center'>
                            <AiFillStar className='start'/>
                            <AiFillStar className=' start' />
                            <AiFillStar className=' start' />
                            <AiFillStar className=' start' />
                            <AiOutlineStar className=' start' />
                        </p>
                        <p className='avis text-md-center'>sur 12 avis</p>
                    </div>
                </div>
                <div className='col-md-4 pt-md-5'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <p> 5 étoiles </p>
                            <p className='progres mx-3'></p>
                            <p>4</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p> 5 étoiles </p>
                            <p className='progre mx-3'></p>
                            <p>4</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p> 5 étoiles </p>
                            <p className='progre mx-3'></p>
                            <p>4</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p> 5 étoiles </p>
                            <p className='progre mx-3'></p>
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='px-5 my-4'>
                <hr />
            </p>

            <div className='row px-md-5'>
                <div className='table-container '>
                <table className="table">
                    <thead className='thead'>
                        <tr>
                        <th scope="col">AUTEUR</th>
                        <th scope="col">NOTES</th>
                        <th scope="col">MOTIF</th>
                        <th scope="col">COMMENTAIRE</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        <tr>
                            <th scope="row"> 
                                <p>Anonyme A</p>
                                <p className='date'>12 Décembre 2022</p>  </th>
                            <td>
                                <div>
                                    <p className='text-md-center'>
                                        <span className=' fw-bold'>4</span>
                                        <span className=''>/</span>
                                        <span className=''>5</span>
                                    </p>
                                    <p className='etoile text-md-center'>
                                        <AiFillStar className='start'/>
                                        <AiFillStar className=' start' />
                                        <AiFillStar className=' start' />
                                        <AiFillStar className=' start' />
                                        <AiOutlineStar className=' start' />
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p>Suite à une commande <br /> du 12 Décembre 2022</p>
                            </td>
                            <td>
                                <p> <span className='fw-bold'>Bien</span> <br />  Le produit est parfait</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"> 
                                <p >Anonyme A</p>
                                <p className='date'>12 Décembre 2022</p>  </th>
                            <td>
                                <div>
                                    <p className='text-md-center'>
                                        <span className=' fw-bold'>4</span>
                                        <span className=''>/</span>
                                        <span className=''>5</span>
                                    </p>
                                    <p className='etoile text-md-center'>
                                        <AiFillStar className='start'/>
                                        <AiFillStar className=' start' />
                                        <AiFillStar className=' start' />
                                        <AiFillStar className=' start' />
                                        <AiOutlineStar className=' start' />
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p>Suite à une commande <br /> du 12 Décembre 2022</p>
                            </td>
                            <td>
                                <p> <span className='fw-bold'>Bien</span> <br /> Le produit est parfait</p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <p className='px-5 my-5'>
                <hr />
            </p>

            <div className='row px-md-4'>
                <div className='col-md-12'>
                    <h3 className='ps-4'>Produits similaires</h3>
                    <Productreutisable />
                </div>
            </div>
            <div className=''>
                <Newletter />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Acueilparcour