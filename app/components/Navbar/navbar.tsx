// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import MegaDropdown from '../MegaDropdown'; // Uncomment if needed

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'center', padding: '0 16px',width:2000, }}>
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
  );
};

export default Navbar;