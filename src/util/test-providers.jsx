import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import rootReducer from '../reducers'
import theme from '../theme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


// component is ui
export const Render = (ui, options = {}) => {
    const { reduxState, route } = options;
    const reduxStore = createStore(rootReducer, reduxState || {}, applyMiddleware(thunk));
    rtlRender(
        <Provider store={reduxStore}>
            <MemoryRouter initialEntries={route ? [route] : undefined}>
                <ThemeProvider theme={theme}>
                    {ui}
                </ThemeProvider>
            </MemoryRouter>
        </Provider>
    )
}

export * from '@testing-library/react';

