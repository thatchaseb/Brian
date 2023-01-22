import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './components/Pages/Landing';
import About from './components/Pages/About';
import Media from './components/Pages/Media';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <div class="text-kack-900">
      <Header />
      <Landing />
      <About />
      <Media />
      <Contact /> 
      <Footer />

      
    </div>
    

  );
}

export default App;
