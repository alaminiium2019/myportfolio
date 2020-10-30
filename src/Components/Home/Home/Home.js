import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';



const Home = () => {
  return (
    <div>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Blog></Blog>  
      <Contact></Contact>
       
     
    </div>
    
  );
};

export default Home;