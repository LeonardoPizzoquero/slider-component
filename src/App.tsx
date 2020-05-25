import React from 'react';
import GlobalStyle from './styles/global';

import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <>
      <HomePage />
      <GlobalStyle />
    </>
  );
};

export default App;
