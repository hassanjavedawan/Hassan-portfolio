/** @format */

import React from "react";
import { Border } from "./image";

import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact, 
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiFirebase,
  SiRedux,
  SiStrapi,
} from "react-icons/si";
import { Progress } from "./ProgressBar";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               skills
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Skills() {
  return (
    <div>
      <>
        <section id='Skills' className='Full-Page mt-5' name='Skills'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='Page-title'>
                  <h1>
                    SKILLS
                    <br />
                    <img src={Border} alt='Border' />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Skill Progress
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
          <div className='container text-center'>
            <div
              className='row mt-5'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='800'>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={95} stroke='green' />
                <br />
                <FaHtml5 /> HTML
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={90} stroke='green' />
                <br />
                <FaCss3 /> Css
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={90} stroke='green' />
                <br />
                <FaBootstrap /> Bootstrap
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={70} stroke='#8167a9' />
                <br />
                <FaJs /> JavaScript
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={80} stroke='green' />
                <br />
                <SiFirebase /> FireBase
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={88} stroke='green' />
                <br />
                <FaGithub /> GitHub
              </div>
            </div>
            <div
              className='row mt-5'
              data-aos='fade-down'
              data-aos-easing='linear'
              data-aos-duration='800'
            >
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={85} stroke='green' />{" "}
                <br />
                <FaReact /> React JS
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={80} stroke='green' />
                <br />
                <SiRedux /> Redux
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={70} stroke='#8167a9' />
                <br />
                <FaReact /> React Native
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={55} stroke='#8167a9' />
                <br />
                <SiStrapi /> API Integration
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={40} stroke='yellow' />
                <br />
                <FaNodeJs /> Node JS
              </div>
              <div className='col progrss-bar'>
                <Progress strokeWidth={8} percentage={61} stroke='#8167a9' />
                <br />
                <SiAdobeillustrator /> Adobe Illustrator
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
