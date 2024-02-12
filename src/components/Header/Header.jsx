import classes from './Header.module.css'
import phoneIсon from '../../assets/images/icons/phone-icon.png'
import { NavHashLink as Link } from 'react-router-hash-link';
import {Button} from "../Button/Button";
import {useMediaQuery, useTheme} from "@mui/material";


export const Header = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    return (
            <header className={classes.headerWrp}>
                <div className={classes.container}>
                    <div className={classes.headerLogoWrp}>
                        <div className={classes.headerLogo}>M</div>
                        <div className={classes.headerLogoName}><span className={classes.headerLogoSpan}>K</span>oval</div>
                    </div>
                    <div className={classes.headerNavWrp}>
                        <input className={classes.menuToggle} onClick={(e) => console.log("clicked")} type="checkbox"/>
                        <label className={classes.menuBtn} htmlFor={classes.menuToggle}>
                            <span></span>
                        </label>

                        <ul className={classes.headerUlWrp}>
                            <Link className={classes.headerNavItem} to="/#main">Home</Link>
                            <Link className={classes.headerNavItem} to="/#about">About</Link>
                            <Link className={classes.headerNavItem} to="/#technologies">Resume</Link>
                            <Link className={classes.headerNavItem} to="/#portfolio">Portfolio</Link>
                            <Link className={classes.headerNavItem} to="/#contact">Contact</Link>
                        </ul>
                    </div>
                    <div className={classes.navDevider}>|</div>
                    <div className={classes.phoneWrap}>
                        <img className={classes.phoneIcon} src={phoneIсon} alt="phoneLogo"/>
                        <a className={classes.phone} href="tel:438-323-3679">+1 438 3233679</a>
                    </div>
                    {!isSmall && <Link className={classes.buttonLink} to="/#contact"><Button text={'Contact Me'}/></Link>}
                </div>
            </header>
    )
}
