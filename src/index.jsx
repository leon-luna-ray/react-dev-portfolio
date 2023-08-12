import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalProvider } from './store/GlobalContext';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>
);
