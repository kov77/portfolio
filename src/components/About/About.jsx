import classes from './About.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Button} from "../Button/Button";
import aboutPhoto from "../../assets/images/about_photo.JPEG"
import resume from "../../assets/Frontend-developer-resume.pdf"

export const About = () => {
    return <section id={"about"} className={classes.aboutWrp}>
        <SectionTitle title={"About Me"}/>
        <div className={classes.container}>
            <div className={classes.aboutPhoto}><img src={aboutPhoto} alt="main-foto"/></div>
            <div className={classes.aboutInfoBlock}>
                <div  className={classes.aboutTextWrp}>
                    <h2 className={classes.aboutHeader}>Hi There! I'm Maksym Koval</h2>
                    <h4 className={classes.aboutSubheader}>Experienced Web Developer</h4>
                </div>
                <div className={classes.aboutDescr}>
                    dedicated to providing top-notch digital solutions. With a strong background in handling projects for both small businesses and large enterprises, I take pride in delivering quality work that aligns with diverse needs.
                    <br/>
                    <br/>
                    My expertise extends to crafting customized websites and online stores on Shopify and WordPress platforms, tailoring each project to reflect the unique identity of the business.
                    <br/>
                    <br/>
                    One of my key strengths lies in developing full-stack applications using React, allowing me to offer comprehensive solutions for various technological requirements.
                    <br/>
                    <br/>
                    I value your time and budget constraints.
                    <br/>
                    Let's work together to bring your digital vision to life!
                </div>
                <ul className={classes.aboutList}>
                    <li><span>Phone</span> : <span>+1 438-323-3679</span></li>
                    <li><span>Email</span> : <span>webdev@mkoval.ca</span></li>
                </ul>
                <a style={{"textDecoration" : "none"}} href={resume} download><Button text={'Download CV'} /></a>
            </div>
        </div>
    </section>
}
