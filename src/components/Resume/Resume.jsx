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
                    <Element title={"Fronf-End Developer"} period={"Oct 2021 - Present"} place={"Freelancer"}
                             text={"I carry out orders of varying complexity. For individuals and for business."}/>
                    <Element title={"Machine Operator"} period={"Nov 2020 - Jun 2022"} place={"Groupe Savoie, Canada"}
                             text={"Production of kitchen components on woodworking machines. Setting up equipment and accounting for products."}/>
                    <Element title={"CNC Operator"} period={"Jun 2018 - Nov 2020"} place={"Pebal, Czech Republick"}
                             text={"Production of plastic products on CNC machines. Setting up the processing program. Machine operation control."}/>
                    <Element title={"Chief Mechanical Engineer"} period={"Feb 2015 - Jun 2018"} place={"OKA, Belarus"}
                             text={"Management of the department for the repair and maintenance of woodworking equipment."}/>
                </div>
                 </div>
            <div className={classes.resumeBlock}>
                <div className={classes.headingWpr}>
                    <img className={classes.icon} src={edIcon} alt="icon"/>
                    <h2 className={classes.header}>Education</h2>
                </div>
                <div className={classes.elementsWrp}>
                    <Element title={"React Developer Bootcamp"} period={"Feb 2022 - Present"} place={"IT-INCUBATOR"}
                             text={"An in-depth study of modern React and Redux technologies. Working on a real product project."}/>
                    <Element title={"JavaScript Developer Course"} period={"May 2021 - Dec 2021"} place={"Udemy"}
                             text={"In-depth study of the programming language Java Script EC6+. Creation of a real product project"}/>
                    <Element title={"Web Deweloper Bootcamp"} period={"Jan 2021 - Jun 2021"} place={"Udemy"}
                             text={"Learning the basics for developing websites and web applications."}/>
                    <Element title={"Mechanical Engineer"} period={"Sep 2007 - Jun 2014"}
                             place={"Prydniprovska State Academy of Civil Engineering and Architecture"}
                             text={"Studied construction equipment and heavy equipment. "}/>
                </div>
            </div>
        </div>
    </section>
}
