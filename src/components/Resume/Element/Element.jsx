import classes from './Element.module.css'



export const Element = (props) => {
    return <div className={classes.container}>
        <h3 className={classes.title}>{props.title}</h3>
        <div className={classes.period}>{props.period}</div>
        <h4 className={classes.place}>{props.place}</h4>
        <div className={classes.text}>{props.text}</div>
    </div>
}
