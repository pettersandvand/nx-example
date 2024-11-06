import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { API } from './client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const api = new API({
  BASE: 'http://localhost:5115',
}).nxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNull
// Create a client

root.render(
  <StrictMode>
    <App />
    </StrictMode>
);
