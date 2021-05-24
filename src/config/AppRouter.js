/** @format */

import React from "react";
import { StaticRouter as Router, Route } from "react-router-dom";
import PharmacyApp from "../components/PharmacyApp";
import Content from "../pages/Content";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Content} />
        <Route exact path='/PharmacyApp' component={PharmacyApp} />
      </Router>
    </div>
  );
}
