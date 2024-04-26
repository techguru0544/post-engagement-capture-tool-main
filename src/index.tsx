import '@/assets/css/tailwind.css';
import '@mantine/core/styles.layer.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { store } from './redux/store';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <MantineProvider theme={theme} withCssVariables>
          <Router />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
