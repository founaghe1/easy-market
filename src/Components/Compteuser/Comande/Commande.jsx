import React from "react";
import "./Commande.css";

import SideBarCompte from "../SideBarCompte/SideBarCompte";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import TableCommande from "../../TableCommnade/TableCommande";

const Commande = () => {
  return (
    <div>

      <div className="container-fluid my-3 ps-md-5">
        <div className="row">
          {/* Composant sidebar compte */}
          <div className="col-lg-2">
            <SideBarCompte />
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
            <div className="title">
              <h1 className="h1">Mes commandes</h1>
            </div>
            <div className="my-3">
              {/* Composant Tableau Commande */}
              <TableCommande />
            </div>
          </div>
        </div>
        {/* Composant Sidebar footer */}
        <div className="row justify-content-center">
          <div className="col-12">
            <SidebarFooter />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Commande;
