import SigninSignup from "./Screens/SigninSignup/SigninSignupScreen";
import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminRouter from './Router/AdminRouter/AdminRouter';
import PageUserScreen from './Screens/UserScreen/PageUserScreen/PageUserScreen';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signin-signup" exact>
          <SigninSignup />
        </Route>
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/">
          <PageUserScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
