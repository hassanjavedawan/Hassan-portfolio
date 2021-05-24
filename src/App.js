/** @format */

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "antd/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppRouter from "./config/AppRouter";
import "../node_modules/animate.css";
import 'react-multi-carousel/lib/styles.css'
// ..

function App() {
  useEffect(() => {
    AOS.init({ duration: 8000 });
  });
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
