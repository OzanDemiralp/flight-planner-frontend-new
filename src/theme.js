import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#4DA3FF',
      light: '#7BB9FF',
      dark: '#1E6FD9',
    },

    secondary: {
      main: '#9AA4B2',
    },

    background: {
      default: '#141A21',
      paper: '#1B2430',
    },

    text: {
      primary: '#E6EDF3',
      secondary: '#B3BDCA',
    },

    divider: 'rgba(255,255,255,0.10)',
  },

  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),

    h5: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },

    body2: {
      color: '#9AA4B2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 800,
          borderRadius: 12,
        },
        containedPrimary: {
          boxShadow: '0 6px 20px rgba(77,163,255,0.25)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          backgroundColor: 'rgba(77,163,255,0.15)',
        },
      },
    },
  },
});

export default theme;
