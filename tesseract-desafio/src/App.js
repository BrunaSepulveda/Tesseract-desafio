import React from 'react';
import {ProfileProvider} from './context/ProfileContext'
import { Route, Switch } from 'react-router-dom';
import ProfileList from './pages/ProfileList';
import ProfileDetails from './pages/ProfileDetails'

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path="/" component={ ProfileList } />
        <Route path="/detalhes/:login" component={ ProfileDetails } />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
