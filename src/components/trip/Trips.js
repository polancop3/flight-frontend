import useAPI from "../../hooks/useAPI";
import { useState } from "react";
import { useEffect } from "react";

const Trip = ({ trip }) => {
  const { deleteTripByid } = useAPI(trip.flightId);
    return(
        <div>{trip.flightId}<button onClick={deleteTripByid}>cancel trip</button></div>
    )
}


const Trips = () => {
    const [trips, setTrips] = useState([]);
    const { getAllTrips } = useAPI();

    useEffect(() => {
      console.log("here")
      getAllTrips()
      .then((trip) => setTrips(trip))
    }, [])
  
    return (
        <div>
         { trips.map((trip, index) => <Trip trip={trip} key={index}/>) }
        </div>
      );
}

export default Trips;