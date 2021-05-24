/** @format */

import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Achievments from "../components/Achievments";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Main Page
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Content() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Skills />
      <Portfolio />
      <Achievments />
      <Contact />
      <Footer />
    </>
  );
}
