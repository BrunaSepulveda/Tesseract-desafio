import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { ProfileContext } from '../context/ProfileContext';

const renderWithRouter = (component, providerProps ) => {
  const history = createMemoryHistory();
  return ({
  ...render(<ProfileContext.Provider value={providerProps}>
      <Router history={history}>{component}</Router>)
      </ProfileContext.Provider>),history,
})
}

export default renderWithRouter;