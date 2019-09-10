import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Login from '../src/Screens/Login';
import Signup from './Screens/Signup';
import AddTask from './Screens/Add-Task';
import CompletedTask from './Screens/Completed-Task';

class App extends Component {

  render() {
    const { isLoggedIn } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          
          <Route path="/completedTask" render={(props) => {
            return isLoggedIn ? <CompletedTask  {...props} /> : <Login  {...props} />

          }}
           />

          <Route path="/addTask" render={(props) => {
            return isLoggedIn ? <AddTask  {...props} /> : <Login  {...props} />
          }}
            />

          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />



        </Switch>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = ({ loggedIn }) => {
  const { isLoggedIn } = loggedIn;
  return { isLoggedIn }
}
export default connect(mapStateToProps)(App);