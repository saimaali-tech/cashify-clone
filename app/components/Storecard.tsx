import React from 'react';
import { Grid, Card, CardContent, Typography, Chip, TextField, InputAdornment, Button } from '@mui/material';
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
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
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
      <Grid container alignItems="center" spacing={1} style={{ marginTop: '10px' }}>
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
        style={{ marginTop: '20px', backgroundColor: 'white' }}
      />
      <Grid container spacing={2} style={{ marginTop: '20px', overflowX: 'auto', flexWrap: 'nowrap' }}>
        {stores.map((store, index) => (
          <Grid item key={index}>
            <Card sx={{ minWidth: 200, maxWidth: 250, boxShadow: 3 }}>
              <CardContent>
                <Chip label={store.location} color="default" sx={{ backgroundColor: 'black', color: 'white', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  {store.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {store.address}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Timings: {store.timings}
                </Typography>
                <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />} sx={{ mt: 1 }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StoreCards;