import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../../../graphql/queries'
import { createUser } from '../../../graphql/mutations'
import { getProfile, failedGetProfile, completeGetProfile, createProfile, failedCreateProfile, createProfileComplete } from '../../../actions/profile'
import { useDispatch, useSelector } from 'react-redux'

import Profile from '../../profile'

import {
    Box,
    TextField,
    Typography,
} from '@mui/material';

import ProfilePageStyles from './styles'

const ProfilePage = () => {
    const profileState = useSelector((state) => state.profile.data);

    const [formState, setFormState] = useState({
        name: '',
        location: '',
        bio: '',
    })

    const dispatch = useDispatch();

    // Setting input of form fields
    const setInput = (key, value) => {
        setFormState({ ...formState, [key]: value })
    }


    // GETTING PROFILE INFO FIRST RENDER
    const fetchProfileInfo = async () => {
        try {
            const ProfileData = await API.graphql(graphqlOperation(listUsers))

            const profile = ProfileData.data.listUsers.items
            // Dispatch action - getProfile passing the profile array
            dispatch(getProfile(profile))
            dispatch(completeGetProfile())
        } catch (err) {
            dispatch(failedGetProfile(err))
            console.log('error fetching profile...')
        }
    }

    //  CREATING PROFILE DATA ---
    const createUserProfile = async (e) => {
        e.preventDefault();
        console.log('this is running! no errors')

        try {
            // === Uses the Amplify API category to call the AppSync GraphQL API with the createPlaces mutation. A difference between the listPlaces query and the createPlaces mutation is that createPlaces accepts an argument containing the variables needed for the mutation.
            // Add place to database by calling API
            const placeData = await API.graphql(graphqlOperation(createUser, { input: formState }))

            // RUN ADD ACTION === PASSING THE RETURNED DATA ADDED TO API
            dispatch(createProfile(placeData));
            // RUN COMPLETE ACTION
            dispatch(createProfileComplete());
        } catch (err) {
            console.log('error creating profile:', err)
            // RUN FAIL ACTION ----
            dispatch(failedCreateProfile(err));
        }

    }


    useEffect(() => {
        fetchProfileInfo()
        // eslint-disable-next-line
    }, [])

    return (
        <ProfilePageStyles>
            <Box m={5} align='center'>
                {!profileState.length < 1 ? (<Profile />) : <Typography variant="body2">You have not set up your profile yet. Fill out form below</Typography>}
            </Box>
            {profileState.length < 1 &&
                <Box m={5}>
                    <form className="container" onSubmit={createUserProfile}>
                        <TextField
                            className="formField"
                            label="Add Name"
                            variant="outlined"
                            color="primary"
                            onChange={e => setInput('name', e.target.value)}
                            value={formState.name}
                            placeholder="Add Name"
                        // error={countryErr}
                        />
                        <TextField
                            className="formField"
                            label="Add Location"
                            variant="outlined"
                            color="primary"
                            onChange={e => setInput('location', e.target.value)}
                            value={formState.location}
                            placeholder="Add Location"
                        // error={cityErr}
                        />

                        <TextField
                            className="formField"
                            label="Add Bio"
                            variant="outlined"
                            color="primary"
                            onChange={e => setInput('bio', e.target.value)}
                            value={formState.bio}
                            placeholder="Add a short Bio about yourself"
                            multiline
                            rows={4}
                        // error={descriptionErr}
                        />

                        <input type="submit" className="submitbutton" value="Create Profile" />
                    </form>
                </Box>
            }
        </ProfilePageStyles>
    )
}

export default ProfilePage
