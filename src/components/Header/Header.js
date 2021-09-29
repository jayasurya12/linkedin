import React,{useState} from 'react'
import {Container,Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import './Header.css'
import {Home,Search,LinkedIn,SupervisorAccount
    ,Notifications,ArrowDropDown,Sms,Apps,BusinessCenter} from '@mui/icons-material';

const Header = () => {
    const userData=useSelector((state)=>state.user.additionalUserInfo.profile)
    const [headerOptions, setHeaderOptions]=useState("home")
    return (
        <div className='headers' >
            <div className='header-left'>
                <LinkedIn />
               <div className='inputTag'>
                <Search/>
                <input type='text' placeholder='Search'/>
               </div>
            </div>
            <div className='header-right'>
                <div className={ `header_option ${headerOptions ==="home" ? "header_option--active":null}`}
                onClick={()=>setHeaderOptions("home")}>
                <Home/>
                <p>Home</p>
                </div>
                <div className={ `header_option ${headerOptions ==="network" ? "header_option--active":null}`}
                    onClick={()=>setHeaderOptions("network")}>
                    <SupervisorAccount/>
                    <p>My Network</p>
                </div>
                <div className={ `header_option ${headerOptions ==="jobs" ? "header_option--active":null}`}
                    onClick={()=>setHeaderOptions("jobs")}>
                    <BusinessCenter/>
                    <p>Jobs</p>
                </div>
                <div className={ `header_option ${headerOptions ==="message" ? "header_option--active":null}`}
                    onClick={()=>setHeaderOptions("message")}>
                    <Sms/>
                    <p>Message</p>
                </div>
                <div className={ `header_option ${headerOptions ==="notification" ? "header_option--active":null}`}
                    onClick={()=>setHeaderOptions("notification")}>
                    <Notifications/>
                    <p>Notification</p>
                </div>
                <div>
                <div className='personal'>
                    <Avatar className='avatar' alt="Remy Sharp" src={userData.picture}/>
                    <div className='me'>
                        <p>Me</p>
                        <ArrowDropDown/>
                    </div>
                </div>
                </div>
                <hr/>
                <div className='header-last'>
                    <div className='apps'>
                        <div>
                            <Apps/>
                        </div>
                        <div className='work'>
                            <p>Work</p>
                            <ArrowDropDown/>
                        </div>
                    </div>
                    <p>Try Premium for free</p>
                </div>
            </div>
        </div>
    )
}

export default Header
