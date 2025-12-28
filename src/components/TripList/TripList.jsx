import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import TripListHeader from './TripListHeader';
import TripResults from './TripResults';
import TripListFooter from './TripListFooter';

export default function TripList({ trips }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const pageCount = Math.ceil(trips.length / pageSize);

  const pageTrips = useMemo(() => {
    const start = (page - 1) * pageSize;
    return trips.slice(start, start + pageSize);
  }, [trips, page, pageSize]);

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
    setPage(1);
  };

  const handleFooterPageChange = (_, value) => setPage(value);

  return (
    <Box
      sx={{
        height: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <TripListHeader
        total={trips.length}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />

      <Divider />
      <TripResults trips={pageTrips} />
      <Divider />

      <TripListFooter
        pageCount={pageCount}
        page={page}
        onPageChange={handleFooterPageChange}
      />
    </Box>
  );
}
