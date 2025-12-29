import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function TripRulesSection({ state, dispatch }) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <DatePicker
          label='Earliest departure'
          value={
            state.searchWindow.startDate
              ? dayjs(state.searchWindow.startDate)
              : null
          }
          onChange={(newValue) =>
            dispatch({
              type: 'SET_SEARCH_WINDOW',
              field: 'startDate',
              value: newValue ? newValue.format('YYYY-MM-DD') : '',
            })
          }
          slotProps={{
            textField: {
              fullWidth: true,
              size: 'small',
              required: true,
            },
          }}
        />

        <DatePicker
          label='Latest return'
          value={
            state.searchWindow.endDate
              ? dayjs(state.searchWindow.endDate)
              : null
          }
          onChange={(newValue) =>
            dispatch({
              type: 'SET_SEARCH_WINDOW',
              field: 'endDate',
              value: newValue ? newValue.format('YYYY-MM-DD') : '',
            })
          }
          slotProps={{
            textField: {
              fullWidth: true,
              size: 'small',
              required: true,
            },
          }}
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 1 }}>
        <TextField
          label='Vacation length (days)'
          type='number'
          value={state.vacationLength}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'vacationLength',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          slotProps={{
            htmlInput: { min: 1, max: 30 },
          }}
          required
        />

        <TextField
          label='Min non-working days'
          type='number'
          value={state.minNonWorkingDays}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'minNonWorkingDays',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          slotProps={{
            htmlInput: { min: 0, max: 30 },
          }}
        />
      </Stack>
    </Box>
  );
}
