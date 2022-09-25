import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';

import { theme } from 'theme';
import { store } from 'components/redux/store';
import { persistor } from './components/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div>LOADING</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
