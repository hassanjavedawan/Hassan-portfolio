/** @format */

import {
  FaEnvelope,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import React from "react";
import { Border } from "./image";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             Contact
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const Contact = () => {
  return (
    <>
      <section id='Contact' className='contact-Page mt-5' name='contact'>
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
                  CONTACT ME
                  <br />
                  <img src={Border} alt='Border' />
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Contact us card
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='page-container container '>
          <div className='row'>
            <div className='col-md-4 '>
              <div
                className='card Contact-service aos-init'
                data-aos='flip-down'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <div className='icon-bg'>
                  <FaEnvelope style={{ fontSize: 30, color: "whitesmoke" }} />
                </div>
                <h5>Email</h5>
                <p>
                  <a href='mailto:hassanjaved836@gmail.com'>
                    hassanjaved836@gmail.com
                  </a>
                </p>
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Contact-service aos-init'
                data-aos='flip-down'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <div className='icon-bg'>
                  <FaGlobeAmericas
                    style={{ fontSize: 30, color: "whitesmoke" }}
                  />
                </div>
                <h5>Social Media</h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}>
                  <p className='social-icon'>
                    <a
                      href='https://www.facebook.com/hassanj72'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaFacebookF
                        style={{ fontSize: 20, color: "whitesmoke" }}
                      />
                    </a>
                  </p>
                  <p className='social-icon'>
                    <a
                      href='https://www.fiverr.com/hassan_0007?up_rollout=true/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <SiFiverr style={{ fontSize: 20, color: "whitesmoke" }} />
                    </a>
                  </p>
                  <p className='social-icon'>
                    <a
                      href='https://github.com/hassanjavedawan/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaGithub style={{ fontSize: 20, color: "whitesmoke" }} />
                    </a>
                  </p>
                  <p className='social-icon'>
                    <a
                      href='https://www.linkedin.com/in/hassan-javed-4276271aa/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaLinkedinIn
                        style={{ fontSize: 20, color: "whitesmoke" }}
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Contact-service aos-init'
                data-aos='flip-down'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <div className='icon-bg'>
                  <FaPhoneAlt style={{ fontSize: 30, color: "whitesmoke" }} />
                </div>
                <h5>Phone No</h5>
                <p>
                  <a href='tel:+923109310235'>0310-9310235</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
