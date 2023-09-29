import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './stylesheets/GlobalStyles';
import { Provider } from 'react-redux';
import { globalStore, persistor } from 'redux/globalStore';
import { PersistGate } from 'redux-persist/integration/react';

const root = document.getElementById('root') as HTMLDivElement;
ReactDOM.createRoot(root).render(
    <Provider store={globalStore}>
        <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter basename="/wallet-web">
                <App></App>
            </BrowserRouter>
        </PersistGate>
    </Provider>

);
