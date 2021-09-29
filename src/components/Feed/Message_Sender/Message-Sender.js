import React,{useState} from 'react'
import { Avatar,LinearProgress } from '@material-ui/core';
import {Image,DateRange} from '@material-ui/icons'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleIcon from '@mui/icons-material/Article';
import {useSelector} from 'react-redux'
import style from './Message.module.css'
import {db,storage,timestamp} from '../../../firebase'

const MessageSender = () => {
    const user=useSelector((state)=>state.user.user)
    const [input ,setInput]=useState()
    const [image ,setImage]=useState()
    const [progress ,setProgress]=useState(0)

    const handleClick=(e)=>{
        e.preventDefault()
        const uploadTask=storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',(snapShot)=>{
            const progress=Math.round((snapShot.bytesTransferred/snapShot.totalBytes)*100)
            setProgress(progress)
        },(error)=>{console.log(error)},
        ()=>{
            storage.ref('images')
            .child(image.name).getDownloadURL()
            .then((url)=>{
                db.collection('posts')
                .add({
                    message:input,
                    userName:user.displayName,
                    timestamp:timestamp,
                    profilePic:user.photoURL,
                    image:url
                })
                setProgress(0)
                setImage("")
                setInput("")
            }).catch((error)=>console.log(error))
        })
    }
    return (
        <div className={style.messageContainer}>
        <form>
            <section className={style.messageContainer1}>
                <Avatar src={user.photoURL}/>
                    <input type='text' placeholder='Start a post'
                        onChange={(e)=>setInput(e.target.value)}
                        value={input}/>
                    
            </section>
            <section className={style.uploadField}>
                <div className={style.photo}>
                    <input type='file' id='photoFile' className={style.imageUplode} accept='image/*'
                        onChange={(e)=>setImage(e.target.files[0])}/>
                    <label for="photoFile">
                       <Image style={{color:'#70B5F9'}}/>
                        <p>Photo</p>
                    </label>
                </div>
                <div className={style.video}>
                    <SmartDisplayIcon style={{color:"#7FC15E"}}/>
                    <p>Video</p>
                </div>
                <div className={style.date}>
                <DateRange style={{color:"#E7A749"}}/>
                <p>Event</p>
                </div>
                <div className={style.artical}>
                <ArticleIcon style={{color:"#FC9295"}}/>
                <p>Write artical</p>
                </div>
                </section>
            <section className={style.progress}>
               {progress> 0 &&(
                   <LinearProgress variant='determinate'
                   value={progress}/>
               )}
            </section>
            
            <button type='submit'className={style.submit} 
            onClick={handleClick}>submit</button>
        </form>
        </div>
    )
}

export default MessageSender;
