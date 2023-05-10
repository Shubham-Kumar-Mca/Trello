import React, { useContext } from 'react'
import AddList from '../../components/addlist/AddList'
import "./home.css"
import SingleAddList from '../../components/singleaddcart/SingleAddList'

import SingleList from '../../components/singlelist/SingleList'
import { AuthContext } from '../../context/AuthContextProvider'


const Home = () => {
    const {collectionTaskList, isToggle} = useContext(AuthContext)

    return (
        <div className='Home__container'>
            <div className='task__list'>
                {
                    collectionTaskList && collectionTaskList.map(singleTaskList => (
                        <SingleList key={singleTaskList.id} {...singleTaskList}/>
                    ))
                }
            </div>
            {
                isToggle ? <SingleAddList /> : <AddList  />
            }
        </div>
    )
}

export default Home