import styled, { withTheme } from "styled-components";

const HeroStyles = styled.div`
        height: 70vh;

        ${(props) => props.theme.breakpoints.down('md')} {
            height: 60vh;
        }
    
    .heroContainer {
        position: relative;
        height: 100%;
        padding: 0;
    }
    .hero {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .heroContent {
        position: absolute;
        top: 50%;
        z-index: 1;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;

        ${(props) => props.theme.breakpoints.down('md')} {
            width: 500,
        }
    }
`

export default withTheme(HeroStyles)