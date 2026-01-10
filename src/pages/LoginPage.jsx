// src/pages/LoginPage.jsx
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
import { useAuth } from '../auth/authContext.jsx';
import { login } from '../api/auth.api.js';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setUser, setFlash } = useAuth();

  const onChange = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Enter your email and password');
      return;
    }

    try {
      const res = await login(form);
      setUser(res.data);
      setFlash({
        message: `Welcome ${res.data.name}`,
        severity: 'success',
      });

      navigate('/search');
    } catch (err) {
      setError(err.response?.data?.message ?? 'Login failed');
    }
  };

  return (
    <AuthCard title='Login' subtitle='Continue to Flight Planner' error={error}>
      <Box component='form' onSubmit={onSubmit}>
        <Stack spacing={1.5}>
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
            autoComplete='current-password'
          />

          <Button type='submit' variant='contained' fullWidth sx={{ py: 1 }}>
            Login
          </Button>

          <Divider sx={{ opacity: 0.12 }} />

          <Typography variant='body2' sx={{ opacity: 0.8 }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to='/register' underline='hover'>
              Register
            </Link>
          </Typography>
        </Stack>
      </Box>
    </AuthCard>
  );
}
