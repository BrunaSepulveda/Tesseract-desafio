import React from 'react';
import {ProfileProvider} from './context/ProfileContext'
import { Route, Switch } from 'react-router-dom';
import ProfileList from './pages/ProfileList'

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path="/" component={ ProfileList } />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
