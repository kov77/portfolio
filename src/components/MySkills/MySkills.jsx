import classes from './MySkills.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import { useParallax } from 'react-scroll-parallax';


export const MySkills = () => {
    const { ref } = useParallax({ speed: 8 });

    return <section id={"skills"} className={classes.mySkillsWrp}>
        <SectionTitle title={"My Skills"} />
       <div ref={ref} className={classes.container}>
           <div className={classes.textBlock}>
               <h2 className={classes.header}>Programming skills acquired during studying and developing a web application</h2>
               <div className={classes.text}>
                   I acquired most of the skills while developing a social network application.                   <br/> <br/>

                   I like to learn new technologies that allow me to solve new problems while working. I love new challenges that make me stronger.               </div>
           </div>
           <div className={classes.skillsWrp}>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>React</h3>
                       <div className={classes.progressbarPercentage}>85%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageReact}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>Redux</h3>
                       <div className={classes.progressbarPercentage}>80%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageRedax}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>TypeScript</h3>
                       <div className={classes.progressbarPercentage}>75%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageTs}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>JavaScript</h3>
                       <div className={classes.progressbarPercentage}>80%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageJs}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>HTML5</h3>
                       <div className={classes.progressbarPercentage}>75%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageHtml}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>CSS3</h3>
                       <div className={classes.progressbarPercentage}>75%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageCss}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>Git</h3>
                       <div className={classes.progressbarPercentage}>85%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageGit}></div>
                   </div>
               </div>

           </div>
       </div>
    </section>
}
