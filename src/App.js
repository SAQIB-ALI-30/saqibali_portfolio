import React from 'react';
import NavBar from "./components/navbar";
import Profile from './components/profile';
import Sociallinks from './components/sociallinks';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
   <div>
    <NavBar/>
    <Profile/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Sociallinks/>
   </div>
  );  
};

export default App;
