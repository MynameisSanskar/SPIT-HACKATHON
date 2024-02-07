import Lottie from "react-lottie";
import animationData from "./landlord2.json";

import React from "react";

export default function LottieFeature() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{marginLeft:50, marginTop:35}}>
<Lottie options={defaultOptions} height={460} width={400} />
    </div> 
  
  );
}