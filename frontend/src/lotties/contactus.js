import Lottie from "react-lottie";
import animationData from "./contactus (2).json";

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
<Lottie options={defaultOptions} height={500} width={400} />
    </div> 
  
  );
}
