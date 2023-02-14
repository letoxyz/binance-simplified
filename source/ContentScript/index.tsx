import * as React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

import {App} from './components';

const domain = window.location;

// Because of AdBlock we need to-do it manually
const isBinance = domain.host === 'www.binance.com';
const isPermitted = isBinance;

const body = document.getElementsByTagName('body')[0];
const html = document.getElementsByTagName('html')[0];

if (isPermitted) {
  html.style.background = '#000;';
  const extensionHost = document.createElement('div');
  extensionHost.setAttribute('id', 'leto-extension');
  body.appendChild(extensionHost);

  // extensionHost.attachShadow({mode: 'open'});

  if (extensionHost) {
    ReactDOM.render(
      <div className="fixed left-0 top-0 w-full h-full z-[1000]">
        <App />
      </div>,
      extensionHost
    );
  }
}

export {};
