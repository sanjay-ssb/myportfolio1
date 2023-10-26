import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#" className='footer__a'>Home</a></li>
        <li><a href="#About" className='footer__a'>About</a></li>
        <li><a href="#Experience" className='footer__a'>Experience</a></li>
        <li><a href="#Portfolio" className='footer__a'>Portfolio</a></li>
        <li><a href="#Certificates" className='footer__a'>Certificates</a></li>
        <li><a href="#Contact" className='footer__a'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="linkedin.com"></a>
        <a href="github"></a>
      </div>
    </footer>
  )
}

export default Footer