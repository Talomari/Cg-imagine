import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
// import ResetPassword from './Screens/ResetPassword';
import Login from '../src/Screens/Login';
import Signup from './Screens/Signup';
// import SignUp from '../src/Screens/SignUp';
// import UpdatePassword from './Screens/UpdatePassword';
// import Home from './Screens/Home'
// import Details from './Screens/Details';
// import OrderHistory from './Screens/OrderHistory';


class App extends Component {

  render() {
    const { isLoggedIn } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path='/order/history/:id' render={(prps) => {
            return (
              isLoggedIn ? <OrderHistory {...prps} /> : <Home {...prps} />

            )
          }} />
          <Route path="/updatepassword" render={(props) => {
            return isLoggedIn ? <UpdatePassword  {...props} /> : <Login  {...props} />

          }}
          />

          <Route path='/details/:id' render={(props) => {
            return (
              <Details {...props} />
            )
          }} />
          <Route path='/reset/:token/:id' render={(props) => {
            return (<ResetPassword {...props} />)
          }} />
          <Route path="/signup" render={(props) => {
            return <div>

              <SignUp  {...props} />
            </div>
          }}
          />



          <Route path="/" component={Home} />
           */}
               <Route path="/signup" component={Signup}/>
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