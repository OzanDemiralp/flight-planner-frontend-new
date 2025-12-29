import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Section({
  title,
  subtitle,
  variant = 'primary',
  children,
}) {
  const isPrimary = variant === 'primary';
  const isOptional = String(subtitle).toLowerCase().includes('optional');

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2.5 },
        borderRadius: 2,
        border: '1px solid',
        borderColor: isPrimary
          ? 'rgba(255,255,255,0.14)'
          : 'rgba(255,255,255,0.08)',
        bgcolor: isPrimary ? 'rgba(255,255,255,0.03)' : 'transparent',
        boxShadow: isPrimary ? '0 10px 30px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1.75 }}>
        <Typography
          variant='subtitle1'
          sx={{ fontWeight: 900, letterSpacing: 0.2 }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant='caption'
            sx={{
              ml: 0.25,
              px: 1,
              py: 0.25,
              borderRadius: 999,
              border: '1px solid',
              borderColor: isOptional
                ? 'rgba(255,255,255,0.08)'
                : 'rgba(255,255,255,0.12)',
              bgcolor: 'rgba(255,255,255,0.04)',
              opacity: isOptional ? 0.65 : 0.85,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {children}
    </Box>
  );
}
