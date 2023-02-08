import * as React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components';

const domain = window.location;

const isBinance = domain.host === 'www.binance.com';
const isPermitted = isBinance;

if (isPermitted) {
  const body = document.getElementsByTagName('body')[0];
  const extensionHost = document.createElement('div');
  extensionHost.setAttribute('id', 'leto-extension');
  body.appendChild(extensionHost);

  extensionHost.attachShadow({mode: 'open'});

  if (extensionHost && extensionHost.shadowRoot) {
    ReactDOM.render(<App />, extensionHost.shadowRoot);
  }
}

export {};
