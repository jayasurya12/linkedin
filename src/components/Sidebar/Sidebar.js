import React from 'react'
import style  from './Sidebar.module.css'
import {Avatar, IconButton} from '@material-ui/core'
import {Bookmark,ExpandLess,Add} from '@mui/icons-material';
import {useSelector} from 'react-redux'
import { ExpandMore } from '@material-ui/icons';

const Sidebar = () => {
    const userData=useSelector((state)=>state.user.additionalUserInfo.profile)
    return (
        <div className={style.sidebar}>
            <div className={style.card}>
                <div className={style.head}>
                    <img alt=''
                    src={'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg'}/>
                </div>
                <div className={style.profile}>
                    <Avatar className={style.avatar} src={userData.picture}/>
                    <p className={style.name}>{userData.name}</p>
                </div>
                <div  className={style.someData}>
                    <p>Connections</p>
                    <h6>Grow your network</h6>
                </div>
                <div className={style.access}>
                    <p>Access exclusive tools & insights</p>
                    <h6>Try Premium for free</h6>
                </div>
                <div className={style.footer}>
                    <Bookmark/>
                    <p>My items</p>
                </div>
            </div>
            <div className={style.card1}>
               <div className={style.jobs}>
                <h5>Recent</h5>
                <p># jobspostings</p>
                <p># jobinterviews</p>
                <p># datascience</p>
                <p># python</p>
                <p># ai</p>
                <h6>Groups</h6>
               </div>
               <div className={style.event}>
                   <h6>Events</h6>
                   <p>+</p>
               </div>
               <div className={style.hastag}>
                   <div className={style.hastag1}>
                        <p>Followed Hastag</p>
                        <ExpandLess/>
                    </div>
                    <p># jobspostings</p>
                    <p># jobinterviews</p>
                    <p># datascience</p>
                    <div className={style.showMore}>
                        <p>Show more</p>
                        <ExpandMore/>
                    </div>
                    <div className={style.discover}>
                        <p>Discover more</p>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Sidebar
