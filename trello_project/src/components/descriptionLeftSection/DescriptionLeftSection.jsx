import React, { useContext, useEffect, useState } from "react";
import Style from "./DescriptionLeftSection.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { GrTextAlignFull, GrList } from "react-icons/gr";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from "../../context/AuthContextProvider";

const modules = {
  toolbar : [
    [{ header: [1, 2, 3, 4, 5, 6, false]}],
    ["bold", "italic", "underline", "strike"],
    [
      { list : "ordered"},
      { list : "bullet"},
    ],
    ["link", "image", "video"]

  ]
}

export default function DescriptionLeftSection({updateDescription, id}) {
  const [isDescriptionVisible, setIsDiscriptionVisible] = useState(false);
  const [isCommentWrite, setIsCommentWrite] = useState(false);
  const [value, setValue] = useState('');
  const [content, setContent] = useState("");

  const [comments, setComments] = useState("");
  const [mutiComments, setMultiComments] = useState([])

  const { collectionTaskList, updatedData } = useContext(AuthContext);
  const [currentTaskList, setCurrentTaskList] = useState({});
  const [currentTask, setCurrentTask] = useState({})

  const handelCancel = () =>{
    setIsDiscriptionVisible(false)
    if(currentTask?.description === ""){
      setValue("")
    }
  }

  const handelSave = () =>{
    updateDescription(value)
    setIsDiscriptionVisible(false)
  }

  const handelCommentSave = () =>{
    if(comments === ""){
      return
    }else{
      setMultiComments([...mutiComments, comments])
      setComments("")
      setIsCommentWrite(false)
    }
  }


  //Find current TaskList and current task 
  useEffect(() => {
    const currentTask = collectionTaskList.find(taskList => taskList.id === id);
    setCurrentTaskList(currentTask);
    const findCurrentTask = currentTask.tasks.find(ele=>ele.id === currentTask.taskId)
    setCurrentTask(findCurrentTask)
  }, [updateDescription]);

  return (
    <>
      <div className={Style.Main_Container}>
        <div className={Style.titleSection}>
          <div className={Style.BtnContent}>
            <p>Notifications</p>
            <div className={Style.EyeLog}>
              <AiOutlineEye />
              <p>Watch</p>
            </div>
          </div>
        </div>

        <div className={Style.DescriptionSection}>
          <div className={Style.desc}>
            <GrTextAlignFull />
            <h2>Description</h2>
            {currentTask?.description && <button className={Style.editBtn} onClick={()=>setIsDiscriptionVisible(true)}>Edit</button>}
          </div>
          {
            isDescriptionVisible ?
              <div className={Style.Editor}>
                <ReactQuill placeholder="Use Markdown shortcuts to format your page as you type, like * for lists, # for headers, and --- for a horizontal rule." theme="snow" value={value} onChange={setValue} modules={modules}/>
                <div className={Style.btn__container}>
                  <button onClick={handelSave}>Save</button>
                  <button onClick={handelCancel}>Cancel</button>
                </div>
              </div>
              : currentTask?.description === "" ?
              <div className={Style.DescriptionSectionContent} onClick={() => setIsDiscriptionVisible(true)}>
                <p>Add a more detailed description…</p>
              </div>
              : <p className={Style.content} dangerouslySetInnerHTML = {{__html : currentTask?.description}} />
          }
        </div>

        <div className={Style.ActivitySection}>
          <div className={Style.ActiveHeading}>
            <div>
              <GrList />
              <h2>Activity</h2>
            </div>
            <button>Hide Details</button>
          </div>
          <div className={Style.ActComments}>
            {
              isCommentWrite ?
                <div className={Style.commentsWrite}>
                  <ReactQuill placeholder="Write a comments..." theme="snow" value={comments} onChange={setComments} modules={modules}/>
                  <button className={Style.save} onClick={handelCommentSave}>Save</button>
                </div>
              : 
              <div className={Style.comment} onClick={()=>setIsCommentWrite(true)}>
                <p>Write a comment...</p>
              </div>
            }
            
          </div>
  
        </div>
      </div>
    </>
  );
}

