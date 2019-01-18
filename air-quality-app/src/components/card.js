import React, {Component} from 'react'

class Card extends Component{

    handleRemoveCard = ()=>{
        this.props.handleRemoveCard(this.props.city);
    }
    handleTimeCalculation = (timeString)=>{
        let oldTime = new Date(timeString);
        let currentTime = new Date();
        let difference = {
            mins: currentTime.getMinutes()-oldTime.getMinutes(),
            hours: currentTime.getHours()-oldTime.getHours(),
            days: currentTime.getDay()-oldTime.getDay()
          }
        if (difference.days > 0){
            return 'Updated ' + difference.days + (difference.days>1?' days ago':' day ago')
        } else if (difference.hours > 0){
            return 'Updated ' + difference.hours + (difference.hours>1?' hours ago':' hour ago')
        } else if (difference.mins >0){
            return 'Updated ' + difference.mins + (difference.mins>1?' mins ago':' min ago')
        }
    }
    render(){
        const measurementArray = this.props.data.map(measurement=>([" "+measurement.parameter.toUpperCase() +" = ", " "+measurement.value]));
        const time = this.props.data[0].lastUpdated;

        return (
        <div key = {this.props.index} className = 'card'>
            <button onClick = {this.handleRemoveCard}><i className="fas fa-times-circle"></i></button>
            <h3>{this.handleTimeCalculation(time).toUpperCase()}</h3>
            <h2>{this.props.name}</h2>
            <p>in {this.props.city}, United Kingdom</p>
            <h4>Values:{measurementArray}</h4>
        </div>
        )
    }
}

export default Card