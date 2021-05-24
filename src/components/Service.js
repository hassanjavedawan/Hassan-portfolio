/** @format */

import { FaDatabase, FaCode, FaCogs } from "react-icons/fa";
import React from "react";
import { Border } from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Services
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Service = () => {
  return (
    <>
      <section id='Service' className='Full-Page mt-5' name='services'>
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
                  SERVICSE
                  <br />
                  <img src={Border} alt="Border" />
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
                className='card-service aos-init'
                data-aos='zoom-in-right'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <div className='card-body'>
                  <div className='bg-icon'>
                    <FaCode style={{ fontSize: 30, color: "whitesmoke" }} />
                  </div>
                  <h5>Front-end</h5>
                  <p className='card-text'></p>
                </div>
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card-service aos-init'
                data-aos='zoom-in-down'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <div className='card-body'>
                  <div className='bg-icon'>
                    <FaDatabase style={{ fontSize: 30, color:"whitesmoke" }} />
                  </div>
                  <h5 className='card-text'>Database</h5>
                </div>
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card-service aos-init'
                data-aos='zoom-in-right'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <div className='card-body'>
                  <div className='bg-icon'>
                    <FaCogs style={{ fontSize: 30, color: "whitesmoke" }} />
                  </div>
                  <h5 className='card-text'>Back-end</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
