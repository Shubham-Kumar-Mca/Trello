import React, { useState } from "react";
import Style from "./Leftsection.module.css";
import { BsFillFilePostFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { GrTextAlignFull, GrList } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

export default function Leftsection() {
  const [title, setTitle] = useState("Cook Food");
  const [editTitle, setEditTitle] = useState(false);
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && addComment !== "") {
      setComments([...comments, addComment]);
      setAddComment("");
    }
  };

  return (
    <>
      <div className={Style.Main_Container}>
        <div className={Style.titleSection}>
          <div className={Style.titleInput}>
            <BsFillFilePostFill className={Style.titleLogo} />
            {editTitle ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setEditTitle(false)}
                autoFocus
              />
            ) : (
              <h2 onClick={() => setEditTitle(true)}>
                {/* <BsFillFilePostFill className={Style.titleLogo} /> */}
                {title}
              </h2>
            )}{" "}
          </div>
          <div>
            in list <u>To Do</u>
          </div>{" "}
          <div className={Style.BtnContent}>
            <h3>Notifications</h3>
            <p className={Style.EyeLog}>
              <AiOutlineEye /> Watch
            </p>
          </div>
        </div>

        <div className={Style.DescriptionSection}>
          <h2>
            <GrTextAlignFull className={Style.DesLogo} />
            Description
          </h2>
          <textarea
            name="text"
            id="text"
            placeholder="Add more detailed description"
          ></textarea>
        </div>

        <div className={Style.ActivitySection}>
          <div className={Style.ActiveHeading}>
            <h2>
              <GrList className={Style.ActLogo} />
              Activity
            </h2>
            <button>Hide Details</button>
          </div>
          <div className={Style.ActComments}>
            <input
              type="text"
              placeholder="Write a Comment..."
              value={addComment}
              onChange={(e) => setAddComment(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={Style.CommentsSection}>
            {comments.map((elem, index) => {
              const currentDate = new Date();
              const formattedDate = currentDate.toLocaleString();
              // console.log(currentDate);
              // console.log(formattedDate);

              return (
                <div className={Style.ShowComments} key={index}>
                  <div className={Style.MapComment}>
                    <FaUserCircle className={Style.UserLogo} />
                    {/* <h4>Cristiano Ronaldo</h4> */}
                    <br />
                    <p>{elem}</p>
                  </div>
                  <br />
                  <div className={Style.CommentDate}>{formattedDate}</div>
                </div>
              );
            })}
            {/* <FaUserCircle className={Style.UserLogo} />
            <p>comments</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

// const Component1 = () => {
//   const [title, setTitle] = useState("Cook Food");
//   const [editTitle, setEditTitle] = useState(false);

//   return (
//     <div className={Style.titleSection}>
//       {editTitle ? (
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           onBlur={() => setEditTitle(false)}
//         />
//       ) : (
//         <h2 onClick={() => setEditTitle(true)}>{title}</h2>
//       )}
//     </div>
//   );
// };

// const Component2 = () => {
//   return (
//     <div className={Style.DescriptionSection}>
//       <h2>Description</h2>
//     </div>
//   );
// };

// const Component3 = () => {
//   return (
//     <div className={Style.ActivitySection}>
//       <h2>Activity</h2>
//     </div>
//   );
// };
