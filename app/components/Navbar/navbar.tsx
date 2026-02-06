

import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MegaDropdown from '../MegaDropdown';

const Navbar = () => {
  return (
    <header>
      <AppBar position="static" color="default" elevation={3}>
        <Toolbar sx={{ justifyContent: 'center', padding: '0 18px' }}>
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
              width: '55%',
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                borderRadius: '5px',
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 9 }}>
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
              sx={{ backgroundColor: '#00BFA5', textTransform: 'none',width:150, }}
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