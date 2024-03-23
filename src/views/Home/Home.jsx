import React from 'react';
import Header from "../../components/Header/Header";
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer'
import './index.scss'

const Home = () => {
    
  return (
    <section>
      <Header/>
      <List/>
      <Footer/>
    </section>
  )
}

export default Home