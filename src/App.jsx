import React, { useState, useEffect } from 'react'
import { LandingPage } from './AuraGems/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarSection } from './AuraGems/components/NavBarSection';
import { Shop } from './AuraGems/pages/Shop';
import { Footer } from './AuraGems/components/Footer';
import {About} from './AuraGems/pages/About';
import { Login } from './AuraGems/pages/Login';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      {/* Now both LandingPage and NavBarSection are inside Router */}
      {/* outside route elements will be appear in very page  */}
      
      <NavBarSection change={handleThemeChange} />
      <Routes>
        <Route path="/" element={<LandingPage change={handleThemeChange} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* Other routes */}
      </Routes>
      <Footer/> 
      {/* it will display the footer on all pages */}
    </Router>
  );
};

export default App;
