import React from "react";
import Logo from "../assets/images/Prism_logo_2.png";
import "./index.css";

const Index = () => {
  return (
    <div className="home">
      <img alt="logo" src={Logo} width="200px" />
      <h1>Welcome</h1>
    </div>
  );
};

export default Index;
