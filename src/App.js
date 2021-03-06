import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import Footer from "./component/layout/Footer";

import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Dashboard from "./component/dashboard/Dashboard";
import CreateProfile from "./component/creat-profile/CreateProfile";

import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Route excat path="/" component={Dashboard} />
                <div className={"container"}>
                    <Switch>
                        <Route excay path={"/create-profile"} component={CreateProfile}/>
                    </Switch>
                </div>
              {/*<Route exact path="/" component={Landing} />*/}
              {/*<div className={"container"}>*/}
              {/*    <Route exact path="/register" component={Register} />*/}
              {/*    <Route exact path="/login" component={Login} />*/}
              {/*</div>*/}
              <Footer />

          </div>
      </Router>

  );
}

export default App;
