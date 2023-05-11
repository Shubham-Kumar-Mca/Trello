import React, { useContext, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { nanoid } from 'nanoid'
import "./CreateNewTask.css"
import { AuthContext } from '../../context/AuthContextProvider';

const CreateNewTask = () => {
    const { setIsToggle, handelAddList } = useContext(AuthContext)
    const [listTitle, setListTitle] = useState("");
    const inputRef = useRef()

    const handelAddListClick = () => {
        if (listTitle === "") {
            inputRef.current.focus()
            return
        } else {
            const newList = {
                id: nanoid(),
                title: listTitle,
                isDescriptionVisible : false,
                taskId : "",
                tasks : []
            }
            handelAddList(newList)
            setListTitle("")
        }
    }

    return (
        <div className='singleAddList__container'>
            <input ref={inputRef} type="text" placeholder='Enter list title...' value={listTitle} onChange={(e) => setListTitle(e.target.value)} />
            <div className='btn__container'>
                <button onClick={handelAddListClick}>Add List</button>
                <RxCross2 onClick={() => setIsToggle(false)} />
            </div>
        </div>
    )
}

export default CreateNewTask