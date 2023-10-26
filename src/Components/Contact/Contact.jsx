import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {PiLinkedinLogo} from 'react-icons/pi'
import {RiWhatsappFill} from 'react-icons/ri'


const Contact = () => {
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option_icon'/>
          <h4>Email</h4>
          {/* <h5>sanjay.bhandari1909@gmail.com</h5> */}
          <a href="mailto:sanjay.bhandari1909@gmail.com" target='_blank'>Send a Message</a>
        </article>

        <article className="contact__option">
          <PiLinkedinLogo className='contact__option_icon'/>
          <h4>Linked In</h4>
          {/* <h5>sanjay-bhandari-ssb</h5> */}
          <a href="https://www.linkedin.com/in/sanjay-bhandari-ssb/" target='_blank'>Visit My Profile</a>
        </article>

        <article className="contact__option">
          <RiWhatsappFill className='contact__option_icon'/>
          <h4>Whatsapp</h4>
          {/* <h5>+91 9557929934</h5> */}
          <a href="https://wa.me/+919557929934" target='_blank'>Send a Message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact