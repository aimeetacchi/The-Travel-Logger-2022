import { Box } from '@mui/material';
import styled from "styled-components";
import { withTheme } from 'styled-components';

const ProfilePageStyles = styled(Box)`
    width: 100%;
    
    .container {
        width: 400;
        padding: 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .formField {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;

        & label {
            color: white;
        }
        & .fieldset {
            color: white;
            border-color: white;
            }
        }

    .submitbutton {
        background-color: rebeccaPurple;
        color: white;
        outline: none;
        fontSize: 18px;
        padding: 12px 0px;
        border: none;
            &:hover {
                background-color: purple;
            }
        }
`

export default withTheme(ProfilePageStyles);