import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import TabletIcon from '@mui/icons-material/Tablet';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WatchIcon from '@mui/icons-material/Watch';
import SpeakerIcon from '@mui/icons-material/Speaker';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeadsetIcon from '@mui/icons-material/Headset';
import PrintIcon from '@mui/icons-material/Print';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

interface Service {
  name: string;
  icon: React.ReactNode;
}

const fullServices: Service[] = [
  { name: 'Sell Phone', icon: <SmartphoneIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Laptop', icon: <LaptopIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell TV', icon: <TvIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Tablet', icon: <TabletIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Gaming Consoles', icon: <SportsEsportsIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Smartwatch', icon: <WatchIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Smart Speakers', icon: <SpeakerIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Camera', icon: <CameraAltIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Headphones', icon: <HeadsetIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Printer', icon: <PrintIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
  { name: 'Sell Accessories', icon: <DevicesOtherIcon sx={{ fontSize: 80, color: 'primary.main' }} /> },
];

const Sell: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedServices = showMore ? fullServices : fullServices.slice(0, 7);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Sell Your Old Device Now
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {displayedServices.map((service, index) => (
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
        {!showMore && (
          <Box
            onClick={() => setShowMore(true)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              backgroundColor: '#E0F7FA',
              borderRadius: '8px',
              flex: '0 0 calc((100% - 112px) / 8)',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
          >
            <MoreHorizIcon sx={{ fontSize: 80, color: 'primary.main' }} />
            <Typography variant="subtitle1" mt={1}>
              Sell More
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Sell;