import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CartContextProvider  from './context/CartContext';


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>

);


