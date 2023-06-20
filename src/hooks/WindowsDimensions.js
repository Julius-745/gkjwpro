import { useEffect, useState } from "react";

export default function WindowScreen(){
  const[screenSize, setSize] = useState(getCurrentDimension);

  // set first value
  function getCurrentDimension(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
  // set value for setSize
  const updateScreen = () => {
    setSize( {
      width: window.innerWidth,
      height: window.innerHeight
    })
  };
// 
  useEffect(() => {
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return screenSize;
}
