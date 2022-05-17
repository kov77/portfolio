import classes from './MainSection.module.css'
import mainPhoto from "../../assets/images/secondPhoto2.jpg"
import {Button} from "../Button/Button";

export const MainSection = () => {
    return <div className={classes.mainSection}>
        <div className={classes.stars}>
        </div>
        <div className={classes.twinkling}></div>
        <div className={classes.clouds}>
            <div className={classes.container}>
                <div className={classes.mainSectionDescr}>
                    <h3 className={classes.hello}>Hello, I'm</h3>
                    <h1 className={classes.name}>Maksym <br/>Koval</h1>
                    <div className={classes.jobtitle}>Front-End Developer</div>
                    <Button text={'Contact Me'} />
                </div>
                <div className={classes.mainPhotoWrp}><img src={mainPhoto} alt="main-photo"/>
                    <div className={classes.mainSocial}>
                        <span><a href="#"></a><img src="" alt=""/>LinkedIn</span>
                        <span><a href="#"></a><img src="" alt=""/>Facebook</span>
                        <span><a href="#"></a><img src="" alt=""/>GitHub</span>
                    </div>
                </div>
            </div>
            <div className={classes.arrowDown}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>


    </div>
}
