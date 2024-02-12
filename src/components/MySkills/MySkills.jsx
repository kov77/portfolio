import classes from './MySkills.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";

export const MySkills = () => {
    return <section id={"skills"} className={classes.mySkillsWrp}>
        <SectionTitle title={"My Skills"} />
       <div className={classes.container}>
           <div className={classes.textBlock}>
               <h2 className={classes.header}>Skills obtained through continuous learning and more than 5 years of experience.</h2>
               <div className={classes.text}>
                   Working on 14 different projects in
                   marketing, logistics, finance I gained experience in building applications using different
                   modern frontend technologies                   <br/> <br/>
                   Using my skills I can build websites and applications of different complexities and sizes.
                   <br/><br/>I can find the right solution for every customer based on budget and needs.
               </div>
           </div>
           <div className={classes.skillsWrp}>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>TypeScript</h3>
                       <div className={classes.progressbarPercentage}>90%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageTs}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>React</h3>
                       <div className={classes.progressbarPercentage}>90%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageReact}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>Redux</h3>
                       <div className={classes.progressbarPercentage}>90%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageRedux}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>NodeJs</h3>
                       <div className={classes.progressbarPercentage}>70%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageNodeJs}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>WordPress</h3>
                       <div className={classes.progressbarPercentage}>80%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageWordpress}></div>
                   </div>
               </div>
               <div className={classes.progressbar}>
                   <div className={classes.progressbarHeader}>
                       <h3 className={classes.progressbarTitle}>Shopify</h3>
                       <div className={classes.progressbarPercentage}>85%
                       </div>
                   </div>
                   <div className={classes.progressbarSt}>
                       <div className={classes.progressbarPercentageShopify}></div>
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
