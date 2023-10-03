import React from 'react';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar pb-3'>
        <div className='ps-1'>
            <div className='categories'>
                <p className='pCateg'>Catégories </p>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3' />
                    <label for="checkbox">Gants</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Jeans</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Chemises</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Suédoise</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Suédoise</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Suédoise</label><br/>
                </div>
            </div>
            <div className='marques mt-5'>
                <p className='pMark fs-4'>Marques</p>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3' />
                    <label for="checkbox">Gants</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Jeans</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Chemises</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3' />
                    <label for="checkbox">Gants</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Jeans</label><br/>
                </div>
                <div className='pb-2'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='me-3'/>
                    <label for="checkbox">Chemises</label><br/>
                </div>
            </div>
            <div className='prix'>
                <p className='pPrix fs-4'>Prix</p>
                <p className='pPrix fs-5'>Prix (F CFA)</p>
                <div className="progress">
                    <div className="progress-bar" id="myProgressBar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="90"></div>
                </div>
                <div className='d-flex'>
                    <button className='prixbtn px-4 me-1'>2000</button>
                    -
                    <button className='prixbtn px-3 ms-1'>50 000</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar