import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const arr=[
  {
    id:1,
    component:Header
  },
  {
    id:2,
    component:Nav
  },
  {
    id:3,
    component:About
  },
  {
    id:4,
    component:Experience
  },
  {
    id:5,
    component:Portfolio
  },
  {
    id:6,
    component:Certificates
  },
  {
    id:7,
    component:Contact
  },
  {
    id:8,
    component:Footer
  }
];

const App = () => {
  return (
    <div>
      <Header />
       {/* <Nav /> */}
      <About />
      <Experience />
      {/*<Portfolio />
      <Certificates />
      <Contact />
      <Footer />  */}
    </div>
  )
}

export default App
