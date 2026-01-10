import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Flash({
  open,
  message,
  severity = 'success',
  onClose,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} variant='filled'>
        {message}
      </Alert>
    </Snackbar>
  );
}
