import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TripCard from '../TripCard/TripCard';

export default function TripResults({ trips }) {
  return (
    <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
      <Stack spacing={2} alignItems='center'>
        {trips.map((t) => (
          <TripCard key={t.id} trip={t} />
        ))}
      </Stack>
    </Box>
  );
}
