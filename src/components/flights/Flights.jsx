import React, { Component } from 'react'
import axios from 'axios';
const url = 'http://localhost:8080/flight';

export default class Flights extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
   GetFlights() {
      axios.get(url)
        .then(function (response) {
            this.setState({
              flight:response.data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
    });
}

  render() {
    return (
      <div>
        <div>flight 12345</div>
        <div>flight 12345</div>
        <div>flight 12345</div>
        <div>flight 12345</div>
      </div>
    );
  }
}