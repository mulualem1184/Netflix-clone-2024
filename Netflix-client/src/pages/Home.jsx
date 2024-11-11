import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Banner from '../components/banner/banner';
import Rowlist from '../components/Rows/Rowlist/Rowlist';

function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <Rowlist />
     
      <Footer />
    </div>
  );
}

export default Home;