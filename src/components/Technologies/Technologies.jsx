import classes from './Technologies.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Service} from "./Technology/Service";
import {FaReact} from "react-icons/fa"
import {SiRedux} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiGit} from "react-icons/si"

export const Technologies = () => {
    return <section id={"technologies"} className={classes.servicesWrp}>
        <SectionTitle title={"Technologies"} />
       <div className={classes.container}>
            <Service icon={<FaReact />} header={"React"} desciption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt, eaque iste labore"} />
            <Service icon={<SiRedux />} header={"Redux"} desciption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt, eaque iste labore"} />
            <Service icon={<SiTypescript />} header={"TypeScript"} desciption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt, eaque iste labore"} />
            <Service icon={<SiHtml5 />} header={"HTML"} desciption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt, eaque iste labore"} />
            <Service icon={<SiCss3 />} header={"CSS"} desciption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt, eaque iste labore"} />
            <Service icon={<SiGit />} header={"Git"} desciption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt, eaque iste labore"} />
       </div>
    </section>
}
