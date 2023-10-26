import React from 'react'
import './About.css'
import ME from '../../Assets/me1.jpg'
import {FaAward} from 'react-icons/fa'

const about = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Certificates</h5>
              <small>3+ Certificates</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Experience</small>
            </article>
          </div>
          <p style={{color:"white"}}>
          Hi! I'm Sanjay Bhandari, a passionate Front-End Developer
           with expertise in React and Spring Boot. With a keen eye for detail
            and a commitment to creating seamless user experiences, I thrive on 
            bringing design concepts to life through clean, efficient code.
             <br></br>Let's collaborate to create exceptional digital experiences that
                  leave a lasting impression.
          </p>
          <a href="#Contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default about