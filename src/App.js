import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearhBox } from './components/search-box/search-box.component';

import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // Using componentDidMount() to fetch data from the URL, 
  // then convert it to json format so JavaScript can understand and use
  // then assign users list to the monsters array
 componentDidMount(){ 
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({monsters: users}));

 }

 handleChange = e => {
   this.setState({searchField: e.target.value});
 }

  render(){
    const {monsters, searchField}= this.state;
    // The above Destructuring equivalent to the following:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearhBox 
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>       
      </div>
    );
  }
}
export default App;
