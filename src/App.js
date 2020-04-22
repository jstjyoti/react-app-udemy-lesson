import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: "Jyoti",
        age: "22"
      },
      {
        name: "Max",
        age: "28"
      },
      {
        name: "Stephenie",
        age: "26"
      }
    ],
    showPersons: false
  }

  clickHandler = (newname) =>{
    this.setState({persons: [
      {
        name: newname,
        age: "22"
      },
      {
        name: "Max",
        age: "28"
      },
      {
        name: "Stephenie",
        age: "27"
      }
    ]})
  }
  nameChangeHandler = (event) => {
    this.setState({persons: [
      {
        name: "Jyoti",
        age: "22"
      },
      {
        name: event.target.value,
        age: "28"
      },
      {
        name: "Stephenie",
        age: "26"
      }
    ]})
  }
  toggleCards = () => {
    
  }
  render() {
    const style = {
      backgroundColor: '#fffddd',
      font: "inherit",
      cursor: 'pointer',
      border: '2px solid #ccc',
      padding: "5px"
    }
    return (
      <div className="App">
        <h1>Hi, I'm an React app</h1>
        <button style={style}
          onClick = {this.toggleCards}>Switch Name</button>
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.nameChangeHandler} click={this.clickHandler.bind(this, "Jyoti Mishra")}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangeHandler}>The tutor</Person>
          <Person name = {this.state.persons[2].name} age={this.state.persons[2].age} change={this.nameChangeHandler}/>
        </div>
        
      </div>
    );
    // React.createElement('div', {className: 'App'}, React.createElement('h1',null, "Hi, I\'m React App"));
  }
}

export default App;
