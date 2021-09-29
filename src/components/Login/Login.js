import React from 'react'
import style from './Login.module.css'
import {Button, Container,Link, Item ,Grid} from '@material-ui/core'
import images from '../../images/img1.jpg'
import {LinkedIn} from '@material-ui/icons'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {auth,provider} from '../../firebase'
import {useDispatch} from 'react-redux'
import {User} from '../../store/auction/Action'

const Login = () => {
    const dispatch=useDispatch()
    const signin=()=>{
        auth.signInWithPopup(provider)
    .then((result)=>{
        dispatch(User(result))
    })
    .catch(error=>console.log(error))
    }

    return (
        <div className={style.loginContainer}>
            <Container>
            <nav className={style.header}>
                <img className={style.linkedIn} alt='' 
                src={'https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png'}/>
                <div className={style.dummy}></div>
                <div className={style.headerAuth}>
                    <Button onClick={signin}>join now</Button>
                    <Button className={style.signin} onClick={signin}>sign in</Button>
                </div>
            </nav>
            <div className={style.main}>
                <section>
                    <p className={style.wel}>Welcome to your professional community</p>
                    <div className={style.signin_with_logoSvg}>
                        <div className={style.login}>
                            <input className={style.input} variant='outlined' placeholder='Email or phone number'/>
                            <input className={style.input} variant='outlined' placeholder='Password'/>
                            <br/>
                            <Link>Forgot password?</Link>
                            <br/>
                            <Button className={style.loginSignin} onClick={signin}>signin</Button>
                        </div>
                        <img alt=''className={style.headImage1} 
                        src={'https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4'}/>
                        <img alt='' className={style.headImage2} 
                        src={'https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn'}/>
                    </div>
                </section>
            </div>
            </Container>
            <section className={style.search}>
               <div className={style.search2}>
                    <div className={style.title}>
                            <p>Find the right job or internship for you</p>
                    </div>
                    <div className={style.jobBtn}>
                        <p>SUGGESTED SEARCHES</p>
                        <Button><a href={'https://www.linkedin.com/jobs/engineering-jobs-council-bluffs-ia?trk=homepage-basic_suggested-search&position=1&pageNum=0'} 
                        style={{textDecoration:"none",color:"rgba(26, 24, 24, 0.836)"}}>
                            Engineering</a></Button>
                        <Button>Business Development</Button>
                        <Button>Finance</Button>
                        <Button>Information Technology</Button>
                        <Button>Marketing</Button>
                        <Button>Operations</Button>
                        <Button>Retail Associate</Button>
                        <Button>Human Resources</Button>
                        <Button>Administrative Assistant</Button>
                    </div>
                </div>
            </section>
            <section className={style.postJob}>
                <div className={style.post}>
                    <p>Post your job for millions of people to see</p>
                    <Button>Post a jobs</Button>
                </div>
            </section>
            <section className={style.connectPeople}>
                <div className={style.connectContainer}>
                    <div className={style.connect1}>
                        <img alt='' src={'https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj'}/>
                        <p>Connect with people who can help</p>
                        <Button>Find people you know</Button>
                    </div>
                    <div className={style.connect2}>
                        <img alt='' src={'https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv'}/>
                        <p>Learn the skills you need to succeed</p>
                      <select><option>Choose a topic to learn about</option></select>
                    </div>
                </div>
            </section>
            <section className={style.last}>
                <h2>Join your colleagues, classmates, and friends on LinkedIn.</h2>
                <Button>Get started</Button>
            </section>

            <section className={style.general}>
                <div className={style.linkedIcon}>
                    <img alt='' 
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'}/>
                </div>
                <div className={style.generalRow}>
                    <div className={style.general1}>
                        <h4>General</h4>
                        <a href='#'>Sign up</a>
                        <br/>
                        <a href='#'>Help center</a>
                        <br/>
                        <a href='#'>About</a>
                        <br/>
                        <a href='#'>Blog</a>
                        <br/>
                        <a href='#'>Careers</a>
                        <br/>
                        <a href='#'>Developers</a>
                        <br/>
                    </div>
                    <div className={style.general1}>
                        <h4>Browse LinkedIn</h4>
                        <a href='#'>Learning</a>
                        <br/>
                        <a href='#'>jobs</a>
                        <br/>
                        <a href='#'>Salary</a>
                        <br/>
                        <a href='#'>Mobile</a>
                        <br/>
                        <a href='#'>Services</a>
                    </div>
                    <div className={style.general1}>
                        <h4>Business Solution</h4>
                        <a href='#'>Talent</a>
                        <br/>
                        <a href='#'>Marketing</a>
                        <br/>
                        <a href='#'>Sales</a>
                        <br/>
                        <a href='#'>Learning</a>
                    </div>
                    <div className={style.general1}>
                        <h4>Directories</h4>
                        <a href='#'>Member</a>
                        <br/>
                        <a href='#'>jobs</a>
                        <br/>
                        <a href='#'>Companies</a>
                        <br/>
                        <a href='#'>Salaries</a>
                        <br/>
                        <a href='#'>Featured</a>
                        <br/>
                        <a href='#'>Learning</a>
                        <br/>
                        <a href='#'>Posts</a>
                        <br/>
                        <a href='#'>Articles</a>
                        <br/>
                        <a href='#'>Schools</a>
                        <br/>
                        <a href='#'>Interview Prep</a>
                    </div>    
                </div>
            </section>
            <hr/>
            <footer>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                   <Grid item xs={2}>
                        <img alt='' style={{width:'100px'}} src={'https://www.nicepng.com/png/detail/380-3809524_linkedin-r-dark-full-logo-black-and-white.png'}/>
                        <span>Ⓒ</span><span>{new Date().getFullYear()}</span>
                    </Grid>
                    <Grid item xs={2}><a href='#'>About</a></Grid>
                    <Grid item xs={2}><a href='#'>Accessibility</a></Grid>
                    <Grid item xs={2}><a href='#'>User Agreement</a></Grid>
                    <Grid item xs={2}><a href='#'>Privacy Policy</a></Grid>
                    <Grid item xs={2}><a href='#'>Cookie Policy</a></Grid>
                    <Grid item xs={2}><a href='#'>Copyright Policy</a></Grid>
                    <Grid item xs={2}><a href='#'>Brand Policy</a></Grid>
                    <Grid item xs={2}><a href='#'>Guest Control</a></Grid>
                    <Grid item xs={2}><a href='#'>community Guidelines</a></Grid>
                    <Grid item xs={2}><a href='#'>Language</a></Grid>            
                </Grid>
            </footer>
        </div>
    )
}

export default Login
