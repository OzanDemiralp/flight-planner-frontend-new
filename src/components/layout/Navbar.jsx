import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Navbar() {
  return (
    <AppBar
      position='sticky'
      color='default'
      elevation={0}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Toolbar>
        <Stack direction='row' spacing={1}>
          <Button color='inherit'>Search trips</Button>
          <Button color='inherit'>Saved trips</Button>
        </Stack>

        <Box sx={{ flex: 1 }} />

        <Stack direction='row' spacing={1}>
          <Button variant='outlined'>Login</Button>
          <Button variant='contained'>Register</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
