import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function TripSummaryChips({ details }) {
  return (
    <Stack direction='row' spacing={1} sx={{ mt: 1.5, flexWrap: 'wrap' }}>
      <Chip
        label={`${details.nonWorkingDaysCount} non-working days`}
        size='small'
        variant='outlined'
        sx={{ fontWeight: 700 }}
      />
      <Chip
        label={`${details.workDaysUsed} work days used`}
        size='small'
        variant='outlined'
        sx={{ fontWeight: 700 }}
      />
      <Chip
        label={`${details.totalDays} total days`}
        size='small'
        variant='outlined'
        sx={{ fontWeight: 700 }}
      />
    </Stack>
  );
}
