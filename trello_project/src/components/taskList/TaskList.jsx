import React, { useContext, useEffect, useRef, useState } from "react";
import "./TaskList.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../context/AuthContextProvider";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const TaskList = ({ title, id }) => {
  const { collectionTaskList, updatedData } = useContext(AuthContext);
  const [isTextareaVisible, setIsTextAreaVisible] = useState(false);
  const [task, setTask] = useState("");
  const [currentTaskList, setCurrentTaskList] = useState({});
  const inputRef = useRef();
  const [taskId, setTaskId] = useState("");

//   const handelClickTaskList = (id) => {
//     updatedData(
//       { ...currentTaskList, isDescriptionVisible: true, taskId: id },
//       currentTaskList.id
//     );
//   };

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

  const handelTitleChange = (e) => {
    updatedData({ ...currentTaskList, title: e.target.innerHTML }, id);
  };

  const handelIdSave = () =>{
    localStorage.setItem("currentItemId", JSON.stringify(id))
  }

  return (
    <div className="singleList__container">
      <div className="title__section">
        <p contentEditable onInput={handelTitleChange}>
          {title}
        </p>
        <BsThreeDots />
      </div>
      <div className="collect__card">
        {currentTaskList &&
          currentTaskList.tasks?.map((SingleCardItem, index) => (
            <li className="SingleCardItem__list" onClick={handelIdSave}>
                <Link to={`/task/${SingleCardItem.id}`}  key={index}>
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
            <button onClick={() => setIsTextAreaVisible(true)}>
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
