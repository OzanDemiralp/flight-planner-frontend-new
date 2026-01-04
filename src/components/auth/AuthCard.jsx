import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

export default function AuthCard({ title, subtitle, error, children }) {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)',
        display: 'grid',
        placeItems: 'center',
        px: 2,
        py: 4,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 420,
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 800 }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant='body2' sx={{ opacity: 0.75, mt: 0.5, mb: 2 }}>
            {subtitle}
          </Typography>
        )}

        {error && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {children}
      </Paper>
    </Box>
  );
}
