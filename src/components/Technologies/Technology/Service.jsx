import classes from './Service.module.css'

export const Service = (props) => {
    return <div className={classes.serviceWrp}>
        <div className={classes.serviceIcon}>{props.icon}</div>
        <h2 className={classes.serviceHeader}>{props.header}</h2>
        <p className={classes.serviceDescr}>{props.desciption}</p>
    </div>
}
