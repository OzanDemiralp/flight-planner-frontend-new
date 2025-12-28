import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

export default function TripListFooter({ pageCount, page, onPageChange }) {
  if (pageCount <= 1) return null;

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
    </Box>
  );
}
