import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/authContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, loading, logout, setFlash } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setFlash({
      message: 'Successfully logged out',
      type: 'info',
    });

    navigate('/', { replace: true });
  };

  return (
    <AppBar
      position='sticky'
      color='default'
      elevation={0}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Toolbar>
        <Stack direction='row' spacing={1}>
          <Button LinkComponent={Link} to='/search' color='inherit'>
            Search trips
          </Button>
          <Button LinkComponent={Link} to='/saved' color='inherit'>
            Saved trips
          </Button>
        </Stack>

        <Box sx={{ flex: 1 }} />

        <Stack direction='row' spacing={1}>
          {!loading &&
            (user ? (
              <Button onClick={handleLogout} variant='outlined'>
                Logout
              </Button>
            ) : (
              <>
                <Button LinkComponent={Link} to='/login' variant='outlined'>
                  Login
                </Button>
                <Button LinkComponent={Link} to='/register' variant='contained'>
                  Register
                </Button>
              </>
            ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
