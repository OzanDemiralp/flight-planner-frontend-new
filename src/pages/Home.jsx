import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Stack } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 520,
          textAlign: 'center',
          p: 4,
          borderRadius: 4,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 1 }}>
          Plan smarter trips ✈️
        </Typography>

        <Typography variant='body1' color='text.secondary' sx={{ mb: 3 }}>
          Find the best flight combinations by using your vacation days
          efficiently.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent='center'
        >
          <Button
            variant='contained'
            size='large'
            onClick={() => navigate('/searchtrips')}
          >
            Search trips
          </Button>

          <Button
            variant='outlined'
            size='large'
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
