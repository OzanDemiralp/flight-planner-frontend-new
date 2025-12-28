import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function TripToggleButton({ open, onToggle }) {
  return (
    <Stack direction='row' alignItems='center' sx={{ mt: 1.25 }}>
      <Box sx={{ flex: 1 }} />
      <Button
        size='small'
        variant={open ? 'contained' : 'outlined'}
        onClick={onToggle}
        endIcon={
          <ArrowDownwardIcon
            sx={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.2s',
            }}
          />
        }
        sx={{ textTransform: 'none', borderRadius: 2, fontWeight: 800 }}
      >
        {open ? 'Hide details' : 'Show details'}
      </Button>
    </Stack>
  );
}
