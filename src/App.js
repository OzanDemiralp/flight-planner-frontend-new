import { Box, Container } from '@mui/material';
import './App.css';
import { trips } from './mock/trips';
import TripList from './components/TripList/TripList.jsx';
import Navbar from './components/layout/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth='md' sx={{ height: '100%', py: 2 }}>
          <TripList trips={trips} />
        </Container>
      </Box>
    </>
  );
}

export default App;
