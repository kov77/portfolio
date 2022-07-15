import classes from './Resume.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Element} from "./Element/Element";
import expIcon from "./../../assets/images/icons/resume-icon1.png"
import edIcon from "./../../assets/images/icons/resume-icon2.png"


export const Resume = () => {
    return <section className={classes.resumeWrp}>
        <SectionTitle title={"Resume"}/>
        <div className={classes.container}>
            <div className={classes.resumeBlock}>
                <div className={classes.headingWpr}>
                    <img className={classes.icon} src={expIcon} alt="icon"/>
                    <h2 className={classes.header}>Expirience</h2>
                </div>
                <div className={classes.elementsWrp}>
                    <Element title={"Front-End Developer"} period={"April 2021 - Present"} place={"Freelance"}
                             text={"I am creating an application from scratch that can be used as a social network" +
                                 " or can be adapted to a forum. The application is developed on React + Redux. " +
                                 "Development is based on functional components, React Hooks and other modern tools. " +
                                 "For requests to the server, the Axios library is used. The application is currently under development " +
                                 "and is constantly being updated."}/>
                    <Element title={"Front-End Developer"} period={"October 2021 - October 2021"} place={"Childhood"}
                             text={"Created a plugin for WordPress from a designer layout. " +
                                 "Installed the plugin and setting up a personal account. " +
                                 "Stack: HTML, CSS, JavaScript, PHP"}/>
                    <Element title={"Front-End Developer"} period={"Jun 2021 - Jun 2021"} place={"UBER Partners"}
                             text={"Built a landing page from scratch. An advertising page for a local transport company. Stack: HTML, CSS, JavaScript"}/>
                    <Element title={"Front-End Developer"} period={"Jun 2021 - Jun 2021"} place={"IRWAS windows"}
                             text={"Created of website functionality using JavaScript."}/>
                    <Element title={"Front-End Developer"} period={"April 2021 - April 2021"} place={"RunSmart"}
                             text={"Built a landing page from scratch. Stack: HTML, CSS, JavaScript, Slick Slider, Mailer"}/>
                </div>
                 </div>
            <div className={classes.resumeBlock}>
                <div className={classes.headingWpr}>
                    <img className={classes.icon} src={edIcon} alt="icon"/>
                    <h2 className={classes.header}>Education</h2>
                </div>
                <div className={classes.elementsWrp}>
                    <Element title={"Fronf-End Developer Bootcamp"} period={"Feb 2022 - Present"} place={"IT-INCUBATOR"}
                             text={"An in-depth study of modern React and Redux technologies. Working on a real product project."}/>
                    <Element title={"JavaScript Developer Course"} period={"May 2021 - Dec 2021"} place={"Udemy"}
                             text={"In-depth study of the programming language Java Script EC6+. Creation of a real product project"}/>
                    <Element title={"Web Developer Bootcamp"} period={"Jan 2021 - Jun 2021"} place={"Udemy"}
                             text={"Learning the basics for developing websites and web applications."}/>
                    <Element title={"Mechanical Engineer"} period={"Sep 2007 - Jun 2014"}
                             place={"Prydniprovska State Academy of Civil Engineering and Architecture"}
                             text={"Studied construction equipment and heavy equipment. "}/>
                </div>
            </div>
        </div>
    </section>
}
