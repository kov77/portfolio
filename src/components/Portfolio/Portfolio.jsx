import classes from './Portfolio.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Project} from "./Project/Project";
import portfolio1 from "../../assets/images/portfolio1.png"
import portfolio2 from "../../assets/images/portfolio2.png"
import portfolio3 from "../../assets/images/portfolio3.png"
import portfolio4 from "../../assets/images/portfolio4.png"
import portfolio5 from "../../assets/images/portfolio5.png"
import portfolio6 from "../../assets/images/portfolio6.png"

export const Portfolio = () => {

    return <section id="portfolio" className={classes.portfolioWrp}>
        <SectionTitle title={"Portfolio"} />
       <div className={classes.container}>
        <Project img={portfolio1} title={'WP Plugin'} subtitle={"Childhood"} link={'https://github.com/kov77/gifts_wp'}/>
        <Project img={portfolio2} title={'Website'} subtitle={"Uber"} link={'https://github.com/kov77/Uber'}/>
        <Project img={portfolio3} title={'Website'} subtitle={"Irvas windows"} link={'https://github.com/kov77/IRVAS-windows'}/>
        <Project img={portfolio4} title={'Website'} subtitle={"RanSmart"} link={'https://github.com/kov77/Pulse'}/>
        <Project img={portfolio5} title={'App'} subtitle={"Social-Net"} link={'https://github.com/kov77/social_ts'}/>
        <Project img={portfolio6} title={'App'} subtitle={"Todo List"} link={'https://github.com/kov77/IT-INCUBATOR_Todo-list'}/>
       </div>
    </section>
}
