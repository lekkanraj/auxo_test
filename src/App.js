import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <Router>
        <div className=" bg-dark">        
            <Switch>        
              <Route exact path='/' component={Home} />
            </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
