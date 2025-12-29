import { useReducer } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import RouteSection from './RouteSection';
import TripRulesSection from './TripRulesSection';
import FiltersSection from './FiltersSection';
import SortSection from './SortSection';

import buildPayload from '../../utils/buildpayload';
import { todayYYYYMMDD, plusDaysYYYYMMDD } from '../../utils/datetime';
import Section from './Section';

const initialState = {
  departureFrom: '',
  departureTo: '',
  returnFrom: '',
  returnTo: '',

  vacationLength: 5,
  minNonWorkingDays: 0,

  searchWindow: {
    startDate: todayYYYYMMDD(),
    endDate: plusDaysYYYYMMDD(30),
  },

  filters: {
    maxTotalPrice: '',
    maxWorkDaysUsed: '',
  },

  sort: {
    by: 'totalPrice',
    order: 'asc',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD': {
      return { ...state, [action.field]: action.value };
    }

    case 'SET_SEARCH_WINDOW': {
      return {
        ...state,
        searchWindow: { ...state.searchWindow, [action.field]: action.value },
      };
    }

    case 'SET_FILTER': {
      return {
        ...state,
        filters: { ...state.filters, [action.field]: action.value },
      };
    }

    case 'SET_SORT': {
      return {
        ...state,
        sort: { ...state.sort, [action.field]: action.value },
      };
    }

    case 'RESET': {
      return initialState;
    }

    default:
      return state;
  }
}

export default function SearchForm({ onSubmit, onClose }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e) => {
    e.preventDefault();
    const payload = buildPayload(state);
    onSubmit?.(payload);
    onClose?.();
  };

  const reset = () => dispatch({ type: 'RESET', initialState });

  return (
    <Box component='form' onSubmit={submit}>
      <Stack spacing={2}>
        <Section title='Route' subtitle='Required' variant='primary'>
          <RouteSection state={state} dispatch={dispatch} />
        </Section>
        <Section title='Trip Rules' subtitle='Required' variant='primary'>
          <TripRulesSection state={state} dispatch={dispatch} />
        </Section>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            alignItems: 'start',
          }}
        >
          <Section title='Filters' subtitle='Optional' variant='secondary'>
            <FiltersSection state={state} dispatch={dispatch} />
          </Section>

          <Section title='Sort By' subtitle='Optional' variant='secondary'>
            <SortSection state={state} dispatch={dispatch} />
          </Section>
        </Box>

        <Stack direction='row' spacing={1} sx={{ pt: 1 }}>
          <Button type='submit' variant='contained'>
            Apply
          </Button>
          <Button type='button' variant='outlined' onClick={reset}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
