import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';
import Navigation from './components/Navigation';
import { useCallback } from 'react';

function App() {
  const [hidden, setHidden] = React.useState<boolean>(true);

  const handleClick = useCallback(() => {
    setHidden(!hidden);
  }, [hidden]);

  return (
    <BrowserRouter>
      <Navigation hidden={hidden} onClick={handleClick} />
      <Router />
    </BrowserRouter>
  );
}

export default App;