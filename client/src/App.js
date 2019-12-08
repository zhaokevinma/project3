// ------ Dependencies
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WorklistPage from "./pages/Worklist";
import NoMatch from "./pages/NoMatch";
import AUTH from './utils/AUTH';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: null
    };
  }

  componentDidMount() {
		AUTH.getUser().then(response => {
			// console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

  logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			// console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
  }
  
  login = (username, password) => {
		AUTH.login(username, password).then(response => {
      // console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
  }
  
  render() {
		return (
			<div className="App">
        { this.state.loggedIn && (
          <div className="viewport">
            <Nav user={this.state.user} logout={this.logout}/>
              <div className="main-view">
                <Switch>
                  <Route exact path="/" component={() => <WorklistPage user={this.state.user}/>} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            <Footer />
          </div>
        )}
        { !this.state.loggedIn && (
          <div className="auth-wrapper" style={{paddingTop:40}}>
            <Route exact path="/" component={() => <LoginForm login={this.login}/>} />
            <Route exact path="/signup" component={SignupForm} />
          </div>
        )}
			</div>
		)
  }
  
};

// ------ Export
export default App;
