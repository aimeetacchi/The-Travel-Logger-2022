import { createTheme, responsiveFontSizes  } from '@mui/material/styles';

let theme = createTheme({
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
      mode: 'dark',
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
    typography: {
      fontFamily: 'Lato',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      lineHeight: 1.5,
      h1: {
        fontSize: 56,
        fontWeight: 700,
        color:'#38A3A5',
      },
      h2: {
        fontSize:48,
        fontWeight: 700,
      },
      h3: {
        fontSize: 32,
        fontWeight: 700,
      },
      h4: {
        fontSize: 24,
        fontWeight: 700,
      },
      
      h5: {
        fontSize: 18,
        fontWeight: 700,
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
    },
  })

  theme = responsiveFontSizes(theme);

export default theme;