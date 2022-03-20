import { Drawer } from "@mui/material"
import styled, { withTheme } from 'styled-components'

const CustomDrawer = styled(Drawer)`

    & .MuiDrawer-paper {
        background-color: #22577A;
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

export default withTheme(CustomDrawer);