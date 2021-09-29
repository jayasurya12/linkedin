import React from 'react'
import style from './Widget.module.css'
import Feedicon from '../../images/feed-icon.svg'
import {ExpandLess, ExpandMore} from '@material-ui/icons'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Widget = () => {
    return (
        <div className={style.widgetContainer}>
            <section className={style.linkednews}>
                <div className={style.header}>
                    <h5>LinkedIn News</h5>
                    <img alt='' src={Feedicon}/>
                </div>
                <ul>
                    <div>
                    <li>The 25 startups to watch</li>
                    <p>Top news . 44,999 readers</p>
                    </div>
                    <li>Evergrand: Investors on edge</li>
                    <p>2d ago . 4,306 readers</p>
                    <li>Why CVs get rejected</li>
                    <p>3d ago . 75,666 readers</p>
                    <li>Your boss may soy on you ... forever</li>
                    <p>12h ago . 126,989 readers</p>
                    <li>I'm not here for 'hand work'</li>
                    <p>1d ago . 109,822 readers</p>
                </ul>
                <div className={style.showmore}>
                    <h5>Show more</h5>
                    <ExpandMore/>
                </div>
            </section>
            <section className={style.todayTopics}>
                <div className={style.header}>
                    <h5>Today's top courses</h5>
                    <img alt='' src={Feedicon}/>
                </div>
                <ol>
                    <li>Delegation from a Distance</li>
                    <p>Alisa Cohn</p>
                    <li>Customer Service Foundations</li>
                    <p>Jeff Toister</p>
                    <li>Interpersonal Communication</li>
                    <p>Dorie Clark</p>
                </ol>
                <div className={style.show}>
                    <h5>Show more on LinkedIn Learning</h5>
                    <ArrowRightAltIcon/>
                </div>
            </section>
            <div className={style.footerContainer}>
            <section className={style.footer}>
                <div className={style.first}>
                    <p>About</p>
                    <p>Accessibility</p>
                    <p>Help Center</p>
                </div>
                <div className={style.second}>
                    <div>
                    <p>Privacy & Terms</p>
                    <ExpandMore/>
                    </div>
                    <p>Ad Choices</p>
                </div>
                <div className={style.third}>
                    <p>Advertising</p>
                   <div>
                   <p>Business Services</p>
                    <ExpandMore/>
                   </div>
                </div>
                <div className={style.four}>
                    <p>Get the LinkedIn app</p>
                    <p>More</p>
                </div>
            </section>
            <section className={style.copyRight}>
                <h6>Linked</h6>
                <LinkedInIcon/>
                <p>LinkedIn Corporation &copy; {new Date().getFullYear()}</p>
            </section>
            </div>
        </div>
    )
}

export default Widget
