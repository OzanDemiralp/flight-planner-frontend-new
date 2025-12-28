import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function TripListHeader({ total, pageSize, onPageSizeChange }) {
  return (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant='body2' color='text.secondary'>
        {total} trips found
      </Typography>

      <Box sx={{ flex: 1 }} />

      <Select size='small' value={pageSize} onChange={onPageSizeChange}>
        <MenuItem value={6}>6 / page</MenuItem>
        <MenuItem value={12}>12 / page</MenuItem>
        <MenuItem value={18}>18 / page</MenuItem>
        <MenuItem value={24}>24 / page</MenuItem>
      </Select>
    </Box>
  );
}
