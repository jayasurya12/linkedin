import React from 'react'
import Login from '../components/Login/Login'
import {useSelector} from 'react-redux'
import style from './Home.module.css'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Widget from '../components/Widget/Widget'

const Home = () => {
    const userData =useSelector((state)=>state.user)
    console.log(userData);
    return (
        <div className={style.home}>
            {
               !userData ?
               (<Login/> )
               :
               (
               <>
               <Header/>
              <div className={style.sideCenterAcent}>
                <Sidebar/>
                <div className={style.res}>
                    <Feed/>
                    <Widget />
                </div>
              </div>
               </>
               
               )
            }
        </div>
    )
}

export default Home
