import { Box } from '@mui/material';
import styled from "styled-components";

const AddPlaceStyles = styled(Box)`
   width: 100%;

   .container {
        background-color: #38a3a5;
        position: relative;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 40px;
        margin-top: -40;
    }
    .formField {
       width: 100%;
       margin-top: 20;
       margin-bottom: 20;
        & label {
           color: white;
        }

        & .fieldset {
           color: white;
           border-color: white;
        }
    }
    .submitbutton {
        background-color: #57CC99;
        color: white;
        outline: none;
        font-size: 18px;
        padding: 12px 0px;
        border: none;
        width: 100%;
        
        &:hover {
            background-color: #80ED99
        }
    }
`

export default AddPlaceStyles;
