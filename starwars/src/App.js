import React, { Component } from 'react';
import './App.css';
import StarwarsList from './components/StarwarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars!</h1>

        <img src="https://starwarsblog.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg" alt="W3Schools.com">
        
        </img>

        <StarwarsList banana={this.state.starwarsChars} />
      
      </div>
    );
  }
}

export default App;
