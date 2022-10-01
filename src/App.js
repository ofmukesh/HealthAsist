import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Pages/Home/home";
import Entry from "./Pages/Home/entry";
import { Erorr404, Offline500 } from "./Pages/Error/index";

const App = () => {
  function CheckData() {
    if (!navigator.onLine) {
      return <Offline500 />;
    }
    if (!localStorage.getItem("username") && !localStorage.getItem("userid")) {
      return <Navigate to="/entry" />;
    } else {
      return <Outlet />;
    }
  }
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/entry" element={<Entry />} />
        <Route element={<CheckData />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Erorr404 />} />
      </Routes>
    </div>
  );
};

export default App;
