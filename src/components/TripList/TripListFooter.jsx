import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

export default function TripListFooter({
  pageCount,
  page,
  onPageChange,
  selectedCount,
  actionLabel = 'Save selected',
  onAction,
}) {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onPageChange}
        shape='rounded'
        siblingCount={1}
        boundaryCount={1}
      />
      <Button
        sx={{ ml: 1 }}
        variant='contained'
        size='small'
        disabled={selectedCount === 0}
        onClick={onAction}
      >
        {actionLabel} ({selectedCount})
      </Button>
    </Box>
  );
}
