import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import store from './store';

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import theme from './theme/theme';


Amplify.configure(awsExports);

// function ThemeDebugger() {
//     const theme = useTheme();
//     return (
//       <pre>{JSON.stringify(theme, null, 2)}</pre>
//     );
//   }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <SCThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </SCThemeProvider>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
