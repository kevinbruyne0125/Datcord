import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from "./greeting/landing";
import WhyDatcord from "./funstuff/whydatcord";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/whydatcord" component={WhyDatcord}/>
      <Route exact path="/" component={LandingPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      {/* <ProtectedRoute path="/channels/" component={} /> */}
    </Switch>
  </div>
);

export default App;