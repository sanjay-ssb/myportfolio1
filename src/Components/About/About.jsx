import React from 'react'
import './About.css'
import ME from '../../Assets/me1.jpg'
import { GoProjectRoadmap } from "react-icons/go";
import { MdWork } from "react-icons/md";
import {FaAward} from 'react-icons/fa'
import CV from '../../Assets/Sanjay_Bhandari_Java_React_Developer.pdf'

const about = () => {
  return ( 
    <section id='About'>
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
              <GoProjectRoadmap className='about__icon' size={40}/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon' size={40}/>
              <h5>Certificates</h5>
              <small>10+ Certificates</small>
            </article>

            <article className="about__card">
              <MdWork  className='about__icon' size={40}/>
              <h5>Experience</h5>
              <small>1 Experience</small>
            </article>
          </div>
          <p style={{color:"white"}}>
          Hi! I'm Sanjay Bhandari, Front-End Developer
           with expertise in React and Spring Boot. <br></br>
           Passionate about creating seamless user experiences.
               I bring ideas to life through web development, combining 
               innovation with solid problem-solving skills.
             <br></br>Let's collaborate to create exceptional digital experiences that
                  leave a lasting impression.

          </p>
          <a href={CV} download className='btn'><h3>Download CV</h3></a>
          <a href="#Contact" className='btn'><h3>Let's talk</h3></a>
        </div>
      </div>

    </section>
  )
}

export default about