import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import API from './api/api'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      list:[],
      inputText:'',
      loading: false,
      cityCards:[]  
    }
  }
  componentDidMount(){
      API.cityList()
      .then(
        data=>{
        this.setState({
          list: data.map(location=>location.city).sort()
      })
    })
  }

  handleCityCardsLength=()=>{
    let array = [...this.state.cityCards];
    if (array.length>2){
      array.shift();
      this.setState({cityCards:array})
    }
    if (array.length>1 && array[0].city===array[1].city){
      array.shift();
      this.setState({cityCards:array})
    }
  }

  handleRemoveCard=(city)=>{
    this.setState(prevState =>({
      cityCards: prevState.cityCards.filter(card => card.city !== city)
    }))
  }

  capitaliseString = (input)=>{
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }
  handleClick = (text)=>{
    this.setState({
      inputText:text
    })
  }

  handleTextChange = (input)=>{
    this.setState({
      inputText: this.capitaliseString(input)
    })
  }

  handleSubmit=()=>{
    this.setState(prevState=>({
      loading:true,
      inputText: prevState.inputText.charAt(0).toUpperCase()+prevState.inputText.slice(1)})
    )
    API.citySearch(this.state.inputText)
      .then(data=>{
        if (data){
        this.setState(prevState=>({
          cityCards:  [...prevState.cityCards,data],
          loading: !prevState.loading,
          inputText: ''
        }))
    } else {
      this.setState(prevState=>({
        loading: !prevState.loading,
      }))
    }
  })
    .then(this.handleCityCardsLength)
}

  render() {
    
    return (
      <div className="App">
        <Header 
        list = {this.state.list}
        inputText = {this.state.inputText}
        handleClick = {this.handleClick}
        handleTextChange = {this.handleTextChange}
        handleSubmit = {this.handleSubmit}/>
        <div className = 'card-container'>
        {this.state.loading ? <span className='loading'>Loading...</span>
         :
        this.state.cityCards.map((city,index) => (
        <Card 
            name = {city.location}
            key = {index}
            data = {city.measurements}
            city = {city.city}
            handleRemoveCard = {this.handleRemoveCard}/>
        ))}
        </div>
      </div>
      
    );
  }
}

export default App;
