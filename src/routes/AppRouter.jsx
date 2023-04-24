import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { DashboardRoutes } from './DashboardRoutes';

// import { LoginScreen } from '../components/login/LoginScreen';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  
  return (
    <Router>
      <div>
        <Switch>
        {/* <PublicRoute exact path="/login" component={ LoginScreen } isAuth={user.logged} /> */}
          <Route path='/' component={ DashboardRoutes }/>
        </Switch>
      </div>
    </Router>
  
  )
}
