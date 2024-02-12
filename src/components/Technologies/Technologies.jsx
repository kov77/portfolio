import classes from './Technologies.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Service} from "./Technology/Service";
import {FaReact} from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa";
import {SiTypescript} from "react-icons/si"
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import {SiGit} from "react-icons/si"


export const Technologies = () => {
    return <section id={"technologies"} className={classes.servicesWrp}>
        <SectionTitle title={"Technologies"} />
       <div className={classes.container}>
           <Service icon={<SiTypescript />} header={"TypeScript"} desciption={"TypeScript is a perfect solution for developing frontend and backend web applications of any size and complexity."} />
           <Service icon={<FaReact />} header={"React"} desciption={"React offers a flexible and efficient way to create dynamic web applications and speeds up development by several times."} />
            <Service icon={<FaNodeJs />} header={"NodeJs"} desciption={"Node.js is ideal for scalable server-side development with its non-blocking, event-driven architecture, perfect for projects of any size."} />
            <Service icon={<FaWordpress />} header={"Wordpress"} desciption={"WordPress offers a user-friendly content management system with a vast library of themes, making it suitable for projects of any size."} />
            <Service icon={<FaShopify />} header={"Shopify"} desciption={"Shopify is an excellent choice for building e-commerce websites, offering a comprehensive platform with a user-friendly interface."} />
            <Service icon={<SiGit />} header={"Git"} desciption={"Git is essential for projects, offering a powerful version control system that streamlines collaboration and code management for team."} />
       </div>
    </section>
}
