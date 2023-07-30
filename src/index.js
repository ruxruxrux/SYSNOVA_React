import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Logo from './Logo';
import InputBox from './InputBox';
import Shortcut from './Shortcut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Logo/>
    <InputBox/>
    <Shortcut/>
  </React.StrictMode>
);