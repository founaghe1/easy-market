// import Navbar from "./Components/Dashdoard/Navbar/Navbar"
import './App.css';
import Accueil from "./Components/Dashdoard/Accueil/Accueil";
// import Footer from "./Components/Dashdoard/Footer/Footer";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Produit from "./Components/Produit/Produit";
import HommesProduct from "./Components/HommesProduct/HommesProduct";
import Acueilparcour from "./Components/ParcoursClient/Acueilparcour/Acueilparcour";
// import Pageaccueil from "./Components/Dashdoard/Pageaccueil/Pageaccueil";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Monpanier from "./Components/ParcoursClient/Monpanier/Monpanier";
import Infoclient from "./Components/ParcoursClient/InfoClientValidation/InfoClient/Infoclient";
import Modelivraison from "./Components/ParcoursClient/ModeLivraison/Modelivraison";
import Modepaiement from "./Components/ParcoursClient/Modepaiement/Modepaiement";
import Layout from "./Components/Layout/Layout";
import Compte from './Components/Compteuser/Compte/Compte';
import Commande from './Components/Compteuser/Comande/Commande';
import MonPanier from './Components/Compteuser/MonPanier/MonPanier';
import Favoris from './Components/Compteuser/Favoris/Favoris'

function App() {
  return (
    <div className="">

      {/* <Pageaccueil /> */}
      {/* <Navbar />
      <Accueil />
      <Footer /> */}
      {/* <Sidebar /> */}
      {/* <Produit /> */}
      {/* <HommesProduct /> */}
      {/* <Acueilparcour /> */}



      <Router>
        <Routes>
          <Route path="/"  element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="/produit" element={<Produit />} />
            <Route path='/produit-homme' element={<HommesProduct />} />
            <Route exact path='/detail-produit'  element={<Acueilparcour />}></Route>
            <Route path="/mon-panier" element={<Monpanier />} />
            <Route path="/informations-personnelles" element={<Infoclient />} />
            <Route path="/mode-livraison" element={<Modelivraison />} />
            <Route path="/mode-paiement" element={<Modepaiement />} />
            <Route path='/compte' element={<Compte />} />
            <Route path='/commande' element={<Commande />} />
            <Route path='/panier' element={<MonPanier />} />
            <Route path='/favoris' element={<Favoris />} />
          </Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;

