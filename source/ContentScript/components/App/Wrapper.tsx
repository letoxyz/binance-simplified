import * as React from 'react';

const Wrapper: React.FC = ({children}) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full z-[1000]">{children}</div>
  );
};

export {Wrapper};
