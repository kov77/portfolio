import {Accordion, AccordionDetails, AccordionSummary, Stack, styled, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const StyledContainer = styled(Stack)({
    '.MuiPaper-root': {
        backgroundColor: "rgba(18,27,44,0.7)",
        color: '#a9adb8',
    },
    'svg': {
        color: '#fec544',
        height: ' 30px',
        width: ' 30px',
    },
    'svg:hover': {
        backgroundColor: 'rgba(169,173,184,0.6)',
        borderRadius: '50%',
    },
    marginBottom: '1rem'

})

export function StyledAccordion(props) {
    const {heading, children} = props
    return <StyledContainer>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {heading}
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    </StyledContainer>;
}
