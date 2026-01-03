import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar.jsx';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth='md' sx={{ height: '100%', py: 2 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
