import React from 'react'

import {
    Typography,
    Container,
    Box,
} from '@mui/material';

import HeroStyles from './styles';

const Hero = () => {

    return (
        <HeroStyles>
            <Box className="heroContainer" >
                <img className="hero" src='/assets/images/hero001.jpg' alt="hero" />

                <Container maxWidth="md">
                    <Box className="heroContent">
                        <Typography variant="h3" component="h1" align="center">Amass a record of every destination you've explored with</Typography>
                        <Typography variant="h2" component="h2" align="center">Wanderlust Travelogue</Typography>
                    </Box>
                </Container>
            </Box>
        </HeroStyles>
    )
}

export default Hero;
