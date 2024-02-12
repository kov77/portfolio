import classes from './Portfolio.module.css'
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Project} from "./Project/Project";
import {Grid, Typography} from "@mui/material";
import o2 from "../../assets/images/o2.png"
import upRekrea from "../../assets/images/upRekrea.png"
import konica from "../../assets/images/konica.png"



export const Portfolio = () => {

    return <section id="portfolio" className={classes.portfolioWrp}>
        <SectionTitle title={"Portfolio"}/>
        <Typography sx={{padding: '0 20px', textAlign: ' center'}} variant={'h5'}>Take a look at the last few projects I've worked on</Typography>
        <Grid className={classes.container}>
            <Project img={o2} title={'O2-Eshop'} subtitle={"Online store of cell phones and accessories"} link={'https://www.o2.cz/telefony-a-zarizeni/'}/>
            <Project img={upRekrea} title={'UpRekrea'} subtitle={"Web application for managing employee benefits"} link={'https://rekrea.sk'}/>
            <Project img={konica} title={'Konica Minolta'} subtitle={"Online store for printers and accessories"} link={'https://www.konicaminolta.eu/eu-en'}/>
        </Grid>
    </section>
}
