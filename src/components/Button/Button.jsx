import React from "react";
import classes from "./Button.module.css"

export const Button = (props) => {
    return <button className={classes.btn} type={props.type} id={props.id} name={props.name}>{props.text}</button>

}
