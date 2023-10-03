import React from 'react'
import AvisComposant from './AvisComposant'
import Votes from './Votes'
import TableAvis from './TableAvis'

const Avis = () => {
    return (
        <div>
            <div className="row ps-4 pt-5">
                <div className="col-md-4">
                    <AvisComposant />
                </div>
                <div className="col-md-4 pt-md-5">
                    <Votes />
                </div>
            </div>
            <p className="px-5 my-4">
                <hr />
            </p>
            <TableAvis />
        </div>
    )
}

export default Avis
