import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import TapList from "./TapList";
import Error404 from "./Error404";
import { v4 } from "uuid";
import NewTapForm from "./NewTapForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: {},
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }
  handleAddingNewTapToList(newTap) {
    var newTapId = v4();
    var newMasterTapList = Object.assign(
      {}, this.state.masterTapList, {
        [newTapId]: newTap
      });
    this.setState({masterTicketList: newMasterTapList});
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <div className="row">
              <Route path="/taplist" render={() => <TapList tapList={this.state.masterTapList} />} />
            </div>
            <Route path='/newtapform' render={() => <NewTapForm
              onNewTapCreation={this.handleAddingNewTapToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;