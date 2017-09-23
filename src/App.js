import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';


class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      title: "State Welcome value",
    };
  }
  
  
  render() {
    const title = "Welcome will prop";
    const user = {
      name: "Garry",
      hobbies: ["Sports", "Music"]
    };
    return (
      
      <div className="App">
        {/* <Header title={this.state.title} /> */}
        <Header name={"Max"} age={44} user={user}>
          <p> this is a paragraph of some children text</p>
          </Header>
      </div>
    );
  }
}

export default App;
