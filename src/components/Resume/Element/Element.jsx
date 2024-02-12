import classes from './Element.module.css'
import {Grid, Typography} from "@mui/material";



export const Element = (props) => {
    return <Grid className={classes.container}>
        <Typography variant={'h5'} className={classes.title}>{props.title}</Typography>
        <Typography className={classes.period}>{props.period}</Typography>
        <Typography variant={'h6'} className={classes.place}>{props.place}</Typography>
        {props.children}
    </Grid>
}
