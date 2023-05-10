import React from "react";
import Style from "./Description.module.css";
import LeftSection from "../../descriptionsections/leftsection/Leftsection";
import RightSection from "../../descriptionsections/rightsection/Rightsection";
const Description = () => {
  return (
    <div className={Style.homeDiv}>
      
        <div className={Style.leftDiv}><LeftSection/></div>

          
      <div className={Style.rightDiv}><RightSection /></div>

          </div>
  );
};

export default Description;
