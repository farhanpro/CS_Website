import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < 900px = mobile

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = pages.map((page) => (
    <MenuItem
      key={page.name}
      component={Link}
      to={page.path}
      onClick={handleMenuClose}
      selected={location.pathname === page.path}
      sx={{ fontWeight: location.pathname === page.path ? 700 : 500 }}
    >
      {page.name}
    </MenuItem>
  ));

  return (
    <AppBar position="sticky" elevation={4}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo / Brand Name */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              letterSpacing: '0.5px',
            }}
          >
            Mukeem & Associates
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: 'white',
                    fontWeight: location.pathname === page.path ? 700 : 500,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: location.pathname === page.path ? '60%' : 0,
                      height: '3px',
                      bgcolor: 'white',
                      transform: 'translateX(-50%)',
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: { mt: 1, minWidth: 200 },
                }}
              >
                {menuItems}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}