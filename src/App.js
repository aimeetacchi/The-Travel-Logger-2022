import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange, AuthState} from '@aws-amplify/ui-components';

import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/';

import {
  Container,
  Box,
} from '@material-ui/core/';

import './App.scss';

import Header from './components/header';
import Hero from './components/hero';

import SignInForm from './components/pages/SignInForm'
import Home from './components/homePage';
import Profile from './components/profilePage';
import Places from './components/placesPage';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  },
  palette: {
    primary: {
      main: '#38A3A5',
    },
    secondary: {
      main: '#22577A'
    }
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.8rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2.3rem',
    },
    h4: {
      fontSize: '2rem',
    },
    h5: {
      fontSize: '1.8rem',
    },
    h6: {
      fontSize: '1.4rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
   },
   body2: {
    fontWeight: 400,
    fontSize: '1rem',
  },
  }
})

const useStyles = makeStyles({
  root: {
  }
})

const App = () => {
  const [authState, setAuthState] = useState();
  const [/*user,*/, setUser] = useState();

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    
    if(authState === 'signedin') {
      navigate('/');
    }

    if (authState === undefined) {
      Auth.currentAuthenticatedUser().then(authData => {
        setAuthState(AuthState.SignedIn);
        setUser(authData);
      });
    }

    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      console.log('auth state changing');
    });
  // eslint-disable-next-line  
}, [authState]);

  const signOut = async () => {
    try {
        await Auth.signOut()
        // setLoggedIn(false)
        navigate('/signin');
    } catch (error) {
        console.log('Error Signing out', error,)
    }
  }

  return (
    <ThemeProvider theme={theme}>
   
        <Box className={classes.root}>
          <Header authState={authState} signOut={signOut}/>
          <Hero />
          <main>
          <Container maxWidth="lg">
            <Routes>
            <Route exact path="/signin" element={<SignInForm authState={authState}/>}/>
              <Route path="/" exact element={<Home/>} />
              <Route path="/profile/" element={<Profile/>} />
              <Route path="/places/" element={<Places/>} />
            </Routes>
          </Container>
          </main>
        </Box>
      
    </ThemeProvider>
  );
}

export default App;
