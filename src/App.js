import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewModule from './modules/pages/NewModule';
import UserModules from './modules/pages/UserModules';
import UpdateModule from './modules/pages/UpdateModule';
import Auth from './users/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Users/>
          </Route>
          <Route path="/:userId/Modules" exact>
            <UserModules/>
          </Route>
          <Route path="/Modules/new" exact>
            <NewModule  />
          </Route>
          <Route path="/Modules/:moduleId">
            <UpdateModule/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
