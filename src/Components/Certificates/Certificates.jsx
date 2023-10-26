import React from 'react'
import './Certificates.css'
import  IMG1 from "../../Assets/Java(Basic).JPG";
import  IMG2  from "../../Assets/React(Basic).JPG";
import  IMG3  from "../../Assets/JavaScript(Basic).JPG";
import  IMG4  from "../../Assets/SQL(Basic).JPG";
import  IMG5  from "../../Assets/SQL(Intermediate).JPG";
import  IMG6  from "../../Assets/Python(Basic).JPG";
// import java from '../../Assets/java_basic certificate.pdf'
// import jsx from '../../Assets/react_basic certificate.pdf'
// import js from '../../Assets/javascript_basic certificate.pdf'
// import sql_b from '../../Assets/sql_basic certificate.pdf'
// import sql_i from '../../Assets/sql_intermediate certificate.pdf'
// import py from '../../Assets/python_basic certificate.pdf'

const cdata = [
  {
    id: 1,
    image: IMG1,
    title: "Java (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/9bd329b0261a",
    //download_pdf: java,
  },
  {
    id: 2,
    image: IMG2,
    title: "React (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/d63eeebf3ae1",
    //download_pdf: jsx,
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/59a9e5f4df9c",
    //download_pdf: js,
  },
  {
    id: 4,
    image: IMG4,
    title: "SQL (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/4b9669d503e5",
    //: sql_b,
  },
  {
    id: 5,
    image: IMG5,
    title: "SQL (Intermediate) Certificate",
    verify: "https://www.hackerrank.com/certificates/3acfe9ef558e",
    //download_pdf: sql_i,
  },
  {
    id: 6,
    image: IMG6,
    title: "Python (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/0f7141696272",
    //download_pdf: py,
  }
];
const Certificates = () => {
  return (
    <section id='Certificates'>
      <h5>My Recent Certificates</h5>
      <h2>Certificates</h2>
    <div className="container certificates__container">
        {cdata.map(({ id, image, title, verify }) => {
          return (
            <article className="certificates__item">
              <div className="certificates__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="certificates__item_cta">
                <a href={verify} className="btn" target="_blank">Verify</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Certificates