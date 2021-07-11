import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from '@/App';
import configureAppStore from './store';

import './index.css';

const store = configureAppStore();

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <Switch>
                    <App />
                </Switch>
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
