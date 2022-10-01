import React from "react";
import { useSelector } from "react-redux";

const Entry = () => {
  const state = useSelector((state) => state.user);
  return <div className="register-page row ms-3 mt-5"></div>;
};

export default Entry;
