import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TripResults from '../TripList/TripResults';
import TripListFooter from '../TripList/TripListFooter';
import SavedTripListHeader from './SavedTripListHeader';

export default function SavedTripList({ trips = [] }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [selectedTripIds, setSelectedTripIds] = useState(() => new Set());

  const pageCount = Math.ceil(trips.length / pageSize);

  const pageTrips = useMemo(() => {
    const start = (page - 1) * pageSize;
    return trips.slice(start, start + pageSize);
  }, [trips, page, pageSize]);

  const handleFooterPageChange = (_, value) => setPage(value);

  const toggleSelectedTrips = (id) => {
    setSelectedTripIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleRemoveSelected = () => {
    setSelectedTripIds(new Set());
  };

  return (
    <Box
      className='scrollArea'
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
      <SavedTripListHeader
        total={trips.length}
        pageSize={pageSize}
        onPageSizeChange={(e) => {
          setPageSize(Number(e.target.value));
          setPage(1);
        }}
      />
      <Divider />

      <TripResults
        trips={pageTrips}
        isSelected={(id) => selectedTripIds.has(id)}
        onToggleSelected={toggleSelectedTrips}
      />

      <Divider />

      <TripListFooter
        pageCount={pageCount}
        page={page}
        onPageChange={handleFooterPageChange}
        selectedCount={selectedTripIds.size}
        actionLabel='Remove selected'
        onAction={handleRemoveSelected}
      />
    </Box>
  );
}
