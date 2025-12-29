import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';

export default function TripListHeader({
  total,
  pageSize,
  onPageSizeChange,
  searchOpen,
  onToggleSearch,
  searchForm,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ px: 2, pt: 2 }}>
      {/* top row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant='body2' color='text.secondary'>
          {total} trips found
        </Typography>

        <Box sx={{ flex: 1 }} />

        <Button
          size='small'
          variant='outlined'
          startIcon={<FilterAltIcon />}
          onClick={onToggleSearch}
          sx={{ borderRadius: 2 }}
        >
          Filters
        </Button>

        <Select size='small' value={pageSize} onChange={onPageSizeChange}>
          <MenuItem value={6}>6 / page</MenuItem>
          <MenuItem value={12}>12 / page</MenuItem>
          <MenuItem value={18}>18 / page</MenuItem>
          <MenuItem value={24}>24 / page</MenuItem>
        </Select>
      </Box>

      {!isMobile && (
        <Box
          sx={{
            mt: 2,
            position: 'sticky',
            top: 0,
            zIndex: 5,
            backgroundColor: 'background.default',
          }}
        >
          <Collapse in={searchOpen} timeout={200} unmountOnExit>
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {searchForm}
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Collapse>
        </Box>
      )}

      {isMobile && (
        <SwipeableDrawer
          anchor='bottom'
          open={searchOpen}
          onClose={onToggleSearch}
          onOpen={onToggleSearch}
          slotProps={{
            paper: {
              sx: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                backgroundImage: 'none',
                backgroundColor: 'background.paper',
              },
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 800 }}>
                Search & Filters
              </Typography>
              <Box sx={{ flex: 1 }} />
              <Button
                size='small'
                variant='text'
                startIcon={<CloseIcon />}
                onClick={onToggleSearch}
              >
                Close
              </Button>
            </Box>

            {searchForm}
          </Box>
        </SwipeableDrawer>
      )}
    </Box>
  );
}
