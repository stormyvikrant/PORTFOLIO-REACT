import React from 'react';
import "./App.css"
import Contact from './Components/Contact/Contact';
import Features from './Components/Skill/Skills';
import Header from './Components/Head/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Project';
// import emailjs from '@emailjs/browser'

const  App=()=>{

  return (
    <><Header/>
    <Home/>
    <Features/>
    <Projects/>
    <Contact/>
 
    </>
    
  );
}

export default App;
