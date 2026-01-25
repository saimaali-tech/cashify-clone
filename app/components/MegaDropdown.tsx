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
          padding: '10px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center'
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
                
                  </Box>
                </Box>
              </ClickAwayListener>
            )}
          </Box>
          <Box component="li" sx={{ marginRight: '30px' }}>
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