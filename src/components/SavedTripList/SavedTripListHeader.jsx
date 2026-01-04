import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SavedTripListHeader({
  total,
  pageSize,
  onPageSizeChange,
}) {
  return (
    <Box
      sx={{
        px: 2,
        pt: 2,
        pb: { xs: 0, md: 2 },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant='body2' color='text.secondary'>
          Total: {total}
        </Typography>

        <Box sx={{ flex: 1 }} />

        <Select size='small' value={pageSize} onChange={onPageSizeChange}>
          <MenuItem value={6}>6 / page</MenuItem>
          <MenuItem value={12}>12 / page</MenuItem>
          <MenuItem value={18}>18 / page</MenuItem>
          <MenuItem value={24}>24 / page</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
