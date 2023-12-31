import React from 'react';
import ReactDOM from 'react-dom/client';
import { LiquidContextProvider, ModalContextProvider } from '@dynamic-framework/ui-react';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui-react.css';

import ModalCancelFid from './components/ModalCancelFid';

import './styles/base.scss';
import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('historial') as Element);
root.render(
  <React.StrictMode>
    <LiquidContextProvider>
      <ModalContextProvider
        portalName="modalPortal"
        availableModals={{
          modal: ModalCancelFid
        }}
      >
        <App />
    </ModalContextProvider>
    </LiquidContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
