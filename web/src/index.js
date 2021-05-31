import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
);


