import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setNavigate] = useState(false);
  setTimeout(() => setNavigate(true), 2000);

  return redirect ? (
    <Navigate to="/home" replace />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
