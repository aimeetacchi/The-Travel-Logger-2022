import { Grid } from '@mui/material';
import styled from "styled-components";

const PlacesGridStyles = styled(Grid)`
    width: 100%;

    .container {
        width: 100%;
        margin: 20px auto;      
    }

   .place {
     margin-bottom: 15px;
   }
    .placeCountry {
        font-size: 25px;
        font-weight: bold;
    }
    .placeCity {
        font-size: 20px;
        font-weight: bold;
    }
    .placeDescription {
        padding: 10px 0;
        margin-bottom: 0;
    }
    .placeDate {

    }

   .placeImg {
       width: 100%;
       object-fit: cover;
       height: 300px;
    }
`

export default PlacesGridStyles;