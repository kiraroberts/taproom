import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import TapList from "./TapList";
import Error404 from "./Error404";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <div className="row">
            <Route path = "/taplist" component={TapList}/>
          </div>
          <Route component={Error404}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;