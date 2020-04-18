import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      person: [{
          username: 'Max',
          age: '21'
        },
        {
          username: 'John',
          age: '22'
      }],
      someText: 'This is some text'
    }
  }

  handleNameChange(event){
    this.setState({
      someText: event.target.value
    });
  }

  handleStateChange(event){
    this.setState({
      person: [{
        username: "John",
        age: '29'
      },
      {
        username: 'Max',
        age: '26'
      }]
    });
  }

  render() {
    const myStyle = {
      border: '1px solid black'
    }
    return (
      <div className="App">
        <button style={myStyle} className="block" onClick={this.handleStateChange.bind(this)}>Click Me !</button>
        <UserOutput age={this.state.person[0].age} username={this.state.person[0].username}/>
        <UserOutput age={this.state.person[1].age} username={this.state.person[1].username}/>

        <UserInput nameChange={this.handleNameChange.bind(this)}/>
        <UserOutput username={this.state.someText}/>
      </div>
    );
  }
}

export default App;
