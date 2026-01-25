// app/mega-dropdown/page.js (or place in your components folder and import where needed)

'use client'; // This enables client-side rendering for interactivity

import React, { useState } from 'react';
import { Box, Typography, Link, Grid, Card, CardMedia, CardContent, ClickAwayListener } from '@mui/material';

const MegaDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <Box
        component="nav"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          component="ul"
        >
          <Box component="li" sx={{ marginRight: '20px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              All
            </Link>
          </Box>
          <Box
            component="li"
            sx={{ position: 'relative', marginRight: '20px' }}
          >
            <Link
              href="#"
              underline="none"
              color="text.primary"
              fontWeight="bold"
              sx={{ padding: '10px', cursor: 'pointer' }}
              onClick={handleClick}
            >
              Sell Phone ▼
            </Link>
            {open && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80vw', // Reduced from 100vw to make it smaller
                    maxWidth: '1200px', // Max width to prevent it from being too wide
                    maxHeight: '80vh', // Limit height to 80% of viewport
                    overflowY: 'auto', // Scroll if content overflows
                    backgroundColor: '#e6f7f4', // Light mint green
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    zIndex: 1000,
                    display: 'flex',
                    borderRadius: '8px', // Optional: rounded corners
                  }}
                >
                  <Box sx={{ width: '25%', paddingRight: '20px' }}> {/* Slightly wider left menu for balance */}
                    <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Sell
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Phone
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Laptop
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Smartwatch
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Tablet
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          More
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Repair
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Sell Gadgets
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Buy Gadgets
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Recycle
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Find New Phone
                        </Link>
                      </Box>
                      <Box component="li" sx={{ marginBottom: '10px' }}>
                        <Link href="#" underline="hover" color="text.primary" fontSize="16px">
                          Cashify Store
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ width: '75%', backgroundColor: '#e6f7f4', padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h5" color="#007bff" sx={{ marginBottom: '10px' }}>
                      Pixel Upgrade Program
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      Google Pixel every year
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '20px' }}>
                      <Grid item>
                        <Card sx={{ maxWidth: 100 }}>
                          <CardMedia
                            component="img"
                            height="auto"
                            image="https://via.placeholder.com/100?text=Pixel+1"
                            alt="Pixel 1"
                          />
                        </Card>
                      </Grid>
                      <Grid item>
                        <Card sx={{ maxWidth: 100 }}>
                          <CardMedia
                            component="img"
                            height="auto"
                            image="https://via.placeholder.com/100?text=Pixel+2"
                            alt="Pixel 2"
                          />
                        </Card>
                      </Grid>
                      <Grid item>
                        <Card sx={{ maxWidth: 100 }}>
                          <CardMedia
                            component="img"
                            height="auto"
                            image="https://via.placeholder.com/100?text=Pixel+3"
                            alt="Pixel 3"
                          />
                        </Card>
                      </Grid>
                      <Grid item>
                        <Card sx={{ maxWidth: 100 }}>
                          <CardMedia
                            component="img"
                            height="auto"
                            image="https://via.placeholder.com/100?text=Pixel+4"
                            alt="Pixel 4"
                          />
                        </Card>
                      </Grid>
                    </Grid>
                    {/* Optional cards below the banner */}
                    <Grid container spacing={3} justifyContent="space-around" sx={{ marginTop: '20px' }}>
                      <Grid item xs={12} sm={6} md={3}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://via.placeholder.com/150?text=Phone"
                            alt="Phone"
                          />
                          <CardContent>
                            <Typography variant="body2">Sell Phone</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://via.placeholder.com/150?text=Laptop"
                            alt="Laptop"
                          />
                          <CardContent>
                            <Typography variant="body2">Sell Laptop</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://via.placeholder.com/150?text=Repair"
                            alt="Repair"
                          />
                          <CardContent>
                            <Typography variant="body2">Repair</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://via.placeholder.com/150?text=Store"
                            alt="Store"
                          />
                          <CardContent>
                            <Typography variant="body2">Cashify Store</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </ClickAwayListener>
            )}
          </Box>
          <Box component="li" sx={{ marginRight: '20px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              Sell Gadgets ▼
            </Link>
          </Box>
          <Box component="li" sx={{ marginRight: '20px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              Buy Refurbished Devices ▼
            </Link>
          </Box>
          <Box component="li" sx={{ marginRight: '20px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              Find New Gadget ▼
            </Link>
          </Box>
          <Box component="li" sx={{ marginRight: '20px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              Buy Laptop ▼
            </Link>
          </Box>
          <Box component="li" sx={{ marginRight: '20px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              Cashify Store ▼
            </Link>
          </Box>
          <Box component="li">
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              More ▼
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MegaDropdown;