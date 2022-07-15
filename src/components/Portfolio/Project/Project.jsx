import classes from './Project.module.css'
import { BsPlusCircleFill } from 'react-icons/bs'

export const Project = (props) => {
    return <div className={classes.ProjectWrp}>
        <a href={props.link} className={classes.container}>
            <div className={classes.project}><img className={classes.image} src={props.img} alt="image"/></div>
            <div className={classes.projectHover}>

                {/*<BsPlusCircleFill className={classes.icon}/>*/}
                <div className={classes.textWrp}>
                    <h5 className={classes.header}>{props.title}</h5>
                    <p className={classes.subtitle}>{props.subtitle}</p>
                </div>
            </div>
        </a>
    </div>
}
