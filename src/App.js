import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Pages/home";
import Entry from "./Pages/entry";
import { Erorr404, Offline500 } from "./Pages/Error/index";

const App = () => {
  function CheckData() {
    if (!navigator.onLine) {
      return <Offline500 />;
    }
    if (!localStorage.getItem("user_name") && !localStorage.getItem("user_id")) {
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
          <Route path="/entry" element={<Entry />} />
        </Route>
        <Route path="*" element={<Erorr404 />} />
      </Routes>
    </div>
  );
};

export default App;
