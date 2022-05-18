import classes from './Portfolio.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Project} from "./Project/Project";
import portfolio1 from "../../assets/images/portfolio1.png"
import portfolio2 from "../../assets/images/portfolio2.png"
import portfolio3 from "../../assets/images/portfolio3.png"
import portfolio4 from "../../assets/images/portfolio4.png"


export const Portfolio = () => {
    return <section className={classes.portfolioWrp}>
        <SectionTitle title={"Portfolio"} />
       <div className={classes.container}>
        <Project img={portfolio1} title={'Website'} subtitle={"RanSmart"}/>
        <Project img={portfolio2} title={'Website'} subtitle={"Childhood"}/>
        <Project img={portfolio3} title={'Website'} subtitle={"Uber"}/>
        <Project img={portfolio4} title={'Website'} subtitle={"Irvas windows"}/>
        <Project img={portfolio1}/>
        <Project img={portfolio2}/>
       </div>
        <div className={classes.height100}></div>
    </section>
}
