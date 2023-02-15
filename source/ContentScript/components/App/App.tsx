import * as React from 'react';
import {IndexPage} from '../IndexPage';
import {InfoPage} from '../Info';

const App: React.FC = () => {
  const href = window.location.pathname;

  const isIndexPage = new RegExp('^/(ru|en)$').test(href);
  const isInfoPage = new RegExp('^/(ru|en)/my/dashboard$').test(href);

  if (isIndexPage) {
    return <IndexPage />;
  }

  if (isInfoPage) {
    return <InfoPage />;
  }

  return null;
};

export {App};
