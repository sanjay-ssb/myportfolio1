import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


// We can use this array to iterate over Components.
const arr = [
  {
    id: 1,
    component: Header,
  },
  {
    id: 2,
    component: Nav,
  },
  {
    id: 3,
    component: About,
  },
  {
    id: 4,
    component: Experience,
  },
  {
    id: 5,
    component: Portfolio,
  },
  {
    id: 6,
    component: Certificates,
  },
  {
    id: 7,
    component: Contact,
  },
  {
    id: 8,
    component: Footer,
  },
];

const App = () => {
  return (
    <div>
      <Footer />
      {/* <Header /> */}
      {/* <Nav /> */}
      <About />
      {/* <Experience /> */}
      {/* <Portfolio /> */} 
      {/* <Certificates /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default App;
