import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineNewLabel }  from 'react-icons/md';
import { ImAttachment }  from 'react-icons/im';
import { SiAutomattic } from 'react-icons/si';
import { SlFolderAlt } from 'react-icons/sl';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import style from "./Rightsection.module.css" 
import CreditScoreSharpIcon from '@mui/icons-material/CreditScoreSharp';
import QueryBuilderSharpIcon from '@mui/icons-material/QueryBuilderSharp'; 
import Buttons from '../../components/button/Buttons';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const arrs = [
    
    { 
      icon: <CgProfile style={{ fontSize: "28px" }} />,
      text: "Members" 
    },
    {
      icon: <MdOutlineNewLabel style={{ fontSize: "28px" }} />,
      text: "Labels",
    },
    { 
      icon: <CreditScoreSharpIcon style={{ fontSize: "28px" }} />,
      text: "Checklist"
     },
    {
      icon: <QueryBuilderSharpIcon style={{ fontSize: "28px" }} />,
      text: "Dates",
    },
   
    {
      icon: <ImAttachment  style={{ fontSize: "28px" }} />,
      text: "Attachment ",
    },
    {
      icon: <WebOutlinedIcon  style={{ fontSize: "28px" }} />,
      text: "Cover",
    },
    {
        icon: <SlFolderAlt style={{ fontSize: "28px" }} />,
        text: "Custom fields",
      },
     
  ];

  const array=[
    { 
      icons: <TrendingFlatOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "Move" 
    },
    {
      icons: <ContentCopyOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "copy",
    },
    { 
      icons: <CreditScoreSharpIcon style={{ fontSize: "28px" }} />,
      text: "Make Template"
     },
    {
      icons: <ArchiveOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "Archieve",
    },
   
    {
      icons: <ShareOutlinedIcon  style={{ fontSize: "28px" }} />,
      text: "Share ",
    },
    

  ];

  function RightSection() {
    
  
  
  
    return (
      <>
        <div className={style.mainDiv}>
         
          <div className={style.btnDiv}>
            
            <h3 className={style.h3}> Add to card</h3>

            <div className={style.buttons}>
            {arrs.map((arr, index) => {
              return (
                <>
                  <div key={index}>
                    <Buttons
                      className={style.icons}
                      image={arr.icon}
                      Sign={arr.text}
                    />
                  </div>
                </>
              );
            })}
            <h3 className={style.h3}> Power-ups</h3>
            <div >
              <button className={style.btn2}>
              <AddOutlinedIcon
              style={{
              color: "black",
              fontSize: "xx-large",
               }}
               />Add Power-ups</button>
               </div>

           <div className={style.Auto}> <h3 className={style.h3}>Automation<SiAutomattic/></h3></div>
            <div >
              <button className={style.btn2}>
              <AddOutlinedIcon
              style={{
              color: "black",
              fontSize: "xx-large",
               }}
               />Add Button</button></div>
          
            <h3 className={style.h3}>Actions</h3>
            {array.map((arr, index) => {
              return (
                <>
                  <div key={index}>
                    <Buttons
                      className={style.icons}
                      image={arr.icons}
                      Sign={arr.text}
                    />
                  </div>
                </>
              );
            })}
  </div>
            </div>
          </div>
     
      </>
    );
  }
  export default RightSection;