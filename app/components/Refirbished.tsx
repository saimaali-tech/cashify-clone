import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Rating } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle'; // For the assured badge, using placeholder

interface Device {
  image: string; // Placeholder for image URL
  off: string;
  name: string;
  sale: string;
  rating: number;
  percentOff: string;
  currentPrice: string;
  originalPrice: string;
  withGold: string;
}

const devices: Device[] = [
  {
    image: '/images/phone1.jpg',
    off: '₹56,000 OFF',
    name: 'Vivo X90 Pro - Refurbished',
    sale: 'Republic Day Sale',
    rating: 4.8,
    percentOff: '-59%',
    currentPrice: '₹38,499',
    originalPrice: '₹94,499',
    withGold: '₹37,729 with GGLD',
  },
  {
    image: '/images/phone2.jpg',
    off: '₹1,400 OFF',
    name: 'Xiaomi Redmi 9i - Refurbished',
    sale: 'Republic Day Sale',
    rating: 4.8,
    percentOff: '-43%',
    currentPrice: '₹5,499',
    originalPrice: '₹9,599',
    withGold: '₹4,801 with GGLD',
  },
  {
    image: '/images/phone3.jpg',
    off: '₹13,700 OFF',
    name: 'Xiaomi Redmi Note 11 Pro Plus 5G - Refurbished',
    sale: 'Republic Day Sale',
    rating: 4.9,
    percentOff: '-56%',
    currentPrice: '₹10,599',
    originalPrice: '₹24,299',
    withGold: '₹9,799 with GGLD',
  },
  {
    image: '/images/phone4.jpg',
    off: '₹4,700 OFF',
    name: 'Xiaomi Redmi 9 Power - Refurbished',
    sale: 'Republic Day Sale',
    rating: 4,
    percentOff: '-44%',
    currentPrice: '₹5,999',
    originalPrice: '₹10,699',
    withGold: '₹5,291 with GGLD',
  },
  {
    image: '/images/phone5.jpg',
    off: '₹15,000 OFF',
    name: 'OnePlus Nord CE 2 Lite 5G - Refurbished',
    sale: 'Republic Day Sale',
    rating: 4.8,
    percentOff: '-61%',
    currentPrice: '₹9,599',
    originalPrice: '₹24,599',
    withGold: '₹8,819 with GGLD',
  },
];

const Devices: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }} >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2">
          Buy Refurbished Devices
        </Typography>
        <Typography variant="body1" color="primary" sx={{ cursor: 'pointer' }}>
          View All
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 7, flexWrap: 'wrap' }}>
        {devices.map((device, index) => (
          <Card key={index} sx={{ width: 250, position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: 8, left: 8, backgroundColor: '#E0F7FA', borderRadius: '50%', p: 1 }}>
              <CircleIcon sx={{ color: 'green' }} /> {/* Placeholder for CASHIFY Assured */}
            </Box>
            <CardMedia
              component="img"
              height="200"
              image={device.image}
              alt={device.name}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="error">
                {device.off}
              </Typography>
              <Typography variant="subtitle1">
                {device.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">{device.sale}</Typography>
                <Rating value={device.rating} precision={0.1} readOnly size="small" />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="body2" color="error">{device.percentOff}</Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>{device.currentPrice}</Typography>
                <Typography variant="body2" sx={{ ml: 1, textDecoration: 'line-through' }}>{device.originalPrice}</Typography>
              </Box>
              <Typography variant="body2" color="primary">
                {device.withGold}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Devices;