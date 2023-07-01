import { Drawer } from "@mui/material"
import styled from 'styled-components'

const CustomDrawer = styled(Drawer)`

    & .MuiDrawer-paper {
        background-color: ${props => props.theme.palette.secondary.main};
        width: 30%;

        ${(props) => props.theme.breakpoints.down('md')} {
            width: 80%;
        }
       
        & nav > div > a {
            display: flex;
            
        }

        & .sign-out-button {
            margin: 0 auto;
            max-width: 250;
        }
    } 
`

export default CustomDrawer;