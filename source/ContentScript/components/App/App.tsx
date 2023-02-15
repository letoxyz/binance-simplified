import * as React from 'react';
import {useAppStore} from '../../store';
import {Router} from './Router';

const App: React.FC = () => {
  const isAppVisible = useAppStore((state) => state.isAppVisible);

  if (!isAppVisible) {
    return null;
  }

  return <Router />;
};

export {App};
