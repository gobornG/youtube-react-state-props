import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Title from './Title';


class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      title: "State Welcome value",
    };
  }
  
  
  render() {
    const title = "Welcome will prop";
    const titleTwo = "This is another title I just created";
    const user = {
      name: "Garry",
      hobbies: ["Sports", "Music"]
    };
    return (
      
      <div className="App">
        {/* <Header title={this.state.title} /> */}
        <div>
        <Header name={"Max"} age={44} user={user}>
          <p> this is a paragraph of some children text</p>
          </Header>      
        </div>
        <hr />
        <div>
          <Title title={titleTwo} />
        </div>
        <hr />
        <div>
          <Title title={"What am I doing here?"} />
        </div>
      </div>
    );
  }
}

export default App;
