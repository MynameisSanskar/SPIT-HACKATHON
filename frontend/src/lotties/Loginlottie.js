import Lottie from "react-lottie";
import animationData from "./loginlottie.json";

import React from "react";

export default function Loginlottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{marginLeft:50}}>
<Lottie options={defaultOptions} height={400} width={400} />
    </div> 
  
  );
}
