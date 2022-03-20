import { Box } from '@mui/material';
import styled, { withTheme } from "styled-components";

const HeaderBox = styled(Box)`
    & header {
        background-color: #22577A;
        padding: 10px 0;
    }
    & .menuContainer {
        text-align: right;
    }
    & .verticallyAlign {
        display: flex;
        gap: 5;
        align-items: center;
    }

    & .siteLogo {
        fontSize: 2.5rem;
    }

`;

export default withTheme(HeaderBox)






