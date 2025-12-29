import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SortSection({ state, dispatch }) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <FormControl fullWidth size='small'>
          <InputLabel id='sort-by-label'>Sort by</InputLabel>
          <Select
            labelId='sort-by-label'
            label='Sort by'
            value={state.sort.by}
            onChange={(e) =>
              dispatch({ type: 'SET_SORT', field: 'by', value: e.target.value })
            }
          >
            <MenuItem value='totalPrice'>Total price</MenuItem>
            <MenuItem value='workDaysUsed'>Work days used</MenuItem>
            <MenuItem value='nonWorkingDaysCount'>Non-working days</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size='small'>
          <InputLabel id='sort-order-label'>Order</InputLabel>
          <Select
            labelId='sort-order-label'
            label='Order'
            value={state.sort.order}
            onChange={(e) =>
              dispatch({
                type: 'SET_SORT',
                field: 'order',
                value: e.target.value,
              })
            }
          >
            <MenuItem value='asc'>Ascending</MenuItem>
            <MenuItem value='desc'>Descending</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
