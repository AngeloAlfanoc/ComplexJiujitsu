import React from 'react';
import './style.css';
import Topbar from './components/TopBar'
import HeaderInner from './components/HeaderBoxes'
import HeaderBoxes from './components/HeaderInner'
import AboutUs from './components/AboutUs'
import Schedule from './components/Schedule'
import Media from './components/Media'
import Locations from './components/Locations'
import Contact from './components/Contact'
import Sponsors from './components/Sponsors'
import FooterInner from './components/FooterInner'

function App() {
  return (
    <div>
      <header>  
        
  
        <div className="head-img"></div>
      
        <div>
          <Topbar/>
          <HeaderInner/>
          <HeaderBoxes/>
        </div>
      </header>

      <main>
        <AboutUs/>
        <Schedule/>
        <Media />
        <Locations/>
        <Contact/>
        <Sponsors/>
      </main>
      <footer  className="container-fluid">
        <FooterInner/>
        </footer>
    </div>
  );
}

export default App;
