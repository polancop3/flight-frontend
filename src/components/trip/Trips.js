import useAPI from "../../hooks/useAPI";
import { useState } from "react";
import { useEffect } from "react";



const Trip = ({ trip }) => {
  const { deleteTripByid } = useAPI()
  
  const handletripDeletion = (e) => {
    e.preventDefault()
    deleteTripByid(trip.flightId)
  }
    return(
        <div>{trip.flightId}<button onClick={handletripDeletion}>cancel trip</button></div>
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