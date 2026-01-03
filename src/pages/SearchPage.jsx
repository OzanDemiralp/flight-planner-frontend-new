import { useState } from 'react';
import TripList from '../components/TripList/TripList.jsx';

export default function SearchPage() {
  const [trips, setTrips] = useState([]);

  return <TripList trips={trips} onTripsChange={setTrips} />;
}
