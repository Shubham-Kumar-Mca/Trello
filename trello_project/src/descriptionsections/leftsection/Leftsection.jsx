import React from 'react'
import Style from './Leftsection.module.css'

export default function Leftsection() {
    return (
      <>
          
       
        <div className={Style.Main_Container}>
          <Component1 />
          <Component2 />
          <Component3 />
        </div>
       
      </>
    );
  }


 const Component1= () => {
    return (
       
        <div className={Style.titleSection}>
          <h1>title</h1>
        </div>
    );
  };


  const Component2= () => {
    return (
       
        <div className={Style.DescriptionSection}>
        <h2>Description</h2>
      </div>
    );
  };


  const Component3= () => {
    return (
       
        <div className={Style.ActivitySection}>
        <h2>Activity</h2>
      </div>
    );
  };

  