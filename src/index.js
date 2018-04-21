import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store'
import LoginPage from './login/loginPage';

import "assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
      <Route path='/login' component={LoginPage}/>
        {indexRoutes.map((prop, key) => {
          console.log(store.getState())
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
        
      </Switch>
    </Router>
  </Provider >,
  document.getElementById("root")
);
