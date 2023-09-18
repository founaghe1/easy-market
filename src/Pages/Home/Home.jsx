import React from 'react'
import ProdPopulaire from '../../Components/ProdPopulaire/ProdPopulaire'
import Navbar from '../../Components/Navbar/Navbar'
import Newletter from '../../Components/Newsletter/Newletter'
import NewProduit from '../../Components/NewProduit/NewProduit'
import Footer from '../../Components/Dashdoard/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <NewProduit/>
      <ProdPopulaire/>
      <Newletter/>
      <Footer/>
    </div>
  )
}

export default Home
