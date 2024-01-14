import React from 'react'
/* import React, { useState } from 'react'; */

import './Navbar.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import CV from '../../Assets/Sanjay_Bhandari_Java_React_Developer.pdf'
import logo from './logo.png'
import Hamburger from './Hamburger';

const Navbar = () => {

/*   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }; */


  return (
    <navbar>
      <img src={logo} alt="Logo" className="logo" style={{ width: '22em', height: '4em' }} />
      {/* <div className={`nested-nav ${isMobileMenuOpen ? 'active' :''}`} onClick={handleMobileMenuToggle}> */}
      <div className="nested-nav"> 
      <ul className='permalinks'>
        <li><a href="#" className='navbar__a'><h4>Home</h4></a></li>
        <li><a href="#About" className='navbar__a'><h4>About</h4></a></li>
        <li><a href="#Experience" className='navbar__a'><h4>Experience</h4></a></li>
        <li><a href="#Portfolio" className='navbar__a'><h4>Portfolio</h4></a></li>
        <li><a href="#Certificates" className='navbar__a'><h4>Certificates</h4></a></li>
        <li><a href="#Contact" className='navbar__a'><h4>Contact</h4></a></li>
      </ul>
      {/* <div className="hamburger-menu ${isMobileMenuOpen ? 'active' : ''} onClick={handleMobileMenuToggle}">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> */}
      </div>
      
      {/* <div className="navbar__socials">
       <a href={CV} download className='btn-nav'><h3>Download CV</h3></a> 
         <a href="https://www.linkedin.com/in/sanjay-bhandari-ssb/"><FaLinkedin size={45} /></a>
        <a href="https://www.github.com/sanjay-ssb"><FaSquareGithub size={45} /></a>
        <a href="https://www.hackerrank.com/profile/sanjay_bhandari6"><FaHackerrank size={45}/></a>
        <a href="https://www.leetcode.com/sanjay-ssb/"><TbBrandLeetcode size={45}/></a> 
      </div> 
        */}
    </navbar>
  )
}

export default Navbar