import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Header from './components/Header';
// import Profile from './Profile';
//one more route for when/if profile page is made:
/* <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } /> */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    console.log('component did mount!');
    this.getUser();
  }

  getUser = () => {
    console.log('get user');
    var token = localStorage.getItem('mernToken');
    if(token){
      console.log('token found in LS', token);
      // There is a token in localStorage. Try to validate it!
      axios.post('/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found');
      localStorage.removeItem('mernToken');
      this.setState({
        user: null
      });
    }
  }

  render() {
    return (
      <div className="VineCellars">
        <Header/>
        <h1>Welcome to Vine Cellars</h1>
        <Switch>
          <div className="container">
            <Route exact path="/users" component={Home} />
            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
          
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
