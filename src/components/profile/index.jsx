import React from 'react'
import { useSelector } from 'react-redux'

import {
    Box,
    Typography,
} from '@mui/material';

const Profile = () => {
    const profileState = useSelector((state) => state.profile.data);
    const { name, location, bio } = profileState[0];
    return (
        <Box>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body2">{location}</Typography>
            <Typography variant="body2">{bio}</Typography>
        </Box>
    )
}

export default Profile
