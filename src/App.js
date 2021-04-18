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
    ]
  }
  

  addCourseHandler = (courseObj) => {
    let newEntry = [ ...this.state.cards ];

    newEntry.push(courseObj);
    this.setState({cards: newEntry});
  }
  render() {
    return (
      <div className="App">
        <Toolbar/>   
        <NewCourse add={this.addCourseHandler} cards = { this.state.cards }/>
       <Results data={this.state.cards} />
       {/* <footer className="footer">This is a copyright of Sasta Udemy</footer> */}
      </div>
      
    );
  }
}

export default App;
