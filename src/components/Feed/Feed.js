import React,{useState,useEffect} from 'react'
import MessageSender from './Message_Sender/Message-Sender'
import Post from './Posts/Posts'
import {useSelector} from 'react-redux'
import style from './Feed.module.css'
import {db} from '../../firebase'
import { SettingsInputCompositeSharp } from '@material-ui/icons'

const Feed = () => {
    const [post,setPost]=useState([])
    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapShot)=>{
            setPost(snapShot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    data:doc.data()
                }
            }))
        })
    }, []) 
    return (
        <div className={style.feedContainer}>
            <MessageSender/>
            {post.map((post)=>{
                return(
                    <Post key={post.id}
                    profileSrc={post.data.profilePic}
                    image={post.data.image}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.userName}
                    />
                )
            })}
        </div>
    )
}

export default Feed
