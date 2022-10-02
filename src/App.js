import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./Assets/nav.css";
import Home from "./Pages/home";
import Entry from "./Pages/entry";
import { Erorr404, Offline500 } from "./Pages/Error/index";
import BMI from "./Pages/bmi";
import Food from "./Pages/Food";
import Nav from "./Pages/nav";
import BMISPEEDO from "./Pages/bmi_speedo";
import Disease from "./Pages/disease";

const App = () => {
  function CheckData() {
    if (!navigator.onLine) {
      return <Offline500 />;
    }

    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  }
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route element={<CheckData />}>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/entry/:g/:a/:c" element={<Disease />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/bmi/:bmi" element={<BMISPEEDO />} />
        </Route>
        <Route path="*" element={<Erorr404 />} />
      </Routes>
    </div>
  );
};

export default App;
