import { Box } from '@mui/material';
import styled, { withTheme } from "styled-components";

const SearchStyles = styled(Box)`
    width: 100%;
    background: #397eac;
    padding: 20;
    
    .container {
        width: 400;
        padding: 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justifyContent: center;
    }
    
    .formField {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;

        & label {
            color: white
        }
        
        & .fieldset {
            color: white;
            border-color: white;
        }
    }
`

export default withTheme(SearchStyles)