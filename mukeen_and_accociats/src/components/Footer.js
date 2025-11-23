import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 10 }}>
      <Typography align="center">
        © 2025 Mukeem & Associates. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;