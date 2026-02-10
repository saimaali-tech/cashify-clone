import React from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  TextField, 
  InputAdornment, 
  Button 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StoreCards = () => {
  const stores = [
    {
      location: 'GURGAON',
      name: 'Cashify Mobile Phone Store Airia Mall Sec 68 Gurgram',
      address: 'Ground Floor, Reach, AIRIA MALL, Badshapur Sohna Rd Hwy, Sect...',
      timings: '11:00 AM - 10:00 PM',
    },
    {
      location: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store Sushant Lok',
      address: 'GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon',
      timings: '10:00 AM - 09:00 PM',
    },
    {
      location: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon',
      address: 'Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market...',
      timings: '10:00 AM - 09:00 PM',
    },
    {
      location: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon',
      address: 'Shop No.13, Old Delhi Road, Opp. Plaza Solitaire Hotel Bank market...',
      timings: '10:00 AM - 09:00 PM',
    },
    {
      location: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store MG Road Gurgaon',
      address: 'M.G. Road Metro Gate No 2, M.G. Road...',
      timings: 'Details ->',
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1650,
        mx: 'auto',
        backgroundColor: '#f5f5f5',
        padding: { xs: 3, md: 5 },   // Responsive padding (better than fixed 20px)
        width: '100%',
      }}
    >
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h5" fontWeight="bold">
            Our Exclusive Stores
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />}>
            View all stores
          </Button>
        </Grid>
      </Grid>

      {/* Stats */}
      <Grid container alignItems="center" spacing={1} sx={{ mt: 2 }}>
        <Grid item>
          <LocationOnIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body1">200+ Experience Centres</Typography>
        </Grid>
        <Grid item>
          <StarIcon sx={{ color: '#ffd700' }} />
        </Grid>
        <Grid item>
          <Typography variant="body1">4.5+ Star Rating</Typography>
        </Grid>
      </Grid>

      {/* Search Field */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter Pincode"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mt: 3, backgroundColor: 'white' }}
      />

      {/* Store Cards - Horizontal Scroll */}
      <Grid 
        container 
        spacing={2} 
        sx={{ 
          mt: 3, 
          overflowX: 'auto', 
          flexWrap: 'nowrap',
          pb: 2,                    // Extra padding at bottom for scrollbar
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: '4px',
          }
        }}
      >
        {stores.map((store, index) => (
          <Grid item key={index}>
            <Card sx={{ minWidth: 200, maxWidth: 250, boxShadow: 3 }}>
              <CardContent>
                <Chip 
                  label={store.location} 
                  color="default" 
                  sx={{ backgroundColor: 'black', color: 'white', mb: 1 }} 
                />
                <Typography variant="h6" fontWeight="bold">
                  {store.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {store.address}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Timings: {store.timings}
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />} 
                  sx={{ mt: 1 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoreCards;