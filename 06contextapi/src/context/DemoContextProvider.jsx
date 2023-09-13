import React, { useState } from 'react';
import DemoContext from './DemoContext';

const DemoContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <DemoContext.Provider value={{ user, setUser }}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContextProvider;
