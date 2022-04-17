import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
      return (
            <div className="home-section">
                <Banner></Banner>
                <Services></Services>
                <Footer></Footer>
            </div>
      );
};

export default Home;