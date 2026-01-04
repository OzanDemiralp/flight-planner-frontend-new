import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import TripListHeader from './TripListHeader';
import TripResults from './TripResults';
import TripListFooter from './TripListFooter';
import SearchForm from '../SearchForm/SearchForm.jsx';

import { planTrip } from '../../api/trips.api.js';

export default function TripList({ trips = [], onTripsChange }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [selectedTripIds, setSelectedTripIds] = useState(() => new Set());
  const [searchOpen, setSearchOpen] = useState(false);

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

  const toggleSelectedTrips = (id) => {
    setSelectedTripIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSaveSelected = () => {
    setSelectedTripIds(new Set());
  };

  const handleSearch = async (payload) => {
    try {
      const res = await planTrip(payload);
      onTripsChange(res.data.trips);
      setPage(1);
      setSelectedTripIds(new Set());
      setSearchOpen(false);
    } catch (err) {
      console.error(err);
    }
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
      <TripListHeader
        total={trips.length}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        searchOpen={searchOpen}
        onToggleSearch={() => setSearchOpen((v) => !v)}
        searchForm={
          <SearchForm
            onSubmit={handleSearch}
            onClose={() => setSearchOpen(false)}
          />
        }
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
        actionLabel='Save selected'
        onAction={handleSaveSelected}
      />
    </Box>
  );
}
