import React, { useContext, useEffect, useRef, useState } from 'react';
import "./singleList.css";
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../../context/AuthContextProvider';

const SingleList = ({ title, id }) => {
    const { collectionTaskList, updatedData } = useContext(AuthContext)
    const [isTextareaVisible, setIsTextAreaVisible] = useState(false);
    const [task, setTask] = useState("")
    const [currentTaskList, setCurrentTask] = useState({})
    const inputRef = useRef();

    const handelAddCard = () => {
        if (task === "") {
            inputRef.current.focus()
            return
        } else {
            const newCurrentTaskList = { ...currentTaskList, tasks: [...currentTaskList.tasks, task] }
            updatedData(newCurrentTaskList, id)
            setTask("")
            setIsTextAreaVisible(true)
        }
    }

    useEffect(() => {
        const currentTask = collectionTaskList.find(taskList => taskList.id === id);
        setCurrentTask(currentTask);
    }, [handelAddCard]);


    const handelTitleChange = (e) =>{
        updatedData({...currentTaskList, title : e.target.innerHTML}, id)
    }



    return (
        <div className='singleList__container'>
            <div className='title__section'>
                <p contentEditable onInput={handelTitleChange} >{title}</p>
                <BsThreeDots />
            </div>
            <div className='collect__card'>
                {
                    currentTaskList && currentTaskList.tasks?.map((SingleCardItem, index) => (
                        <li className='SingleCardItem__list' key={index}>{SingleCardItem}</li>
                    ))
                }
                {
                    isTextareaVisible ?
                        <div>
                            <textarea placeholder='Enter the title for this card...' value={task} ref={inputRef} onChange={(e) => setTask(e.target.value)} />
                            <div className='addCard__section'>
                                <div >
                                    <button onClick={handelAddCard}>Add card</button>
                                    <RxCross2 onClick={() => setIsTextAreaVisible(false)} />
                                </div>
                                <BsThreeDots />
                            </div>
                        </div> : null
                }
            </div>
            {isTextareaVisible ? null : <div className='singListBtn'>
                <button onClick={() => setIsTextAreaVisible(true)}>
                    <AiOutlinePlus />
                    <span>Add a Card</span>
                </button>
            </div>}
        </div>
    )
}

export default SingleList