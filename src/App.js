import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import auth from "./services/auth";
import Footer from "./components/Footer";
import Login from "./components/authUI/Login";
import Signup from "./components/authUI/Signup";
import Account from "./components/account/Account";
import Tour from "./components/tourDetails/Tour";
import Overview from "./components/overview/Overview";
import Home from "./components/home/Home";
import ErrorUI from "./components/ErrorUI";
import ProtectedRoute from "./components/protectedRoute";
import { isLogged } from "./services/isLogged";
import ForgotPassword from "./components/authUI/forgotPassword";
import ResetPassword from "./components/authUI/ResetPassword";
import MyBookings from "./components/myBookings/MyBookings";
import SmallDevices from "./components/smallDevices";
class App extends Component {
  state = {
    isLogged: false
  };

  async componentDidMount() {
    if (auth.getTheTokenFromStorage()) {
      const response = await isLogged();
      if (response && response.data && response.data.isLogged) {
        this.setState({ ...this.state, isLogged: true });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Switch>
            <ProtectedRoute
              isLogged={this.state.isLogged}
              path="/overview"
              component={Overview}
            ></ProtectedRoute>
            <ProtectedRoute
              isLogged={this.state.isLogged}
              path="/my-bookings"
              component={MyBookings}
            ></ProtectedRoute>
            <ProtectedRoute
              isLogged={this.state.isLogged}
              path="/account"
              component={Account}
            ></ProtectedRoute>
            <ProtectedRoute
              isLogged={this.state.isLogged}
              path="/tour/:id"
              component={Tour}
            ></ProtectedRoute>
            <Route
              path="/login"
              render={props => (
                <Login {...props} isLogged={this.state.isLogged}></Login>
              )}
            ></Route>
            <Route
              path="/ForgotPassword"
              render={props => (
                <ForgotPassword
                  {...props}
                  isLogged={this.state.isLogged}
                ></ForgotPassword>
              )}
            ></Route>
            <Route
              path="/resetPassword/:token"
              render={props => (
                <ResetPassword
                  {...props}
                  isLogged={this.state.isLogged}
                ></ResetPassword>
              )}
            ></Route>
            <Route
              path="/signup"
              render={props => (
                <Signup {...props} isLogged={this.state.isLogged}></Signup>
              )}
            ></Route>
            <Route path="/error" component={ErrorUI}></Route>
            <Route path="/" component={Home}></Route>
            <Redirect to="/error"></Redirect>
          </Switch>
        </div>
        <SmallDevices></SmallDevices>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
