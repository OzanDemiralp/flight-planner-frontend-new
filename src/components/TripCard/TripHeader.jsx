import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function TripHeader({ totalPrice, selected, onToggleSelected }) {
  return (
    <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 1.5 }}>
      <Typography variant='h6' sx={{ fontWeight: 900 }}>
        Trip option
      </Typography>

      <Box sx={{ flex: 1 }} />

      <Typography variant='h6' sx={{ fontWeight: 900 }}>
        €{totalPrice}
      </Typography>

      <Tooltip title={selected ? 'Unselect' : 'Select'}>
        <IconButton size='small' onClick={onToggleSelected}>
          {selected ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
