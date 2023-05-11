import React, { useContext, useEffect, useState } from "react";
import Style from "./Description.module.css";
import DescriptionRightSection from "../../components/descriptionRightSection/DescriptionRightSection";
import DescriptionLeftSection from "../../components/descriptionLeftSection/DescriptionLeftSection";
import { RxCross2 } from "react-icons/rx";
import { RiRadioFill } from "react-icons/ri";
import { AuthContext } from "../../context/AuthContextProvider";


const Description = ({ id }) => {
  const { collectionTaskList, updatedData } = useContext(AuthContext);
  const [currentTaskList, setCurrentTaskList] = useState({});
  const [currentTask, setCurrentTask] = useState({})


  const handelCloseDiscription = () =>{
    const updateDiscription = {...currentTaskList, isDescriptionVisible : false, taskId : ""}
    updatedData(updateDiscription, currentTaskList.id)
  }

  //Updating Description here...
  const updateDescription = (desContent) =>{
    const updateDes = {...currentTask, description : desContent};
    const updateCurrentTask = currentTaskList.tasks.map(ele=>{
      if(ele.id === currentTaskList.taskId){
        return updateDes
      }else{
        return ele
      }
    })
    const updatedCurrentTaskList = {...currentTaskList, tasks : updateCurrentTask}
    updatedData(updatedCurrentTaskList, id)
  }
  
  
  //Find current TaskList and current task 
  useEffect(() => {
    const currentTask = collectionTaskList.find(taskList => taskList.id === id);
    setCurrentTaskList(currentTask);
    const findCurrentTask = currentTask.tasks.find(ele=>ele.id === currentTask.taskId)
    setCurrentTask(findCurrentTask)
  }, [updateDescription]);

  
  return (
    <div className={Style.homeDiv}>

      <div className={Style.discription__wrapper}>

        <div>
          <div className={Style.titleInput}>
            <RiRadioFill className={Style.titleLogo} />
            <h2>{currentTask?.taskTitle}</h2>
          </div>

          <div className={Style.cancelBtn}>
            <RxCross2 onClick={handelCloseDiscription} />
          </div>

          <div className={Style.ml_5}>
            <p>in list <u>{currentTaskList?.title}</u> </p>
          </div>
        </div>


        <div className={Style.mainContainer}>
          <div className={Style.leftDiv}>
            <DescriptionLeftSection updateDescription = {updateDescription} id = {id}/>
          </div>

          <div className={Style.rightDiv}>
            <DescriptionRightSection />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Description;
