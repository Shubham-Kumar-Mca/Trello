import React, { useContext } from 'react';
import CreateNewTask from '../../components/createNewTask/CreateNewTask';
import { AuthContext } from '../../context/AuthContextProvider';
import TaskList from '../../components/taskList/TaskList';
import AddList from '../../components/addlist/AddList';
import "./Home.css";



const Home = () => {
    const {collectionTaskList, isToggle, setCollectionTaskList} = useContext(AuthContext);

    const handelTaskDelete = (id) =>{
        const filteredTaskList = collectionTaskList.filter((taskList)=>taskList.id !== id);
        setCollectionTaskList(filteredTaskList)
    }
    const handelTaskEdit = (id) =>{

    }

    return (
        <div className='Home__container'>
            <div className='task__list'>
                {
                    collectionTaskList && collectionTaskList.map(singleTaskList => (
                        <TaskList key={singleTaskList.id} handelTaskEdit = {handelTaskEdit} handelTaskDelete = {handelTaskDelete} {...singleTaskList} />
                    ))
                }
            </div>
            {
                isToggle ? <CreateNewTask /> : <AddList  />
            }
        </div>
    )
}

export default Home;