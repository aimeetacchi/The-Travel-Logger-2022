import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import store from './store';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import theme from './theme';

Amplify.configure(awsExports);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
