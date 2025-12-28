import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function TripHeader({ totalPrice }) {
  return (
    <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 1.5 }}>
      <Typography variant='h6' sx={{ fontWeight: 900 }}>
        Trip option
      </Typography>

      <Box sx={{ flex: 1 }} />

      <Typography variant='h6' sx={{ fontWeight: 900 }}>
        €{totalPrice}
      </Typography>
    </Stack>
  );
}
