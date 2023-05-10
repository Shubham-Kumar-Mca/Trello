import React from "react";
import Style from "./description.css";

const Description = () => {
  return (
    <div className={Style.homeDiv}>
      
        <div className={Style.leftDiv}><LeftSection/></div>

          
      <div className={Style.rightDiv}><RightSection /></div>

          </div>
  );
};

export default Description;
