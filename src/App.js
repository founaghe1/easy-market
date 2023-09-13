import Navbar from "./Components/Dashdoard/Navbar/Navbar"
import './App.css';
import Accueil from "./Components/Dashdoard/Accueil/Accueil";
import Footer from "./Components/Dashdoard/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Produit from "./Components/Produit/Produit";
import HommesProduct from "./Components/HommesProduct/HommesProduct";
import Acueilparcour from "./Components/ParcoursClient/Acueilparcour/Acueilparcour";
import Pageaccueil from "./Components/Dashdoard/Pageaccueil/Pageaccueil";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Route path="/" index element={<Pageaccueil />}></Route>
        <Route path="/produit" element={<Produit />} />
        <Route path='/hommeProduit' element={<HommesProduct />} />
        <Route exact path='/detailProduit'  element={<Acueilparcour />}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
