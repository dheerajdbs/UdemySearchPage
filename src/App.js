import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Results from './Results';
import NewCourse from './NewCourse';

class App extends Component {
  
  state = {
    cards: [
      {name: "React", desc : "React Course", img: 'React.webp', price: 1500},
      {name: "Vue", desc : "Vue Course", img: 'Vue.png', price: 500},
      {name: "Angular", desc : "Angular Course", img: 'Angular.svg', price: 1200}
    ],
    currentText: ""
  }
  

  addCourseHandler = (courseObj) => {
    let newEntry = [ ...this.state.cards ];

    newEntry.push(courseObj);
    this.setState({cards: newEntry});
  }

  getTextFromInput = (event) => {
    const text = event.target.value;
    this.setState({currentText: text});
  }
  

  render() {
    return (
      <div className="App">
        <Toolbar changed={this.getTextFromInput}/>   
        <NewCourse add={this.addCourseHandler} cards = { this.state.cards }/>
       <Results data={this.state.cards} text={this.state.currentText}/>
       {/* <footer className="footer">This is a copyright of Sasta Udemy</footer> */}
      </div>
      
    );
  }
}

export default App;
