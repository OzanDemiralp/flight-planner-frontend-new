// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import AuthCard from '../components/auth/AuthCard.jsx';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { name, email, password } = form;

    if (!name || !email || !password) {
      setError('Fill all the fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    navigate('/login');
  };

  return (
    <AuthCard
      title='Register'
      subtitle='Create your Flight Planner account'
      error={error}
    >
      <Box component='form' onSubmit={onSubmit}>
        <Stack spacing={1.5}>
          <TextField
            label='Name'
            value={form.name}
            onChange={onChange('name')}
            size='small'
            fullWidth
            autoComplete='name'
          />

          <TextField
            label='Email'
            type='email'
            value={form.email}
            onChange={onChange('email')}
            size='small'
            fullWidth
            autoComplete='email'
          />

          <TextField
            label='Password'
            type='password'
            value={form.password}
            onChange={onChange('password')}
            size='small'
            fullWidth
            autoComplete='new-password'
          />

          <Button type='submit' variant='contained' fullWidth sx={{ py: 1 }}>
            Create account
          </Button>

          <Divider sx={{ opacity: 0.12 }} />

          <Typography variant='body2' sx={{ opacity: 0.8 }}>
            Already have an account?{' '}
            <Link component={RouterLink} to='/login' underline='hover'>
              Login
            </Link>
          </Typography>
        </Stack>
      </Box>
    </AuthCard>
  );
}
