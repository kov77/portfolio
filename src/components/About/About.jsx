import classes from './About.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Button} from "../Button/Button";
import secondPhoto from "../../assets/images/main_photo4.jpg"

export const About = () => {
    return <section id={"about"} className={classes.aboutWrp}>
        <SectionTitle title={"About Me"}/>
        <div className={classes.container}>
            <div className={classes.aboutPhoto}><img src={secondPhoto} alt="second-foto"/></div>
            <div className={classes.aboutInfoBlock}>
                <div className={classes.aboutTextWrp}>
                    <h2 className={classes.aboutHeader}>Hi There! I'm Maksym Koval</h2>
                    <h4 className={classes.aboutSubheader}>Front-End Developer</h4>
                </div>
                <div className={classes.aboutDescr}>
                    Web developer with a passion for web application development. Experienced in the development, support and maintenance of web applications. Results oriented team player. Constantly learning and improving my skills in writing clean, readable and efficient code using SOLID and DRY principles.                </div>
                <ul className={classes.aboutList}>
                    <li><span>Birthday</span> : <span>October 24, 1990</span></li>
                    <li><span>Phone</span> : <span>+1 506-235-5417</span></li>
                    <li><span>Email</span> : <span>maksym6167@gmail.com</span></li>
                    {/*<li><span>From</span> : <span>2661 Hich meadow lane bear creek</span></li>*/}
                    <li><span>Language</span> : <span>English, Czech, Ukranian</span></li>
                    <li><span>Freelance</span> : <span>Available</span></li>
                </ul>
                <Button text={'Download CV'} />
            </div>
        </div>
    </section>
}
