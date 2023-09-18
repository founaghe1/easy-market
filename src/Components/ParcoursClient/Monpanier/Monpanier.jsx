import React from 'react';
import './monpanier.css';
import Navbar from '../../Navbar/Navbar';
import matos from '../../../Assets/matos.png';
import { Link } from 'react-router-dom';
import Footer from '../../Dashdoard/Footer/Footer';
import Newletter from '../../Newsletter/Newletter';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai"

const Monpanier = () => {
  return (
    <div className='panier'>
        <div className='shadow pb-3'>
            <Navbar />
        </div>
        <div className='mt-4'>
            
            <div className='row px-md-5 monrow'>
              <div className='col-md-9 '>
              <h4 className="ps-md-2 ps-sm-2">Mon panier</h4>
                <div className='table-container cont '>
                <table className="table">
                    <thead className='thead'>
                        <tr>
                        <th scope="col">Désignation</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Prix total</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        <tr>
                            <td scope="row"> 
                            <div className='d-flex align-items-center'>
                              <img src={matos} alt=""  height="auto" style={{marginRight: "2rem"}}/>
                                
                                <p className='design'>Crown Summit Backpack <br /> <span className='spDesign'>Marque: Home </span> </p> 
                            </div>
                          </td>
                            <td>
                                <div>
                                <p className='fw-bold'>$500</p>
                                   
                                </div>
                            </td>
                            <td>
                                <p>
                                  <button className='btnq'>-</button>
                                  <button className='btnq'>1</button>
                                   <button className='btnq'>+</button>
                                </p>
                            </td>
                            <td>
                            <div className='d-flex'>
                                <p className='fw-bold pe-2'>$500</p>
                                <p> <AiOutlineHeart className='heart fs-5'/> <BsFillTrash3Fill className=' trash'/> </p>
                              </div>
                           </td>
                        </tr>
                        <tr>
                            <td scope="row"> 
                            <div className='d-flex align-items-center'>
                              <img src={matos} alt=""  height="auto" style={{marginRight: "2rem"}}/>
                                
                                <p className='design'>Crown Summit Backpack <br /> <span className='spDesign'>Marque: Home </span> </p> 
                            </div>
                          </td>
                            <td>
                                <div>
                                <p className='fw-bold'>$500</p>
                                   
                                </div>
                            </td>
                            <td>
                                <p>
                                  <button className='btnq'>-</button>
                                  <button className='btnq'>1</button>
                                  <button className='btnq'>+</button>
                                </p>
                            </td>
                            <td >
                              <div className='d-flex'>
                                <p className='fw-bold pe-2'>$500</p>
                                <p> <AiOutlineHeart className='heart fs-5'/> <BsFillTrash3Fill className=' trash'/> </p>
                              </div>
                            
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div className='col-md-3 ps-5 pe-5 mt-sm-3 pb-5 totpan'>
                  <div className='totalPan p-3 rounded'>
                      <h6>TOTAL DU PANIER</h6>
                      <p className='d-flex justify-content-between '> <span> Sous-total</span> <span className='fw-bold pe-3'>1000</span> </p>

                      <p className='px-2'><hr /></p>
                      <p className='d-flex justify-content-between'><span>TOTAL</span> <span className='fw-bold pe-3'>1000</span></p>
                      <p className='text-center'>
                        <Link to="/infopersonnelle"><button className='btnblock px-2 py-1 '>VALIDER MON PANIER</button></Link>
                      </p>
                  </div>
                </div>
            </div>
        </div>
        <div className='newL'>
          <Newletter />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Monpanier;