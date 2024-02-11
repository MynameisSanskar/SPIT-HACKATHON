import Lottie from "react-lottie";
import animationData from "./socialmedia.json";

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
    <div >
<Lottie options={defaultOptions} marginLeft={40} height={500} width={500} />
    </div> 
  
  );
}