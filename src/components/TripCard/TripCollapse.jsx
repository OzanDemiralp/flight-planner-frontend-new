import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export default function TripCollapse({ details }) {
  return (
    <Box>
      <Typography variant='subtitle2' sx={{ fontWeight: 900, mb: 1 }}>
        Trip details
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <DateChipBox
          title='Non-working dates'
          dates={details.nonWorkingDates}
        />
        <DateChipBox title='Work dates' dates={details.workDates} />
      </Stack>
    </Box>
  );
}

function DateChipBox({ title, dates }) {
  return (
    <Box
      sx={{
        flex: 1,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 1,
      }}
    >
      <Typography variant='body2' color='text.secondary' sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Stack direction='row' spacing={1} flexWrap='wrap'>
        {dates.map((d) => (
          <Chip key={d} label={d} size='small' />
        ))}
      </Stack>
    </Box>
  );
}
