import React from "react";
import ProgressBarFifty from "./ProgressBarFifty"
import ProgressBarSeventyFive from "./ProgressBarSeventyFive"
import ProgressBarNienty from "./ProgressBarNienty"
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
//Importing React Icons
//Front-end Tech
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
//Back-end
import { FaJava } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


const Experience = () => {
  return (
    <section id="Experience">
      <h1>My Skills</h1>
      <div className="container experience__container">
        <div className="experience__frontend">
      <h2 className="exp">Front-end Technologies</h2>
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className="experience__details-icon" size={30}/>
                <div><h3>React.js</h3>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon" size={30}/>
              <div>
                <h3>Javscript</h3>
              </div>
            </article>

            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" size={30}/>
              <div>
                <h3>HTML</h3>
              </div>
            </article>

            <article className="experience__details">
              <BiSolidFileCss className="experience__details-icon" size={30}/>
              <div>
                <h3>CSS</h3>
              </div>
            </article>

            <article className="experience__details">
              <BiLogoBootstrap className="experience__details-icon" size={30}/>
              <div>
                <h3>Bootstrap</h3>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" size={30}/>
              <div>
                <h3>Tailwind</h3>
              </div>
            </article>
          </div>
        </div>




        <div className="experience__backend">
        <h2 className="exp">Back-end Technologies</h2>
          <div className="experience__content">
            <article className="experience__details">
              <FaJava className="experience__details-icon" size={30}/>
              <div>
                <h3>Java</h3>
              </div>
            </article>

            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" size={30}/>
              <div>
                <h3>Node.js</h3>
              </div>
            </article>

            <article className="experience__details">
              <FaLeaf className="experience__details-icon" size={30}/>
              <div>
                <h3>SpringBoot</h3>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" size={30}/>
              <div>
                <h3>MySQL</h3>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" size={30}/>
              <div>
                <h3>MongoDB</h3>
              </div>

            </article>
            <article className="experience__details">
              <SiFastapi className="experience__details-icon" size={30}/>
              <div>
                <h3>FastAPI</h3>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
