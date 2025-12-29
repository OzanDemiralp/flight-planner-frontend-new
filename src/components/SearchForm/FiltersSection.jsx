import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
export default function FiltersSection({ state, dispatch }) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <TextField
          label='Max total price €'
          type='number'
          value={state.filters.maxTotalPrice}
          onChange={(e) =>
            dispatch({
              type: 'SET_FILTER',
              field: 'maxTotalPrice',
              value: e.target.value,
            })
          }
          fullWidth
          size='small'
          slotProps={{
            htmlInput: { min: 0 },
          }}
        />

        <TextField
          label='Max work days used'
          type='number'
          value={state.filters.maxWorkDaysUsed}
          onChange={(e) =>
            dispatch({
              type: 'SET_FILTER',
              field: 'maxWorkDaysUsed',
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
