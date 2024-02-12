import classes from './Resume.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Element} from "./Element/Element";
import expIcon from "./../../assets/images/icons/resume-icon1.png"
import edIcon from "./../../assets/images/icons/resume-icon2.png"
import {StyledAccordion} from "./StyledAccordion";
import {Stack, Typography} from "@mui/material";

export const Resume = () => {
    return <section className={classes.resumeWrp}>
        <SectionTitle title={"Resume"}/>
        <div className={classes.container}>
            <div className={classes.resumeBlock}>
                <div className={classes.headingWpr}>
                    <img className={classes.icon} src={expIcon} alt="icon"/>
                    <h2 className={classes.header}>Experience</h2>
                </div>
                <Stack className={classes.elementsWrp}>
                    <Element title={"Front End Developer"} period={"July 2023 - Present"}
                             place={"BOOTIQ, part of BiQ Group"}
                    >
                        <StyledAccordion
                            heading={"Developed a web application UpRekrea for managing employee benefits that is used by hundreds of" +
                                " companies and thousands of employees daily."}>
                            <Typography>Developed terminal management system for Monet+ used by the largest businesses and
                                financial institutions in
                                the country to manage electronic payments.</Typography>
                            <br/>
                            <Typography>Redesign and template development for O2 E-shop.</Typography>
                        </StyledAccordion>
                    </Element>
                    <Element title={"Front End Developer"} period={"February 2023 - July 2023"}
                             place={"PUXdesing, part of BiQ Group"}>
                        <StyledAccordion
                            heading={"Developed online store for a famous company Konica Minolta, with thousands of traffic daily."}>
                            <Typography>Developed an advanced CPM system for Konica Minolta, which improved managing and
                                interaction between the company, merchants and customers.</Typography>
                        </StyledAccordion>
                    </Element>
                    <Element title={"Web Developer"} period={"April 2019 - February 2023 "} place={"Upwork"}>
                        <StyledAccordion
                            heading={"Developed a platform for networking where users can form groups based on interests, communicate and share experience."}>
                            <Typography>Developed an application for learning languages. Based on my own experience, I
                                made learning more fun and interesting.</Typography>
                            <br/>
                            <Typography>Developed several websites on WordPress and Shopify platforms, increasing customer traffic for my clients by several times.
                            </Typography>
                        </StyledAccordion>
                    </Element>
                </Stack>
            </div>
            <div className={classes.resumeBlock}>
                <div className={classes.headingWpr}>
                    <img className={classes.icon} src={edIcon} alt="icon"/>
                    <h2 className={classes.header}>Education</h2>
                </div>
                <div className={classes.elementsWrp}>
                    <Element title={"Front End Developer"} period={"January 2021 - January 2022"}
                             place={"Zero To Mastery Academy"}>
                        <StyledAccordion
                            heading={"Building enterprise level React applications and deploy to production (using React 18)."}>
                            <Typography>
                                Learning the latest features in React including Hooks, Context API, Suspense, React
                                Lazy.
                            </Typography>
                            <br/>
                            <Typography> Learning Redux, Redux Thunk, Redux Saga, GraphQL, React Router,
                                Firebase.</Typography>
                            <br/>
                            <Typography> Setting up authentication and user accounts.</Typography>
                            <br/>
                            <Typography> Handling online payments with Stripe API and Testing application with Jest,
                                Enzyme.</Typography>
                        </StyledAccordion>
                    </Element>
                    <Element title={"React/Redux Developer"} period={"February 2020 - September 2020"}
                             place={"IT-INCUBATOR Bootcamp"}>
                        <StyledAccordion
                            heading={"Building multiple high-quality demo apps, including a fullstack app built with NextJS"}>
                            <Typography>
                                Learning all about React Hooks and React Components
                            </Typography>
                            <br/>
                            <Typography> Managing complex state efficiently with React's Context API & React Redux.</Typography>
                            <br/>
                            <Typography>Implementing user authentication in React apps.</Typography>
                        </StyledAccordion>
                    </Element>
                    <Element title={"Web Developer Course"} period={"October 2018 - March 2019"}
                             place={"Udemy"}>
                        <StyledAccordion
                            heading={"Using HTML and CSS to create responsive, accessible, and beautiful layouts."}>
                            <Typography>
                                Learning JavaScript variables, conditionals, loops, functions, arrays, and objects.
                            </Typography>
                            <br/>
                            <Typography> Create a blog application from scratch using Node, Express, and MongoDB.</Typography>
                            <br/>
                            <Typography>Implement user authentication.</Typography>
                        </StyledAccordion>
                    </Element>
                </div>
            </div>
        </div>
    </section>
}
