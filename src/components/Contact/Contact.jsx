import classes from './Contact.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Button} from "../Button/Button";
import {BsEnvelopeFill} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaMapMarkerAlt} from "react-icons/fa"


export const Contact = () => {
    return <section id={"contact"} className={classes.ContactWrp}>
        <SectionTitle title={"Contact Me"}/>
        <div className={classes.container}>
            <div className={classes.formBlock}>
                <h3 className={classes.header}>Just say Hello</h3>
                <form className={classes.form} action="#" method={"POST"} id={"contact-form"}>
                    <div className={classes.formElem}><input type="text" id={"name"} name={"name"}
                                                             placeholder={"Your Name"} required/></div>
                    <div className={classes.formElem}><input type="text" id={"email"} name={"email"}
                                                             placeholder={"Your Email"} required/></div>
                    <div className={classes.formElem}><input type="text" id={"subject"} name={"subject"}
                                                             placeholder={"Your Subject"} required/></div>
                    <div className={classes.formElem}><textarea cols={30} rows={10} id={"msg"} name={"msg"}
                                                                placeholder={"Your Message"} required/></div>
                    <Button text={"Send Message"} type={"submit"} id={"submit"} name={"submit"}/>
                    <div className={classes.socialInfo2}>
                        <div className={classes.socialText2}>Visite my social profile and get connected</div>
                        <div className={classes.socialLinks}>
                            <a className={classes.socialLink} href="https://www.facebook.com/maksim.koval.77/">
                                <span className={classes.socialIconWrp}><BsFacebook className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Facebook</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.instagram.com/_max.koval/">
                                <span className={classes.socialIconWrp}><AiFillInstagram className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Instagram</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.linkedin.com/company/linkedin">
                                <span className={classes.socialIconWrp}><BsLinkedin className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <div className={classes.infoBlock}>
                <h3 className={classes.header}>Contact Info</h3>
                <div className={classes.contactText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla tincidunt id faucibus sed suscipit feugiat
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.info}>
                        <div className={classes.icon}><BsEnvelopeFill/></div>
                        <div className={classes.infoDetails}>
                            <h4>Email</h4>
                            <a href="#">maksym6167@gmail.com</a>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.icon}><BsFillTelephoneFill/></div>
                        <div className={classes.infoDetails}>
                            <h4>Phone</h4>
                            <span>+1 506-235-5417</span>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.icon}><FaMapMarkerAlt/></div>
                        <div className={classes.infoDetails}>
                            <h4>Address</h4>
                            <span>Here will be my office address.</span>
                        </div>
                    </div>
                    <div className={classes.socialInfo}>
                        <div className={classes.socialText}>Visite my social profile and get connected</div>
                        <div className={classes.socialLinks}>
                            <a className={classes.socialLink} href="https://www.facebook.com/maksim.koval.77/">
                                <span className={classes.socialIconWrp}><BsFacebook className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Facebook</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.instagram.com/_max.koval/">
                                <span className={classes.socialIconWrp}><AiFillInstagram className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Instagram</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.linkedin.com/company/linkedin">
                                <span className={classes.socialIconWrp}><BsLinkedin className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.privacy}>© 2022. Developed by Maksym Koval. All right reserved.</div>
    </section>
}
