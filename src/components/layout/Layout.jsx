import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar.jsx';
import { useAuth } from '../../auth/authContext.jsx';
import Flash from '../Flash.jsx';

export default function Layout() {
  const { flash, setFlash } = useAuth();

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth='md' sx={{ height: '100%', py: 2 }}>
          <Outlet />
          {flash && (
            <Flash
              open
              message={flash.message}
              severity={flash.severity}
              onClose={() => setFlash(null)}
            />
          )}
        </Container>
      </Box>
    </>
  );
}
