import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import CV from '../../Assets/Sanjay_Bhandari_Java_React_Developer.pdf'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#" className='footer__a'><h4>Home</h4></a></li>
        <li><a href="#About" className='footer__a'><h4>About</h4></a></li>
        <li><a href="#Experience" className='footer__a'><h4>Experience</h4></a></li>
        <li><a href="#Portfolio" className='footer__a'><h4>Portfolio</h4></a></li>
        <li><a href="#Certificates" className='footer__a'><h4>Certificates</h4></a></li>
        <li><a href="#Contact" className='footer__a'><h4>Contact</h4></a></li>
      </ul>

      <div className="footer__socials">
      <a href={CV} download className='btn-nav'><h3>Download CV</h3></a>
        <a href="https://www.linkedin.com/in/sanjay-bhandari-ssb/"><FaLinkedin size={45} /></a>
        <a href="https://www.github.com/sanjay-ssb"><FaSquareGithub size={45} /></a>
        <a href="https://www.hackerrank.com/profile/sanjay_bhandari6"><FaHackerrank size={45}/></a>
        <a href="https://www.leetcode.com/sanjay-ssb/"><TbBrandLeetcode size={45}/></a>
      </div>
    </footer>
  )
}

export default Footer