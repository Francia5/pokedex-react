import React, { Component } from 'react';
import '../css/Pokemon-list.css';
import PropTypes from 'prop-types';

class PokemonForm extends Component {



    constructor(props) {
        super(props);

        this.state = {number: 0};
        this.submitHandler = this.submitHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);

    }


    submitHandler(e) {
        e.preventDefault();
        console.log(this.state.number);
        this.props.handleNumber(this.state.number);
        
    }

    inputHandler(e) {
        e.preventDefault();

        this.setState({number: e.target.value});
    


    }



    render() {
        return (
            <div className="pokemon">
                <form action="">
                    <input onChange={this.inputHandler} type="text"/>
                    <button onClick={this.submitHandler} type="submit">Submit</button>
                </form>

            </div>
        );
    }

}

PokemonForm.propTypes = {
    handleNumber: PropTypes.func.isRequired
};

export default PokemonForm;