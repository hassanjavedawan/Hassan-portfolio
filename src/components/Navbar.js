/** @format */

import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Logo } from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Navbar
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Navbar = () => {
  useEffect(() => {
    scroll.scrollToTop();
  });
  return ( 
    <>
      <div className='navigation-wrap bg-light start-header start-style scroll-on'>
        <div className='container-fluid'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <Link
              activeClass='active'
              to='home'
              delay={100}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='navbar-brand'>
              <img src={Logo} alt='logo ' />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto py-4 py-md-0'>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4 '>
                  {/* <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                </div> */}
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='home'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='about'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  {/* <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                </div> */}
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='services'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    Services
                  </Link>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='Skills'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    Skills
                  </Link>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='portfolio'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    Portfolio{" "}
                  </Link>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='achievements'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    Achievements
                  </Link>
                </li>
                <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                  <Link
                    className='nav-link'
                    activeClass='active'
                    to='contact'
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {" "}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
