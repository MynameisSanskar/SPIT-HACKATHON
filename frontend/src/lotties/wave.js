import Lottie from "react-lottie";
import animationData from "../lotties/Animation - 1707575823618.json";

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
<Lottie options={defaultOptions} height={728} width={'100%'} />
    </div> 
  
  );
}