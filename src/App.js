import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange, AuthState} from '@aws-amplify/ui-components';

import '@fontsource/roboto';
import { Box, Container } from '@mui/material';

import './App.scss';

import Header from './components/header';
import Hero from './components/hero';

import Home from './components/pages/homePage';
import Places from './components/pages/placesPage';
import Profile from './components/pages/profilePage';
import SignInForm from './components/pages/signInForm'

import Error from './components/pages/Error'

const App = () => {
  const [authState, setAuthState] = useState();
  const [/*user,*/, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    
    if (authState === undefined) {
      Auth.currentAuthenticatedUser().then(authData => {
        setAuthState(AuthState.SignedIn);
        setUser(authData);
      });
    } else if (authState === 'signedin') {
      navigate('/places');
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
      <Box /*className={classes.root}*/>
        <Header authState={authState} signOut={signOut}/>
        <Hero />
        <main>
        <Container maxWidth="lg">
          <Routes>
          <Route exact path="/signin" element={<SignInForm authState={authState}/>}/>
            <Route path="/" exact element={<Home/>} />
              <Route path="/profile/" element={<Profile/>} />
              <Route path="/places/" element={<Places/>} />
              <Route path="*" element={<Error/>} />
          </Routes>
        </Container>
        </main>
      </Box>
  );
}

export default App;
