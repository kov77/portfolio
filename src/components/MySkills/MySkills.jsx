import classes from './MySkills.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";


export const MySkills = () => {
    return <section id={"skills"} className={classes.mySkillsWrp}>
        <div className={classes.height100}></div>
        <SectionTitle title={"My Skills"} />
       <div className={classes.container}>
           <div className={classes.textBlock}>
               <h2 className={classes.header}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
               <div className={classes.text}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorum natus nulla quo rem.
                   <br/>
                   <br/>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate eum rerum tenetur. Accusamus adipisci dolorem minus ratione repellendus sunt.
               </div>
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
        <div className={classes.height100}></div>
    </section>
}
