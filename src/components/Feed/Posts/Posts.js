import { Avatar } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import style from './Posts.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Posts = ({profileSrc,image,message,timestamp,username}) => {
    return (
        <div className={style.postContainer}>
           <section className={style.header}>
               <Avatar src={profileSrc}/>
               <section className={style.userName}>
                    <p>{username}</p>
                    <p>{new Date(timestamp?.toDate()).toDateString()}</p>
               </section>
               <div className={style.more}>
                   <MoreHorizIcon/>
               </div>
           </section>
           <section className={style.message}>
            <p className={style.msg}>{message}</p>
           </section>
           <section className={style.imageContainer}>
            <img alt='' src={image}/>
           </section>
           
           <section className={style.userComments}>
           <div>
           <i class="far fa-thumbs-up"></i>
           <p>Like</p>
           </div>
           <div>
           <i class="fas fa-comment-dots"></i>
           <p>Comments</p>
           </div>
           <div>
           <i class="fas fa-share"></i>
           <p>Share</p>
           </div>
           <div>
           <i class="fas fa-paper-plane"></i>
           <p>Send</p>
           </div>
           </section>
        </div>
    )
}

export default Posts
