import React, { useContext } from 'react';
import Header from "./pages/header/Header";
import HeroSection from "./pages/heroSection/Hero";
import Footer from './pages/footer/Footer';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import './App.css';
import Oval from './assets/Oval.png';
import polygon from './assets/Polygon.png';
import triangle from './assets/Triangle.png';
import rectangle from './assets/Rectangle.png';
import ovalHeaderRight from './assets/Oval2.png';
import lastPolygon from './assets/lastPolygon.png';
const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme === 'dark' ? 'container-dark' : ''}`}>
        {theme === 'dark' ?
        <div style={{position:'absolute', maxWidth:'1440px', height:'511px', backdropFilter: 'blur(114px)', zIndex:'1'}}>
            <div className='oval-image'>
                <img src={Oval} alt="Oval" />
            </div>
            <div className='polygon-image'>
                <img src={polygon} alt="polygon" />
            </div>
            <div className='triangle-image'>
                <img src={triangle} alt="triangle" />
            </div>
            <div className='rectangle-image'>
                <img src={rectangle} alt="rectangle" />
            </div>
            <div className='ovalRight-image'>
                <img src={ovalHeaderRight} alt="ovalRight" />
            </div>
            <div className='lastPolygon-image'>
                <img src={lastPolygon} alt="lastPolygon" />
            </div>
        </div>
            :
            <></>
        }

      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
