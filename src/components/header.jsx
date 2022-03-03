import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Container,
    Box,
    List,
    Grid,
    ListItem,
    AppBar,
    Drawer,
    IconButton,
    Button,
} from '@material-ui/core/';

import LocalAirportIcon from '@material-ui/icons/LocalAirport';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            '& header': {
                padding: '10px 0',
            }
        },
        verticallyAlign: {
            display: 'flex',
            gap: 5,
            alignItems: 'center',
        },
        siteLogo: {
            fontSize: '2.5rem',
        },
        drawer: {
            '& .MuiDrawer-paper': {
                backgroundColor: '#22577A',
                width: '30%',
                [theme.breakpoints.down('xs')]: {
                    width: '80%',
                },
            }
        },
        menuContainer: {
            textAlign: 'right',
        },
        navbar: {
            backgroundColor: '#22577A',
            // marginTop: 20,
            marginBottom: 20,


            color: 'white',
            '& a': {
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },
        navitem: {
            width: 'auto',
        },
        button: {
            margin: '0 auto',
            maxWidth: 250,
        }
    }
})

const Header = ({ signOut, authState }) => {
    const classes = useStyles();
    const [navDrawerState, setNavDrawState] = useState({ right: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNavDrawState({ ...navDrawerState, [anchor]: open });
    };

    return (
        <Box className={classes.root}>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Grid container alignItems="center">
                        <Grid item xs={8}>
                            <Link to="/">
                                <Box className={classes.verticallyAlign}>
                                    <LocalAirportIcon className={classes.siteLogo} />
                                    <Typography variant="h5" component="h1"> Travel Logger</Typography>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={4} className={classes.menuContainer}>
                            <IconButton onClick={toggleDrawer('right', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>

            <Drawer
                anchor={'right'}
                open={navDrawerState['right']}
                className={classes.drawer}
                onClose={toggleDrawer('right', false)}
            >
                <List className={classes.navbar} component="nav">
                    <ListItem className={classes.navitem} button>
                        <Link className={classes.verticallyAlign} onClick={() => setNavDrawState({ right: false })} to="/">
                            <HomeIcon />
                            <Typography variant="h6">Home</Typography>
                        </Link>
                    </ListItem>
                    {authState === 'signedin' ? (
                        <>
                            <ListItem className={classes.navitem} button>
                                <Link className={classes.verticallyAlign} onClick={() => setNavDrawState({ right: false })} to="/places/">
                                    <PlaceIcon />
                                    <Typography variant="h6">Places</Typography>
                                </Link>
                            </ListItem>

                            <ListItem className={classes.navitem} button>
                                <Link className={classes.verticallyAlign} onClick={() => setNavDrawState({ right: false })} to="/profile/">
                                    <AccountBoxIcon />
                                    <Typography variant="h6">Profile</Typography>
                                </Link>
                            </ListItem>


                            <ListItem className={classes.navitem} button>
                                <Button className={classes.button} variant="contained" color="primary" onClick={signOut}>

                                    <Typography variant="h6">Sign Out</Typography>
                                </Button>
                            </ListItem>
                        </>
                    ) : (
                        <ListItem className={classes.navitem} button>
                            <Link className={classes.verticallyAlign} to='/signin'>

                                <Typography variant="h6">Sign In</Typography>
                            </Link>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </Box>
    )
}

export default Header;
