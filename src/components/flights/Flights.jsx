import React, { useState } from 'react'
import { useEffect } from 'react';
import useAPI from '../../hooks/useAPI';

const Flight = ({ flight }) => {
  return (
    <div>
      {flight.flightNo},{flight.duration},{flight.source},{flight.destination}
    </div>
  )
}

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const { getAllFlights } = useAPI()

  useEffect(() => {
    console.log("here")
    getAllFlights()
    .then((flights) => setFlights(flights))
  }, [])

  return (
      <div>
       { flights.map((flight, index) => <Flight flight={flight} key={index}/>) }
      </div>
    );
}