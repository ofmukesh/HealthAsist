import React from "react";
import { useLocation } from "react-router-dom";

export const Erorr404 = () => {
  let location = useLocation();
  return (
    <div className="error">
      <div className="error-404">
        <h1>404</h1>
        <br />
        <label>
          Page not found <code>{location.pathname}</code>
        </label>
        <br />
      </div>
    </div>
  );
};

