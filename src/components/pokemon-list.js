import React, { Component } from 'react';
import '../css/Pokemon-list.css';
import PropTypes from 'prop-types';

class PokemonList extends Component {



    constructor(props){
        super(props);

        this.state = { name: 'Juan', pokemon: '', weight: 0};

        //console.log("entro a pokemon list" + this.props.getNumber);

        this.loadPokemonData = this.loadPokemonData.bind(this);
        




    }

    render() {
        return (
            <div className="pokemon">
                Hello World!! {this.state.name}
              <br/>
              Pokemon name: {this.state.pokemon}
              <br />
              Pokemon weight: {this.state.weight}
             
                
            </div>
        );
    }

    loadPokemonData() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.getNumber}/`)
            .then(result => result.json())
            .then(data => this.setState({ pokemon: data.name, weight: data.weight }))

    }


    componentDidMount() {
       this.loadPokemonData();
        
    }

   // static getDerivedStateFromProps(nextProps, prevState) {
   //     if (nextProps.getNumber !== prevState.pokNum) {
   //         return ({ pokNum: nextProps.getNumber }) // <- this is setState equivalent
   //     }
   //}

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.getNumber !== this.props.getNumber) {
            this.loadPokemonData();
        }
    }
}

PokemonList.propTypes = {
    getNumber: PropTypes.number
};



export default PokemonList;
