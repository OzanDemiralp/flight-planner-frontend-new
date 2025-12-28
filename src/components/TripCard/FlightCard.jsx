import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { fmt } from '../../utils/datetime.js';

export default function FlightCard({ title, icon, flight }) {
  const { from, to, price, departureDateTime, arrivalDateTime } = flight;

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 1.25,
        flex: 1,
        minWidth: 0,
      }}
    >
      <Stack direction='row' spacing={1} alignItems='center' sx={{ mb: 0.5 }}>
        {icon}
        <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Typography variant='subtitle2' sx={{ fontWeight: 800 }}>
          €{price}
        </Typography>
      </Stack>

      <Typography variant='h6' sx={{ fontWeight: 800, lineHeight: 1.1 }}>
        {from} → {to}
      </Typography>

      <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>
        Dep: {fmt(departureDateTime)}
        <br />
        Arr: {fmt(arrivalDateTime)}
      </Typography>
    </Box>
  );
}
