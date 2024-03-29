import classes from './Contact.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Button} from "../Button/Button";
import {BsEnvelopeFill} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaMapMarkerAlt} from "react-icons/fa"
import emailjs from '@emailjs/browser';


export const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7994wu8', 'template_qlfyhmq', e.target, 'ACtVTwxHceZH1HY1y')
            .then(
                response =>
            {
                document.getElementById("contact-form").reset()
                document.getElementById("modal").style.display = 'flex'
                document.querySelector('body').style.overflow = "hidden"
            },
                error =>
                {console.log(error)})
    }


    const closeModal = () => {
        document.getElementById("modal").style.display = 'none'
        document.querySelector('body').style.overflow = "auto"
    }


    return <section id={"contact"} className={classes.ContactWrp}>
        <SectionTitle title={"Contact Me"}/>
        <div className={classes.container}>
            <div className={classes.formBlock}>
                <h3 className={classes.header}>Just say Hello</h3>
                <form className={classes.form} action="#" method={"POST"} id={"contact-form"} onSubmit={sendEmail}>
                    <div className={classes.formElem}><input type="text" id={"name"} name={"name"}
                                                             placeholder={"Your Name"} required/></div>
                    <div className={classes.formElem}><input type="email" id={"email"} name={"email"}
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
                <div className={classes.contactText}> Do not hesitate to contact me in any way convenient for you.
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.info}>
                        <div className={classes.icon}><BsEnvelopeFill/></div>
                        <div className={classes.infoDetails}>
                            <h4>Email</h4>
                            <a href="#">webdev@mkoval.ca</a>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.icon}><BsFillTelephoneFill/></div>
                        <div className={classes.infoDetails}>
                            <h4>Phone</h4>
                            <span>+1 438-323-3679</span>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.icon}><FaMapMarkerAlt/></div>
                        <div className={classes.infoDetails}>
                            <h4>Address</h4>
                            <span>Montreal, QC, Canada, H4P 0C5</span>
                        </div>
                    </div>
                    <div className={classes.socialInfo}>
                        <div className={classes.socialText}>Visite my social profile and get connected</div>
                        <div className={classes.socialLinks}>
                            <a className={classes.socialLink} href="https://www.linkedin.com/in/maksym-koval-561043246/">
                                <span className={classes.socialIconWrp}><BsLinkedin className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>LinkedIn</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.facebook.com/maksim.koval.77/">
                                <span className={classes.socialIconWrp}><BsFacebook className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Facebook</span>
                            </a>
                            <a className={classes.socialLink} href="https://www.instagram.com/_max.koval/">
                                <span className={classes.socialIconWrp}><AiFillInstagram className={classes.socialIcon}/></span>
                                <span className={classes.socialIconName}>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div id="modal" className={classes.modal} >
            <div className={classes.close} onClick={closeModal}>x</div>
            <div><p className={classes.modalHeader}>Thank you for your beautiful message!</p>
                <p className={classes.modalBody}>I'll contact you as soon as I read this message.</p></div>
            <Button text={"You're welcome  :)"} onClick={closeModal}/>
        </div>
        <div className={classes.privacy}>© 2024. Developed by Maksym Koval. All right reserved.</div>
    </section>
}
