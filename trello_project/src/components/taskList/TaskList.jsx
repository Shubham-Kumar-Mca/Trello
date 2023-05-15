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

const TaskList = ({ title, id, handelTaskDelete }) => {
  const { collectionTaskList, updatedData } = useContext(AuthContext);
  const [isTextareaVisible, setIsTextAreaVisible] = useState(false);
  const [taskListEditable, settaskListEditable] = useState(true);
  const [titleEditable, setTitleEditable] = useState(true);
  const [currentTaskList, setCurrentTaskList] = useState({});
  const [task, setTask] = useState("");
  const taskListRef = useRef();
  const inputRef = useRef();
  const titleRef = useRef();


  //Adding New Task
  const handelAddCard = () => {
    if (task === "") {
      inputRef.current.focus();
      return;
    } else {
      //create object for new Task
      const newTask = {
        id: nanoid(),
        taskTitle: task,
        description: "",
        activity: [],
      };
      //Updating current taskList to new task
      const newCurrentTaskList = {
        ...currentTaskList,
        tasks: [...currentTaskList.tasks, newTask],
      };
      //updating localstorage to current Task list
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


  //Update TaskList Title here...
  const handelTaskListTitleChange = (e, id) => {
    updatedData({ ...currentTaskList, title: e.target.value }, id);
  };

  const handelIdSave = () => {
    localStorage.setItem("currentItemId", JSON.stringify(id))
  }

  //focus taskList title
  const handelFocus = () => {
    titleRef.current.focus()
  }

  //whole taskList delete in once
  const handelTaskListDelete = (id) =>{
    const filteredData = currentTaskList.tasks.filter(task=>task.id !== id)
    const updateCurrentTaskList = {...currentTaskList, tasks : filteredData}
    updatedData(updateCurrentTaskList, updateCurrentTaskList.id);
  }

  //focus, when user want to edit task list title then focus here
  const handelTaskListEditfocus = () =>{
    taskListRef.current.focus()
  }

  //single tasklist editable
  const handelTaskListEditable = (e, id) =>{
    const updatedTaskListTitle = currentTaskList.tasks.map(task=>{
      if(task.id === id){
        return {...task, taskTitle : e.target.value}
      }else{
        return task
      }
    });

    const updateCurrentTaskList = {...currentTaskList, tasks : updatedTaskListTitle};
    updatedData(updateCurrentTaskList, updateCurrentTaskList.id);
  }


  return (
    <div className="singleList__container">
      <div className="title__section">
        <input ref={titleRef} className={titleEditable ? "" : "input__border"} value={title} disabled={titleEditable} onChange={(e) => handelTaskListTitleChange(e, id)} />
        <div>
          <FaEdit onClick={() => {
            handelFocus()
            setTitleEditable(false)
            settaskListEditable(true)
          }} />
          <MdDelete onClick={() => handelTaskDelete(id)} />
        </div>
      </div>
      <div className="collect__card">
        {currentTaskList &&
          currentTaskList.tasks?.map((SingleCardItem, index) => (
            <li className="SingleCardItem__list" onClick={handelIdSave} key={index}>
              <Link to={taskListEditable ? `/task/${SingleCardItem.id}` : "/" } key={index}>
                <input type="text" className={taskListEditable ? "" : "input__border"} ref={taskListRef} disabled = {taskListEditable}  value={SingleCardItem.taskTitle} onChange={(e)=>handelTaskListEditable(e, SingleCardItem.id)}/>
              </Link>

              <div className="gap">
                <FaEdit onClick={() => {
                  handelTaskListEditfocus()
                  settaskListEditable(false)
                  setTitleEditable(true)
                }}/>
                <MdDelete onClick={() => handelTaskListDelete(SingleCardItem.id)} />
              </div>
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
            settaskListEditable(true)
          }}>
            <AiOutlinePlus />
            <span>Add a Card</span>
          </button>
        </div>
      )}
    </div>
    </div >
  );
};

export default TaskList;
