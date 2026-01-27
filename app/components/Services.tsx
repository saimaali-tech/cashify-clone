import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DevicesIcon from '@mui/icons-material/Devices';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import BuildIcon from '@mui/icons-material/Build';
import SearchIcon from '@mui/icons-material/Search';
import StoreIcon from '@mui/icons-material/Store';
import WatchIcon from '@mui/icons-material/Watch';
import RecyclingIcon from '@mui/icons-material/Recycling';

interface Service {
  name: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  { name: 'Sell Phone', icon: <AttachMoneyIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Buy Gadgets', icon: <DevicesIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Buy Phone', icon: <SmartphoneIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Buy Laptops', icon: <LaptopIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Repair Phone', icon: <BuildIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Repair Laptop', icon: <BuildIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Find New Phone', icon: <SearchIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Nearby Stores', icon: <StoreIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Buy Smartwatches', icon: <WatchIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Recycle', icon: <RecyclingIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
];

const Services: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Our Services
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              backgroundColor: '#E0F7FA',
              borderRadius: '8px',
              flex: '0 0 calc((100% - 112px) / 8)',
              boxSizing: 'border-box',
            }}
          >
            {service.icon}
            <Typography variant="subtitle1" mt={1}>
              {service.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Services;