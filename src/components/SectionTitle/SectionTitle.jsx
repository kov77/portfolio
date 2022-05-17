import classes from './SectionTitle.module.css'

export const SectionTitle = (props) => {
    return  <div className={classes.container}>
        <div className={classes.sectionTitleWrp}>
            <h4 className={classes.sectionTitle}>{props.title}</h4>
            <h2 className={classes.sectionSubTitle}>{props.title}</h2>
        </div>
    </div>
}

