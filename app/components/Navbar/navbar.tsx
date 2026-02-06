// components/Navbar.js

import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MegaDropdown from '../MegaDropdown';

const Navbar = () => {
  return (
    <header>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
            <Typography variant="h6" component="div" sx={{ color: '#00BFA5', fontWeight: 'bold' }}>
              CASHIFY
            </Typography>
          </Box>

          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search for mobiles, accessories & More"
            size="small"
            sx={{
              width: '50%',
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Location and Login */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Location */}
            <Button
              startIcon={<LocationOnIcon />}
              endIcon={<ArrowDropDownIcon />}
              sx={{ textTransform: 'none', color: '#000' }}
            >
              Gurgaon
            </Button>

            {/* Login Button - Increased size */}
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: '#00BFA5', textTransform: 'none' }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <MegaDropdown />
    </header>
  );
};

export default Navbar;