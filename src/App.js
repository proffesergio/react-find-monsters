import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

// function App() {
// }


// class allows us to access the state 
class App extends Component {

  constructor() {
    super();
  
    this.state = {
      monsters: [],
      searchFiled: ''
    };

    // this.handleChange = this.handleChange.bind(this); // comment this out when using arrow function instead of class methods
  }

  // React lifecycle methods
  componentDidMount() {
    // fetch data from backend server
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  // class methods (need to bind with context in the constructor)
  // handleChange(e) {
  //   this.setState( {searchFiled: e.target.value })
  // }
  
  // method using arrow function to handle the event change
  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value })
  }

  // render method to return DOM component
  render() {

    // filtering the monster objects
    // destructuring based on synthetic events
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())  
    );
    return (
      <div className="App">
        <h1>Find Monsters</h1>
        {/* taking user input and set the state value of searchField: handle onChange events */}
        {/* <input 
          type='search' 
          placeholder='Search monsters' 
          onChange={event => {
            this.setState({ searchFiled: event.target.value })
          }}
        /> */}

          <SearchBox 
            placeholder='search monsters'
            handleChange= { e => { this.setState({ searchFiled: e.target.value })
          }}
          />

        {/* <CardList monsters={this.state.monsters}>
        
        </CardList> */}
        {/* passing filtered monsters in the card list  */}
        <CardList monsters={ filteredMonsters } />
        
      </div>
    );
  }
}

export default App;
