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
    <Box sx={{ backgroundColor: '#f4f4f4' }}>
      <Box
        component="nav"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            listStyle: 'none',
          
          }}
          component="ul"
        >
          
          <Box component="li" sx={{ marginRight: '30px' }}>
            <Link href="#" underline="none" color="text.primary" fontWeight="bold" sx={{ padding: '10px' }}>
              All ▼
            </Link>
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