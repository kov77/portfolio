import classes from './Header.module.css'
import phoneInon from '../../assets/images/icons/phone-icon.png'
export const Header = () => {
    return <header className={classes.headerWrp}>
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
                   <li className={classes.headerNavItem}><a href="#main"></a>Home</li>
                   <li className={classes.headerNavItem}><a href="#about"></a>About</li>
                   <li className={classes.headerNavItem}><a href="#technologies"></a>Resume</li>
                   <li className={classes.headerNavItem}><a href="#portfolio"></a>Portfolio</li>
                   <li className={classes.headerNavItem}><a href="#contact"></a>Contact</li>
               </ul>
           </div>
           <div className={classes.navDevider}>|</div>
           <div className={classes.phoneWrap}>
               <img className={classes.phoneIcon} src={phoneInon} alt="phoneLogo"/>
               <a className={classes.phone} href="tel:506-235-5417">+1 506 2355417</a>
           </div>
       </div>
    </header>
}
