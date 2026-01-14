// app/components/MegaDropdown.tsx
'use client'; // Required for client-side state in Next.js App Router

import React, { useState } from 'react';
import {
  Button,
  Menu,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Menu data (you can move this to a separate file like app/lib/menuData.ts if preferred)
const menuData: Record<string, { category: string; sub: string[] }[]> = {
  All: [], // No content specified; you can add if needed
  'Sell Phone': [
    { category: 'Phone', sub: ['Top Brands', 'Top Selling Phones'] },
    { category: 'Laptop', sub: ['Top Brands', 'Top Selling Models'] },
    { category: 'Smartwatch', sub: ['Top Brands'] },
    { category: 'Tablet', sub: ['Top Brands'] },
    { category: 'Repair', sub: ['Top Repaired Phones'] },
  ],
  'Sell Gadgets': [
    { category: 'Phone', sub: ['Top Brands', 'Top Selling Phones'] },
    { category: 'Laptop', sub: ['Top Brands', 'Top Selling Models'] },
    { category: 'Smart Speaker', sub: ['Top Brands'] },
    { category: 'Tablet', sub: ['Top Brands'] },
    { category: 'Gaming Consoles', sub: ['Top Brands'] },
    { category: 'iMac', sub: [] },
    { category: 'Smartwatch', sub: ['Top Brands'] },
    { category: 'TV', sub: ['Top Brands'] },
    { category: 'Earbuds', sub: ['Top Brands'] },
    { category: 'DSLR Camera', sub: ['Top Brands'] },
    { category: 'AC', sub: ['Top Brands'] },
    { category: 'Any Brand', sub: [] },
  ],
  'Buy Refurbished Devices': [
    { category: 'Refurbished Phones', sub: [] },
    { category: 'Refurbished Laptops', sub: [] },
    { category: 'Refurbished Smart Watches', sub: [] },
    { category: 'Refurbished Tablets', sub: [] },
    { category: 'Refurbished Gaming Consoles', sub: [] },
    { category: 'Refurbished Cameras', sub: [] },
    { category: 'Speakers', sub: [] },
    { category: 'Amazon Devices', sub: [] },
    { category: 'Top Brands', sub: [] },
  ],
  'Find New Gadget': [
    { category: 'Find New Phone', sub: ['Smartphones', 'Top Brands'] },
    { category: 'Find New Laptop', sub: ['Laptops', 'Top Brands'] },
    { category: 'Find New Smartwatch', sub: ['Smartwatch', 'Top Brands'] },
    { category: 'Find New Tablet', sub: ['Tablet', 'Top Brands'] },
  ],
  'Buy Laptop': [
    { category: 'Top Brands', sub: [] },
    { category: 'Best Selling Laptops', sub: [] },
    { category: 'Apple MacBook Air Mid 2017 Refurbished', sub: [] },
    { category: 'Apple MacBook Air Early 2015 Refurbished', sub: [] },
    { category: 'Apple MacBook Air 2020 Refurbished', sub: [] },
  ],
  'Cashify Store': [
    { category: 'More in Cashify Stores', sub: [] },
  ],
  More: [
    { category: 'More in Sell', sub: ['Repair', 'Sell Gadgets', 'Buy Gadgets', 'Recycle', 'Find New Phone', 'Cashify Store'] },
    { category: 'Company', sub: [] }, // Add sub if available
    { category: 'Our Services', sub: ['Sell Phone', 'Buy Gadgets', 'Buy Phone', 'Buy Laptops', 'Repair Phone', 'Repair Laptop', 'Find New Phone', 'Nearby Stores', 'Buy Smartwatches', 'Recycle'] },
    { category: 'Sell Your Old Device Now', sub: ['Sell Phone', 'Sell Laptop', 'Sell TV', 'Sell Tablet', 'Sell Gaming Consoles', 'Sell Smartwatch', 'Sell Smart Speakers', 'Sell More'] },
    { category: 'Explore', sub: ['Videos', 'News', 'Reviews', 'Articles', 'QnA', 'Tips and Tricks', 'Tech News'] },
    // Add more sections as needed from the detailed 'More' content
  ],
};

// Generic MegaDropdown component
function MegaDropdown({ title, sections }: { title: string; sections: { category: string; sub: string[] }[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={`${title}-button`}
        aria-controls={open ? `${title}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowForwardIosIcon sx={{ fontSize: 12, transform: 'rotate(90deg)' }} />} // Down arrow for dropdown
        sx={{ color: 'inherit', textTransform: 'none' }}
      >
        {title}
      </Button>
      <Menu
        id={`${title}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            width: { xs: '100%', md: 600 }, // Responsive width for mega feel
            maxWidth: '100%',
            overflow: 'auto',
          },
        }}
      >
        
      </Menu>
    </>
  );
}

export default MegaDropdown;