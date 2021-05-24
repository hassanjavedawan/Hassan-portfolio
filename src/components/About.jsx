/** @format */

import React, { useRef, useEffect } from "react";
import { Border, Mypic } from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               About
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

function About() {
  const M1 = useRef(null);
  useEffect(() => {
    M1.current.animate(
      [
        { transform: "translate(10px, 10px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(10px, 10px)" },
      ],
      {
        duration: 8000,
        iterations: Infinity,
        yoyo: Infinity,
        animationTimingFunction: "linear",
        playbackRate: -30,
      },
    );
  });
  return (
    <>
      <section className='Full-Page mt-5' name='about' id='about'>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               heading 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='Page-title'>
                <h1>
                  ABOUT ME
                  <br />
                  <img src={Border} alt='Border' />
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             About me 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='About-Containers container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <div
                className=''
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='2000'>
                <img src={Mypic} alt='mypic' ref={M1} />
              </div>
            </div>
            <div className='col-md-7'>
              {/* <h2> About me</h2>{" "} */}
              <p className='mt-3'>
                I am Hassan an energetic and dedicated professional web & mobile
                Application Developer. I am always looking for clients who
                challenge me creatively. I know how to survive in this industry
                and I want to help your business do the same. I enjoy building
                everything from small business sites and applications to rich
                interactive web and mobile apps. if you are a business seeking a
                web & mobile apps presence or an employer looking to hire, you
                can get in touch with me here.
              </p>
              <h2>Details</h2>
              <div className='row str p-2'>
                <div className='col-sm'>
                  <strong className='p-2'>Name</strong>
                  <br /> Hassan Javed
                </div>

                <div className='col-sm'>
                  <strong className='p-2'>Job title</strong>
                  <br /> Mern Stack Develope
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
