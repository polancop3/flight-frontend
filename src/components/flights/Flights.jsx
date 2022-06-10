import React, { useState } from 'react'
import { useEffect } from 'react';
import useAPI from '../../hooks/useAPI';

const Flight = ({ flight }) => {
  let obj = {"flightId": flight.id}
  const {saveTrip} = useAPI(obj) 
 
  return (
    <div>
      <ul>
      <li>FlightNo: {flight.flightNo}</li>
      <li>Flight duration: {flight.duration}</li>
      <li>Flight source: {flight.source}</li>
      <li>Flight Destination: {flight.destination}</li>
      <button onClick={saveTrip}>select flight</button>
      </ul> 
    </div>
  )
}

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const { getAllFlights} = useAPI()

  useEffect(() => {
     getAllFlights()
    .then((flights) => setFlights(flights))
  }, [])

  return (
      <div>
       { flights.map((flight, index) => <Flight flight={flight} key={index}/>) }
      </div>
    );
}