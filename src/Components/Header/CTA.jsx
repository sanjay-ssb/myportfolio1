import React from 'react'
import CV from '../../Assets/Sanjay_Bhandari_Java_React_Developer.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA