import classes from './MainSection.module.css'
import mainPhoto from "../../assets/images/secondPhoto2.jpg"
import {Button} from "../Button/Button";
import {BsFacebook, BsLinkedin} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

export const MainSection = () => {
    return <div className={classes.mainSection}>
        <div className={classes.stars}>
        </div>
        <div className={classes.twinkling}></div>
        <div className={classes.clouds}>
            <div className={classes.container}>
                <div className={classes.mainSectionDescr}>
                    <h3 className={classes.hello}>Hello, I'm</h3>
                    <h1 className={classes.name}>Maksym <br/>Koval</h1>
                    <div className={classes.jobtitle}>Front-End Developer</div>
                    <Button text={'Contact Me'} />
                </div>
                <div className={classes.mainPhotoWrp}><img src={mainPhoto} alt="main-photo"/>
                    <div className={classes.mainSocial}>
                        <div className={classes.socialLinks}>
                            <a className={classes.socialLink} href="https://www.facebook.com/maksim.koval.77/">
                                <span className={classes.socialIconWrp}><BsFacebook className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Facebook</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.instagram.com/_max.koval/">
                                <span className={classes.socialIconWrp}><AiFillInstagram className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Instagram</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.linkedin.com/company/linkedin">
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


    </div>
}
