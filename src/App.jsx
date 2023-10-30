import React from 'react';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import './App.css'
import About from './Component/About';
import Skill from './Component/Skill';
import Footer from './Component/Footer';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
