import React from "react";
import "./Certificates.css";
//Importing Images from here..
import JavaBasicCertificatemin from "../../Assets/imgs/Java (Basic) Certificate-min.png";
import JavaScriptBasicCertificatemin from "../../Assets/imgs/JavaScript (Basic) Certificate-min.png";
import ReactBasicCertificatemin from "../../Assets/imgs/React (Basic) Certificate-min.png";
import SQLBasicCertificatemin from "../../Assets/imgs/SQL (Basic) Certificate-min.png";
import SQLIntermediateCertificatemin from "../../Assets/imgs/SQL (Intermediate) Certificate-min.png";
import PythonBasicCertificatemin from "../../Assets/imgs/Python (Basic) Certificate-min.png";

import IntroductiontoFrontEndDevelopment from "../../Assets/imgs/Introduction to Front-End Development.jpeg";
import ReactBasics from "../../Assets/imgs/React Basics.jpeg";
import AdvancedReact from "../../Assets/imgs/Advanced React.jpeg";
import HTMLandCSSindepth from "../../Assets/imgs/HTML and CSS in depth.jpeg";
import Introductiontohtml5 from "../../Assets/imgs/Introduction to html5.jpeg";
import ProgrammingFoundationswithJavaScriptHTMLandCSS from "../../Assets/imgs/Programming Foundations with JavaScript, HTML and CSS.jpeg";
import ProgrammingwithJavaScript from "../../Assets/imgs/Programming with JavaScript.jpeg";
import VersionControl from "../../Assets/imgs/Version Control.jpeg";

import UnderstandingJsfrombasictocoremin from "../../Assets/imgs/Understanding Js from basic to core-min.PNG";
import PhotoshopCCforBeginners from "../../Assets/imgs/Photoshop CC for Beginners.jpg";

//Importing pdfs from here...
 import JavaBasicCertificateminpdf from "../../Assets/pdfs/java_basic certificate.compressed.pdf";
 import ReactBasicCertificateminpdf from "../../Assets/pdfs/react_basic certificate.compressed.pdf";
 import JavaScriptBasicCertificateminpdf from "../../Assets/pdfs/javascript_basic certificate.compressed.pdf";
 import SQLBasicCertificateminpdf from "../../Assets/pdfs/sql_basic certificate.compressed.pdf";
 import SQLIntermediateCertificateminpdf from "../../Assets/pdfs/sql_intermediate certificate.compressed.pdf";
 import PythonBasicCertificateminpdf from "../../Assets/pdfs/python_basic certificate.compressed.pdf";

 import IntroductiontoFrontEndDevelopmentpdf from "../../Assets/pdfs/Introduction to Front-End Development.pdf";
 import ReactBasicspdf from "../../Assets/pdfs/React Basics.pdf";
import AdvancedReactpdf from "../../Assets/pdfs/Advanced React.pdf";
import Introductiontohtml5pdf from "../../Assets/pdfs/Introduction to html5.pdf";
import HTMLandCSSindepthpdf from "../../Assets/pdfs/HTML and CSS in depth.pdf";
import ProgrammingFoundationswithJavaScriptHTMLandCSSpdf from "../../Assets/pdfs/Programming Foundations with JavaScript, HTML and CSS.pdf";
import ProgrammingwithJavaScriptpdf from "../../Assets/pdfs/Programming with JavaScript.pdf";
import VersionControlpdf from "../../Assets/pdfs/Version Control.pdf";

import PhotoshopCCforBeginnerspdf from "../../Assets/pdfs/Photoshop CC for Beginners.pdf";
import UnderstandingJsfrombasictocoreminpdf from "../../Assets/pdfs/Understanding Js from basic to core.pdf";


