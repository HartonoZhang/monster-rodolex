import React, { Component } from 'react';
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component"
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monster : [],
      searchField : ''
    };
  }

    handleChange = (e) => {
      this.setState({searchField: e.target.value});
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monster: users}))
    };

  
  render(){
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
      <h1> Monster Rodolex </h1>
        <SearchBox 
          placeholder="Search Monster"
          handleChange = {this.handleChange}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
