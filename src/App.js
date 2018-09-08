import React, { Component } from 'react';
import PokemonList from './components/pokemon-list';
import PokemonForm from './components/pokemon-form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { number: 1 };

    this.handleNumber = this.handleNumber.bind(this);



  }

  handleNumber(x) {
    this.setState({number: x});
    console.log("viene del padre" + x);
    
  }

  render() {
    return (
      <div className="App">
        <PokemonForm handleNumber={this.handleNumber}/>
        Viene de Form {this.state.number}
        <PokemonList getNumber={parseInt(""+this.state.number)}/>  
        viene de papa {this.state.number};

       
      </div>
    );
  }
}

export default App;
