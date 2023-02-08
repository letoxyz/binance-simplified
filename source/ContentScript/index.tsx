import * as React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

import {App} from './components';

const domain = window.location;

const isBinance = domain.host === 'www.binance.com';
const isPermitted = isBinance;

if (isPermitted) {
  const body = document.getElementsByTagName('body')[0];
  const extensionHost = document.createElement('div');
  extensionHost.setAttribute('id', 'leto-extension');
  body.appendChild(extensionHost);

  // extensionHost.attachShadow({mode: 'open'});

  if (extensionHost) {
    ReactDOM.render(
      <div className="fixed left-0 top-0 w-full h-full">
        <App />
      </div>,
      extensionHost
    );
  }
}

export {};