//Working on..
 const cdata = [
  {
    id: 1,
    image: JavaBasicCertificatemin,
    title: "Java (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/9bd329b0261a",
    download_pdf: JavaBasicCertificateminpdf,
  },
  /* {
    id: 2,
    image: JavaScriptBasicCertificatemin,
    title: "React (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/d63eeebf3ae1",
    download_pdf: JavaScriptBasicCertificateminpdf,
  }, */
  /* {
    id: 3,
    image: ReactBasicCertificatemin,
    title: "JavaScript (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/59a9e5f4df9c",
    download_pdf: ReactBasicCertificateminpdf,
  }, */
  /* {
    id: 4,
    image: SQLBasicCertificatemin,
    title: "SQL (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/4b9669d503e5",
    download_pdf: SQLBasicCertificateminpdf,
  }, */
  {
    id: 5,
    image: SQLIntermediateCertificatemin,
    title: "SQL (Intermediate) Certificate",
    verify: "https://www.hackerrank.com/certificates/3acfe9ef558e",
    download_pdf: SQLIntermediateCertificateminpdf,
  },
  {
    id: 6,
    image: PythonBasicCertificatemin,
    title: "Python (Basic) Certificate",
    verify: "https://www.hackerrank.com/certificates/0f7141696272",
    download_pdf: PythonBasicCertificateminpdf,
  },
  /* {
    id:7,
    image: IntroductiontoFrontEndDevelopment,
    title: "Introduction to Front-End Development",
    verify: "https://coursera.org/share/65b4e70118bc61ab1e97472f5d1b8871",
    download_pdf:IntroductiontoFrontEndDevelopmentpdf,
  }, */
  {
    id:8,
    image: ReactBasics,
    title: "React Basics",
    verify: "https://coursera.org/share/e5cc55695866e624eda2f17aee916e9d",
    download_pdf:ReactBasicspdf,
  },
  {
    id:9,
    image: AdvancedReact,
    title: "Advanced React",
    verify: "https://coursera.org/share/5ffa39ba3e57be46b0c8136c8be23bcf",
    download_pdf:AdvancedReactpdf,
  },
  {
    id:10,
    image: HTMLandCSSindepth,
    title: "HTML and CSS in depth",
    verify: "https://coursera.org/share/ecbdbad84a7b39c83072a0eaa7ab0a3a",
    download_pdf:HTMLandCSSindepthpdf,
  },
  {
    id:11,
    image: Introductiontohtml5,
    title: "Introduction to HTML5",
    verify: "https://coursera.org/share/5b01476fa82286e60936ab6c6e88a69d",
    download_pdf:Introductiontohtml5pdf,
  },
  /* {
    id:12,
    image: ProgrammingFoundationswithJavaScriptHTMLandCSS,
    title: "Programming Foundations with JavaScript, HTML and CSS",
    verify: "https://coursera.org/share/f6713fb1f65d74fe8c039ce5dfe4d80e",
    download_pdf:ProgrammingFoundationswithJavaScriptHTMLandCSSpdf,
  }, */
  {
    id:13,
    image: ProgrammingwithJavaScript,
    title: "Programming with JavaScript",
    verify: "https://coursera.org/share/2b787943a1b76222084bfa9f856af169",
    download_pdf:ProgrammingwithJavaScriptpdf,
  },
  {
    id:14,
    image: VersionControl,
    title: "Version Control",
    verify: "https://coursera.org/share/4349a7f7e475bc0c1656f5fca1e019f3",
    download_pdf:VersionControlpdf,
  },
  {
    id:15,
    image: UnderstandingJsfrombasictocoremin,
    title: "Understanding Javascript",
    verify: "ude.my/UC-d639c7b8-cafc-492b-a2e3-36775597f8cb",
    download_pdf:UnderstandingJsfrombasictocoreminpdf,
  },
  {
    id:16,
    image: PhotoshopCCforBeginners,
    title: "Photoshop CC for Beginners",
    verify: "ude.my/UC-39641deb-ad92-4cbf-b1ba-2b99d6926a35",
    download_pdf:PhotoshopCCforBeginnerspdf,
  }
];
 

const Certificates = () => {
  return (
    <section id="Certificates">
      <h5 style={{ color: "--color-white" }}>My Recent Certificates</h5>
      <h2>Certificates</h2>
      <div className="container certificates__container">
        {cdata.map(({ id, image, title, verify, download_pdf }) => {
          return (
            <article className="certificates__item">
              <div className="certificates__item-image">
                <img src={image} alt={title} />
              </div>
              <h5>{title}</h5>
              <div className="certificates__item_cta">
                <a href={verify} className="btn" target="_blank">
                  Verify
                </a>
                <a href={download_pdf} download className="btn">
                  Download
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
