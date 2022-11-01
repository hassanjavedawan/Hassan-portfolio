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
                Full stack web developer with a demonstrated history of working
                in the computer software industry skilled in JavaScript
                libraries including React JS, Next JS, Node JS, Express JS,
                GitHub, Web3.0, Blockchain, etc. Also an accomplished Team
                leader. I enjoy building everything from small business sites
                and applications to rich interactive web3.0 and decentralized
                applications.
              </p>
              <h2>Details</h2>
              <div className='row str p-2'>
                <div className='col-sm'>
                  <strong className='p-2'>Name</strong>
                  <br /> Hassan Javed
                </div>

                <div className='col-sm'>
                  <strong className='p-2'>Job title</strong>
                  <br /> Mern Stack Developer
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
