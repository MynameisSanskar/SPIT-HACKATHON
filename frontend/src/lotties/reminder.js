import Lottie from "react-lottie";
import animationData from "./reminder.json";

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
<Lottie options={defaultOptions} height={200} width={200} />
    </div> 
  
  );
}