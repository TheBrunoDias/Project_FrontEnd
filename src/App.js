import React from 'react';

// COMPONENTS
import Routes from './routes';

// GLOBAL CONTEXT FROM REACT CONTEXT API
import GlobalContextProvider from './contexts/global';

function App() {
  return (
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  );
}
export default App;
