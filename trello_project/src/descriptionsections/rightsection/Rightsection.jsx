import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineNewLabel }  from 'react-icons/md';
import { ImAttachment }  from 'react-icons/im';
import { VscLayoutPanel } from 'react-icons/vs';
import CreditScoreSharpIcon from '@mui/icons-material/CreditScoreSharp';
import QueryBuilderSharpIcon from '@mui/icons-material/QueryBuilderSharp'; 

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
      icon: <FeaturedPlayListOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "Lists",
    },
    {
      icon: <ImAttachment  style={{ fontSize: "28px" }} />,
      text: "Attachment ",
    },
    {
      icon: <VscLayoutPanel style={{ fontSize: "28px" }} />,
      text: "Cover",
    },
    {
        icon: <VscLayoutPanel style={{ fontSize: "28px" }} />,
        text: "Cover",
      },
  ];