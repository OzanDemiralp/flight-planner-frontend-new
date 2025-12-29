import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function RouteSection({ state, dispatch }) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <TextField
          label='Departure from'
          value={state.departureFrom}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'departureFrom',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          required
        />
        <TextField
          label='Departure to'
          value={state.departureTo}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'departureTo',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          required
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 1 }}>
        <TextField
          label='Return from'
          value={state.returnFrom}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'returnFrom',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          required
        />
        <TextField
          label='Return to'
          value={state.returnTo}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'returnTo',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          required
        />
      </Stack>
    </Box>
  );
}
