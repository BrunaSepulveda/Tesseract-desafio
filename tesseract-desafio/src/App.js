import React from 'react';
import { ProfileProvider } from './context/ProfileContext';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/detalhes/:login" component={ ProfileDetails } />
        <Route component={ NotFound } />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
