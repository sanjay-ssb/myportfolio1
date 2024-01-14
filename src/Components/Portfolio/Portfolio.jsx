import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/image1.jpg'
import IMG2 from '../../Assets/image2.jpg'
import IMG3 from '../../Assets/image3.jpg'
import IMG4 from '../../Assets/image4.jpg'
import IMG5 from '../../Assets/image5.jpg'
import IMG6 from '../../Assets/image5.jpg'


const data=[
  {
    id:1,
    image:IMG1,
    title:'My Portfolio',
    github:'https://www.exy.com',
    demo:''
  },
  {
    id:2,
    image:IMG1,
    title:'My Portfolio',
    github:'https://www.exy.com',
    demo:''
  },
  {
    id:3,
    image:IMG1,
    title:'My Portfolio',
    github:'https://www.exy.com',
    demo:''
  },
  {
    id:4,
    image:IMG1,
    title:'My Portfolio',
    github:'https://www.exy.com',
    demo:''
  },
  {
    id:5,
    image:IMG1,
    title:'My Portfolio',
    github:'https://www.exy.com',
    demo:''
  },
  {
    id:6,
    image:IMG1,
    title:'My Portfolio',
    github:'https://www.exy.com',
    demo:''
  }
]


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          {
            data.map(({id,image,title,github,demo})=>{
              return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__items-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                  </div>
              </article>
              )
            })
          }
        

        
      </div>
    </section>
  )
}

export default Portfolio