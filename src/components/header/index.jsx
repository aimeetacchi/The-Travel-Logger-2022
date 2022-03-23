import React, { useState } from 'react'
import { Link } from "react-router-dom";
import HeaderBox from './styles';

import {
    Typography,
    Container,
    Box,
    List,
    Grid,
    ListItem,
    AppBar,
    IconButton,
    Button,
} from '@mui/material';

import { LocalAirport, Menu, HomeOutlined, Place, AccountBoxOutlined } from '@mui/icons-material'

import { CustomDrawer } from '../../theme/styled-components';

const Header = ({ signOut, authState }) => {
    // const classes = useStyles();
    const [navDrawerState, setNavDrawState] = useState({ right: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNavDrawState({ ...navDrawerState, [anchor]: open });
    };

    return (
        <HeaderBox>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Grid container alignItems="center">
                        <Grid item xs={8}>
                            <Link to="/">
                                <Box className="verticallyAlign">
                                    <LocalAirport className="siteLogo" />
                                    <Typography variant="h5" component="h1">Travel Logger</Typography>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={4} className="menuContainer">
                            <IconButton onClick={toggleDrawer('right', true)} edge="start" className="menuButton" color="inherit" aria-label="menu">
                                <Menu />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <CustomDrawer
                anchor={'right'}
                open={navDrawerState['right']}
                onClose={toggleDrawer('right', false)}
            >
                <List className="navbar" component="nav">
                    <ListItem className="navitem" button>
                        <Link className="verticallyAlign" onClick={() => setNavDrawState({ right: false })} to="/">
                            <HomeOutlined />
                            <Typography variant="h6">Home</Typography>
                        </Link>
                    </ListItem>
                    {authState === 'signedin' ? (
                        <>
                            <ListItem className="navitem" button>
                                <Link className="verticallyAlign" onClick={() => setNavDrawState({ right: false })} to="/places/">
                                    <Place />
                                    <Typography variant="h6">Places</Typography>
                                </Link>
                            </ListItem>

                            <ListItem className="navitem" button>
                                <Link className="verticallyAlign" onClick={() => setNavDrawState({ right: false })} to="/profile/">
                                    <AccountBoxOutlined />
                                    <Typography variant="h6">Profile</Typography>
                                </Link>
                            </ListItem>


                            <ListItem onClick={signOut} className="navitem" button>
                                <Button
                                    onClick={() => setNavDrawState({ right: false })} className="sign-out-button"
                                    variant="contained"
                                    color="primary">
                                    <Typography variant="h6">Sign Out</Typography>
                                </Button>
                            </ListItem>
                        </>
                    ) : (
                        <ListItem className="navitem" button>
                            <Link onClick={() => setNavDrawState({ right: false })} className="verticallyAlign" to='/signin'>
                                <Typography variant="h6">Sign In</Typography>
                            </Link>
                        </ListItem>
                    )}
                </List>
            </CustomDrawer>
        </HeaderBox >
    )
}

export default Header;
