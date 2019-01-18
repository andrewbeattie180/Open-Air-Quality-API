import React,{Component} from 'react';

class AutocompleteList extends Component{

    handleClick = (e) =>{
        e.preventDefault();
        this.props.handleClick(e.currentTarget.innerText)
    }
    render() {
        const list = this.props.list;
        const inputText = this.props.inputText;
        return (
    <div className = 'autocomplete-items'>
    {inputText.length > 0 ?                         //Only display if the input text isn't an empty string
    <ul>
        {list.filter(function(city){
            if (city.substr(0,inputText.length).toLowerCase() !== inputText.toLowerCase()){
                city = null;                    //Filter city list by entries that contain the input at the beginning
            } return  city
        })  
            .map((city,index)=>(                       
        <li onClick = {this.handleClick} key = {index}><strong>{city.substr(0,inputText.length)}</strong>{city.substr(inputText.length)}</li>           
    ))}
    </ul>:null} 
    </div>
)}
}

export default AutocompleteList;