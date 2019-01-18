import React,{Component} from 'react';
import SearchForm from './searchForm';


class Header extends Component {

    handleSubmit = () =>{
        this.props.handleSubmit()
    }
    handleTextChange = (input)=>{
        this.props.handleTextChange(input)
    }
    handleClick = (text)=>{
        this.props.handleClick(text)
    }
    render(){

    return <header className="App-header">
            <div className ='content'>
                <h1>Compare your Air</h1>
                <p>Compare the air quality between cities in the UK</p>
                <p>Select cities to compare using the search tool below</p>
                <SearchForm 
                list = {this.props.list}
                handleChange = {this.handleTextChange}
                handleSubmit = {this.handleSubmit}
                handleClick = {this.handleClick}
                inputText = {this.props.inputText}/>
                </div>
            </header>
    }
}
export default Header;
