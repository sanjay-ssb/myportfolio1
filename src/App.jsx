import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";



// We can use this array to iterate over Components.

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Nav /> */}
      {/* <About /> */}
      {/* <Experience /> */}
      <Portfolio /> 
      {/* <Certificates /> */}
      {/* <Contact /> */}
      
    </div>
  );
};

export default App;
