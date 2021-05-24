/** @format */

import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
// import { Link } from "react-router-dom";
import {
  Border,
  Posale,
  Innovation,
  landingPage,
  Olx,
  Ferrari,
  HjkStore,
} from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 600, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div>
      <>
        <section id='Portfolio' className='Full-Page mt-5' name='portfolio'>
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
                    PORTFOLIO
                    <br />
                    <img src={Border} alt='Border' />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Project cards
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}

          <div className='container text-center '>
            {/* <Carousel responsive={responsive}>
              <div className='card portfolio-card'>
                <img src={Innovation} className='card-img-top' alt='...' />
                <h5 className='pt-3'>Innovation College</h5>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Olx} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Olx Clone</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={landingPage} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Landing Page</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={aamir} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Pharmachy Mobile App</h5>
                </div>
              </div> 
            </Carousel> */}

            <div className='row'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Innovation} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://innovation-college.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/hassanjavedawan/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Innovation College</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Olx} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://olx-clone-hassan.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/hassanjavedawan/olx-clone'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Olx Clone</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://download.posale.pk/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/hassanjavedawan/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={landingPage} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://hassanjavedawan.github.io/landing-page-/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/hassanjavedawan/landing-page-/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Landing Page</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Ferrari} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://hassanjavedawan.github.io/farrari-Showroom/pages/html/gallery.html'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/hassanjavedawan/farrari-Showroom'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Ferrari Showroom</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={HjkStore} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://hjkstore-87f0a.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>
                      <a
                        href='https://github.com/hassanjavedawan/HJKstore'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Hjk Store</h5>
                </div>
              </div>
            </div>
            <div className='row mt-3 mb-5 See-More-Btn'>
              <div className='col-sm-12'>
                <a
                  href='https://github.com/hassanjavedawan'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button>See more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
