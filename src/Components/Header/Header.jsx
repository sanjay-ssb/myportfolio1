import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4> I'm</h4>
        <h2>Sanjay Bhandari</h2>
        <div className="h5 text-light">Fullstack Developer</div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="MyPic" />
        </div>
        
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header