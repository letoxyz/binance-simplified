import * as React from 'react';
import {Wrapper} from './Wrapper';

import {IndexPage} from '../IndexPage';
import {InfoPage} from '../InfoPage';

const Router: React.FC = () => {
  const href = window.location.pathname;

  const isIndexPage = new RegExp('^/(ru|en)$').test(href);
  const isInfoPage = new RegExp('^/(ru|en)/my/dashboard$').test(href);

  if (isIndexPage) {
    return (
      <Wrapper>
        <IndexPage />
      </Wrapper>
    );
  }

  if (isInfoPage) {
    return (
      <Wrapper>
        <InfoPage />
      </Wrapper>
    );
  }

  return null;
};

export {Router};
