import React from 'react'

import {
  Box,
  Typography,
} from '@mui/material';

import HomeStyles from './styles';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <HomeStyles>
      <Box className="home">
        <Typography variant="body2">
          "Wanderlust Travelogue" is your personal, easy-to-use digital travel diary. It's crafted to capture the essence of your world travels, creating a vibrant visual record right on an interactive map. Every trip you take becomes a unique entry in this delightful journal.
        </Typography>
        <br />
        <Typography variant="body2"> 
          Add personal touches to your travel tales by including photos from your destinations, along with the dates of your visits. You can also use our special feature to mark your most loved places. Whether it's the bustling city life of New York or the serene beaches of Bali, every beloved location gets its special spot in your diary.
        </Typography>
        <br/>
        <Typography variant="body2"> 
          With "Wanderlust Travelogue", all your travel memories are just a click away. It serves as a comprehensive and vivid chronicle of your adventures. Whether you wish to take a trip down memory lane or plan your next voyage, our travelogue stands as your reliable partner. Your world travels, your way, beautifully captured and always accessible.<br/><br/><Link to="/signin"><strong>Sign up now</strong></Link>
        </Typography>
        <br/>
        <Typography variant="body2">
          This app is built with React, Redux, and Material UI.
        </Typography>

      </Box>
    </HomeStyles>
  )
}

export default Home
