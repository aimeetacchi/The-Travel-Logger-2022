import React from 'react'

import {
    Container,
    Box,
} from '@mui/material';

import Typography from '@mui/material/Typography';

import HeroStyles from './styles';

const Hero = () => {

    return (
        <HeroStyles>
            <Box className="heroContainer" >
                <img className="hero" src='/assets/images/hero001.jpg' alt="hero" />

                <Container maxWidth="md">
                    <Box className="heroContent">
                        <Typography variant="h2" align="center">Amass a record of every destination you've explored with</Typography>
                        <Typography variant="h1" align="center">Wanderlust Travelogue</Typography>
                    </Box>
                </Container>
            </Box>
        </HeroStyles>
    )
}

export default Hero;
