import classes from './Header.module.css'
import phoneInon from '../../assets/images/icons/phone-icon.png'
import { NavHashLink as Link } from 'react-router-hash-link';

export const Header = () => {
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
                    <img className={classes.phoneIcon} src={phoneInon} alt="phoneLogo"/>
                    <a className={classes.phone} href="tel:506-235-5417">+1 506 2355417</a>
                </div>
            </div>
        </header>
)
}
