/** @format */

import React from "react";
import { Border, Linux, Mobile, Basic } from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             Achievements
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const Achievments = () => {
  return (
    <>
      <section className='Full-Page mt-5' name='achievements' id='achievements'>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Heading
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='Page-title'>
                <h1>
                  Achievements
                  <br />
                  <img src={Border} alt='Border' />
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               service cards
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='page-container container'>
          <div className='row'>
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={Basic} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={Mobile} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={Linux} alt='Linux' width='100%' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Achievments;
