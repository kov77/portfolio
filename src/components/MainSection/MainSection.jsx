import classes from './MainSection.module.css'
import mainPhoto from "../../assets/images/secondPhoto2.jpg"
import {Button} from "../Button/Button";
import {BsFacebook, BsLinkedin} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import { NavHashLink as Link } from 'react-router-hash-link';


export const MainSection = () => {
    return <section id={"main"} className={classes.mainSection}>
        <div className={classes.stars}>
        </div>
        <div className={classes.twinkling}></div>
        <div className={classes.clouds}>
            <div className={classes.container}>
                <div className={classes.mainSectionDescr}>
                    <h3 className={classes.hello}>Hello, I'm</h3>
                    <h1 className={classes.name}>Maksym <br/>Koval</h1>
                    <div className={classes.jobtitle}>Front-End Developer</div>
                    <Link style={{"textDecoration": "none"}} to="/#contact"><Button text={'Contact Me'} /></Link>
                    <div className={classes.socialInfo2}>
                        <div className={classes.socialLinks2}>
                            <a className={classes.socialLink2} href="https://www.facebook.com/maksim.koval.77/">
                                <span className={classes.socialIconWrp2}><BsFacebook className={classes.socialIcon2}/></span>
                            </a>
                            <a className={classes.socialLink2} href="https://www.instagram.com/_max.koval/">
                                <span className={classes.socialIconWrp2}><AiFillInstagram className={classes.socialIcon2}/></span>
                            </a>
                            <a className={classes.socialLink2} href="https://www.linkedin.com/company/linkedin">
                                <span className={classes.socialIconWrp2}><BsLinkedin className={classes.socialIcon2}/></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.mainPhotoWrp}><img src={mainPhoto} alt="main-photo"/>
                    <div className={classes.mainSocial}>
                        <div className={classes.socialLinks}>
                            <a className={classes.socialLink} target={"_blank"} href="https://www.facebook.com/maksim.koval.77/">
                                <span className={classes.socialIconWrp}><BsFacebook className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Facebook</span>
                            </a>
                            <a className={classes.socialLink} target={"_blank"} href="https://www.instagram.com/_max.koval/">
                                <span className={classes.socialIconWrp}><AiFillInstagram className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Instagram</span>
                            </a>
                            <a className={classes.socialLink} target={"_blank"} href="https://www.linkedin.com/company/linkedin">
                                <span className={classes.socialIconWrp}><BsLinkedin className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>LinkedIn</span>
                            </a>
                        </div>
                        <h2 className={classes.socialSubtitle}>Social</h2>
                    </div>
                </div>
            </div>

            <div className={classes.arrowDown}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>


    </section>
}
