import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./TaskList.css";

const TaskList = ({ title, id, handelTaskEdit, handelTaskDelete}) => {
  const { collectionTaskList, updatedData } = useContext(AuthContext);
  const [isTextareaVisible, setIsTextAreaVisible] = useState(false);
  const [titleEditable, setTitleEditable] = useState(true)
  const [task, setTask] = useState("");
  const [currentTaskList, setCurrentTaskList] = useState({});
  const inputRef = useRef();
  const titleRef = useRef();



  const handelAddCard = () => {
    if (task === "") {
      inputRef.current.focus();
      return;
    } else {
      const newTask = {
        id: nanoid(),
        taskTitle: task,
        description: "",
        activity: [],
      };
      const newCurrentTaskList = {
        ...currentTaskList,
        tasks: [...currentTaskList.tasks, newTask],
      };
      updatedData(newCurrentTaskList, id);
      setTask("");
      setIsTextAreaVisible(true);
    }
  };

  useEffect(() => {
    const currentTask = collectionTaskList.find(
      (taskList) => taskList.id === id
    );
    setCurrentTaskList(currentTask);
  }, [handelAddCard]);

  const handelTaskListTitleChange = (e, id) => {
    updatedData({ ...currentTaskList, title: e.target.value }, id);
  };

  const handelIdSave = () => {
    localStorage.setItem("currentItemId", JSON.stringify(id))
  }

  const handelFocus = () =>{
    titleRef.current.focus()
  }

  return (
    <div className="singleList__container">
      <div className="title__section">
        <input ref={titleRef} className={titleEditable ? "" : "input__border"} value={title} disabled = {titleEditable} onChange={(e)=>handelTaskListTitleChange(e,id)}/>
        <div>
          <FaEdit onClick={()=>{
            handelFocus()
            handelTaskEdit(id)
            setTitleEditable(false)
          }}/>
          <MdDelete onClick={()=>handelTaskDelete(id)}/>
        </div>
      </div>
      <div className="collect__card">
        {currentTaskList &&
          currentTaskList.tasks?.map((SingleCardItem, index) => (
            <li className="SingleCardItem__list" onClick={handelIdSave} key={index}>
              <Link to={`/task/${SingleCardItem.id}`} key={index}>
                {SingleCardItem.taskTitle}
              </Link>
            </li>
          ))}
        {isTextareaVisible ? (
          <div>
            <textarea
              placeholder="Enter the title for this card..."
              value={task}
              ref={inputRef}
              onChange={(e) => setTask(e.target.value)}
            />
            <div className="addCard__section">
              <div>
                <button onClick={handelAddCard}>Add card</button>
                <RxCross2 onClick={() => setIsTextAreaVisible(false)} />
              </div>
              <BsThreeDots />
            </div>
          </div>
        ) : (
          <div className="singListBtn">
            <button onClick={() => {
              setIsTextAreaVisible(true)
              setTitleEditable(true)
            }}>
              <AiOutlinePlus />
              <span>Add a Card</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
