import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // breakpoints: {
    //   values: {
    //     xxs: 0, // small phone
    //     xs: 300, // phone
    //     sm: 600, // tablets
    //     md: 900, // small laptop
    //     lg: 1200, // desktop
    //     xl: 1536 // large screens
    //   }
    // },
    typography: {
      fontFamily: 'Lato',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      lineHeight: 1.5,
      h1: {
        fontSize: 36,
      },
      h2: {
        fontSize: 24,
      },
      h3: {
        fontSize: 20,
      },
      h4: {
        fontSize: 18,
      },
      
      h5: {
        fontSize: 16,
      },
      useNextVariants: true,
      body1: {
        fontWeight: 400,
        fontSize: 16,
      },
      body2: {
        fontWeight: 400,
        fontSize: 16,
      },

    palette: {
      // mode: 'dark',
      primary: {
        main: '#38A3A5',
      },
      secondary: {
        main: '#22577A'
      },
      error: {
        main: '#FF0000'
      }
    },
    
    }
  })

export default theme;