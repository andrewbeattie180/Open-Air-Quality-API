import React, {Component} from 'react';

import AutocompleteList from './autocompleteList';

class SearchForm extends Component {

    submitSearch = (e) =>{
        e.preventDefault();
        this.props.handleSubmit();
        e.currentTarget.reset();
    }
    handleClick = (text)=>{
        this.props.handleClick(text);
    }
    textChange = (e) => {
        e.preventDefault();
        let textInput = e.target.value;
        this.props.handleChange(textInput);
    };

    render (){
        
        return <div className = 'search-holder'>
        <form 
            className="form" 
            id="citySearchBox"
            onSubmit = {this.submitSearch}
            noValidate
            >
        <div className = 'autocomplete'>
            <input
            type="search"
            autoComplete = 'off'
            className="input"
            id="addInput"
            placeholder="Enter city name..."
            value={this.props.inputText}
            onChange={(event)=> this.textChange(event)}
            >
            </input>
            <AutocompleteList 
            handleClick = {this.handleClick}
            list = {this.props.list} 
            inputText = {this.props.inputText}/>
        </div>
        <button className="button is-info">
        <i className="fas fa-search"></i>
        </button>
        </form>
      </div>
    }
}


export default SearchForm;