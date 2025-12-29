import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function TripRulesSection({ state, dispatch }) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <TextField
          label='Earliest departure'
          type='date'
          value={state.searchWindow.startDate}
          onChange={(e) =>
            dispatch({
              type: 'SET_SEARCH_WINDOW',
              field: 'startDate',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          required
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        <TextField
          label='Latest return'
          type='date'
          value={state.searchWindow.endDate}
          onChange={(e) =>
            dispatch({
              type: 'SET_SEARCH_WINDOW',
              field: 'endDate',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          required
          slotProps={{
            inputLabel: { shrink: true },
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
