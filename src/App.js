import './App.css';
import TripCard from './components/TripCard/TripCard.jsx';
import { trip } from './mock/trip.js';

function App() {
  return (
    <div>
      <TripCard trip={trip} />{' '}
    </div>
  );
}

export default App;
