import classes from './Project.module.css'

export const Project = (props) => {
    return <div className={classes.ProjectWrp}>
        <a href={props.link} className={classes.container}>
            <div className={classes.project}><img className={classes.image} src={props.img} alt="image"/></div>
            <div className={classes.projectHover}>

                {/*<BsPlusCircleFill className={classes.icon}/>*/}
                <div className={classes.textWrp}>
                    <h5 className={classes.header}>{props.title}</h5>
                    <p className={classes.subtitle}>{props.subtitle}</p>
                </div>
            </div>
        </a>
    </div>
}

// const StyledStack = styled(Stack)({
//     backgroundImage: `url(${frame})`,
//     backgroundPosition: 'center center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '30%',
//     minHeight: '350px',
//     position: 'relative',
//     display: "flex",
//     justifyContent: 'center'
// })
// const StyledCartMedia = styled("video")({
//     width: '278px',
//     minHeight: '180px',
//     position: 'absolute',
//     top: '77px',
//     left: '28px',
//     borderRadius: '2px'
// })
// export const Project = ({path}) => {
//     return <StyledStack>
//             <StyledCartMedia
//                 src={path}
//                 loop autoPlay muted
//             />
//     </StyledStack>
// }
