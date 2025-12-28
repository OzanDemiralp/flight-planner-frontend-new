import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

import FlightCard from './FlightCard.jsx';
import TripHeader from './TripHeader.jsx';
import TripSummaryChips from './TripSummaryChips.jsx';
import TripToggleButton from './TripToggleButton.jsx';
import TripCollapse from './TripCollapse.jsx';

import { useState } from 'react';

export default function TripCard({ trip, selected, onToggleSelected }) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 447,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <TripHeader
          totalPrice={trip.totalPrice}
          selected={selected}
          onToggleSelected={() => onToggleSelected(trip.id)}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
          <FlightCard
            title='Outbound'
            icon={<FlightTakeoffIcon fontSize='small' />}
            flight={trip.outboundFlight}
          />

          <FlightCard
            title='Return'
            icon={<FlightLandIcon fontSize='small' />}
            flight={trip.returnFlight}
          />
        </Stack>

        <TripSummaryChips details={trip.details} />

        <TripToggleButton open={open} onToggle={handleToggle} />
      </CardContent>

      <Collapse in={open} timeout={100} unmountOnExit sx={{ width: '100%' }}>
        <Divider />
        <CardContent
          sx={{
            p: 2,
            backgroundColor: 'action.hover',
          }}
        >
          <TripCollapse details={trip.details} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
