import React, { useContext } from 'react'
import "./Home.css"

import { AuthContext } from '../../context/AuthContextProvider'
import TaskList from '../../components/taskList/TaskList'
import CreateNewTask from '../../components/createNewTask/CreateNewTask'
import AddList from '../../components/addlist/AddList'


const Home = () => {
    const {collectionTaskList, isToggle} = useContext(AuthContext)

    return (
        <div className='Home__container'>
            <div className='task__list'>
                {
                    collectionTaskList && collectionTaskList.map(singleTaskList => (
                        <TaskList key={singleTaskList.id} {...singleTaskList}/>
                    ))
                }
            </div>
            {
                isToggle ? <CreateNewTask /> : <AddList  />
            }
        </div>
    )
}

export default Home