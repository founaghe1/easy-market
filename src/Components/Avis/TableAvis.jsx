import React from 'react'
import Etoile from './Etoile';

const TableAvis = () => {
    return (
        <div>
            <div className="row px-md-5">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-primary">auteur</th>
                                <th scope="col" className="text-primary">notes</th>
                                <th scope="col" className="text-primary">motif</th>
                                <th scope="col" className="text-primary">commentaire</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            <tr>
                                <th scope="row">
                                    <p className="anonyme">Anonyme A</p>
                                    <p className="date">12 Décembre 2022</p>{" "}
                                </th>
                                <td>
                                    <div>
                                        <p className="text-md-center">
                                            <span className="chiffre">4</span>
                                            <span className="chiffre">/</span>
                                            <span className="chiffre">5</span>
                                        </p>
                                        <Etoile />
                                    </div>
                                </td>
                                <td>
                                    <p className="paragraphe">
                                        Suite à une commande <br /> du 12 Décembre 2022
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {" "}
                                        <span className="bien">Bien</span> <br /> <span className="produit">Le produit
                                            est parfait</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <p className="anonyme">Anonyme A</p>
                                    <p className="date">12 Décembre 2022</p>{" "}
                                </th>
                                <td>
                                    <div>
                                        <p className="text-md-center">
                                            <span className="chiffre">4</span>
                                            <span className="chiffre">/</span>
                                            <span className="chiffre">5</span>
                                        </p>
                                        <Etoile />
                                    </div>
                                </td>
                                <td>
                                    <p className="paragraphe">
                                        Suite à une commande <br /> du 12 Décembre 2022
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {" "}
                                        <span className="bien">Bien</span> <br /> <span className="produit">Le produit
                                            est parfait</span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableAvis
