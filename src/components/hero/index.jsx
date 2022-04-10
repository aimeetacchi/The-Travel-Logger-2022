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
                        <Typography variant="h3" component="h1" align="center">Keep a collection of all the places you have travelled.</Typography>
                    </Box>
                </Container>
            </Box>
        </HeroStyles>
    )
}

export default Hero;
