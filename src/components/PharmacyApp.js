/** @format */

import React from "react";
import { Border } from "./image";
import Navbar from "./Navbar";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                            Pharmacy App
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const PharmacyApp = () => {
  return (
    <>
      <Navbar />
      <section className='Full-Page mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='Page-title'>
                <h1>
                  Pharmachy Android Application
                  <br />
                  <img src={Border} alt='Border' />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PharmacyApp;
