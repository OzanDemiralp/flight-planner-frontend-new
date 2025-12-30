import { Box, Container } from '@mui/material';
import './App.css';
import TripList from './components/TripList/TripList.jsx';
import Navbar from './components/layout/Navbar.jsx';
import { useState } from 'react';

function App() {
  const [trips, setTrips] = useState([]);

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth='md' sx={{ height: '100%', py: 2 }}>
          <TripList trips={trips} onTripsChange={setTrips} />
        </Container>
      </Box>
    </>
  );
}

export default App;
