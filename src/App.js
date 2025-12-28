import { Box } from '@mui/material';
import './App.css';
import TripCard from './components/TripCard/TripCard.jsx';
import { trip } from './mock/trip.js';

function App() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <TripCard trip={trip} />{' '}
    </Box>
  );
}

export default App;
