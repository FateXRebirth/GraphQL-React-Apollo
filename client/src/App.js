import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Launches from './component/Launches';
import Launch from './component/Launch';
import logo from './spacex.jpg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto'}} />
            <Route exact path="/" component={Launches}></Route>
            <Route exact path="/launch/:flight_number" component={Launch}></Route>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
