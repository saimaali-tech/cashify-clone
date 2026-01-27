import React from 'react';
import Image from 'next/image'; // ← Import this
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia, // Optional: if you want image as background/top
} from '@mui/material';

interface Service {
  name: string;
  imageSrc: string; // Path relative to /public (starts with /)
}

const services: Service[] = [
  { name: 'Sell Phone', imageSrc: '/images/service1.jpg' },
  { name: 'Buy Gadgets', imageSrc: '/images/service2.jpg' },
  { name: 'Buy Phone', imageSrc: '/images/service3.jpg' },
  { name: 'Buy Laptops', imageSrc: '/images/service4.jpg' },
  { name: 'Repair Phone', imageSrc: '/images/service5.jpg' },
  { name: 'Repair Laptop', imageSrc: '/images/service6.jpg' },
  { name: 'Find New Phone', imageSrc: '/images/service7.jpg' },
  { name: 'Nearby Stores', imageSrc: '/images/service8.jpg' },
  { name: 'Buy Smartwatches', imageSrc: '/images/service9.jpg' },
  { name: 'Recycle', imageSrc: '/images/service10.jpg' },
];

const Services: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Our Services
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',    // 2 columns on mobile
            sm: 'repeat(3, 1fr)',     // 3 on small tablets
            md: 'repeat(4, 1fr)',     // 4 on medium
            lg: 'repeat(5, 1fr)',     // 5 on large
          },
          gap: 2, // Better spacing
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            elevation={3} // Slight shadow for depth
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3,
              borderRadius: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
            }}
          >
            <Box sx={{ position: 'relative', width: 90, height: 90, mb: 1}}>
              <Image
                src={service.imageSrc}
                alt={`${service.name} service icon`}
                fill
                style={{ objectFit: 'contain' }} // Keeps aspect ratio, no cropping
                sizes="100px" // Helps with responsive optimization
                priority={index < 6} // Optional: preload first few for faster LCP
              />
            </Box>

            <Typography variant="subtitle1" fontWeight="bold">
              {service.name}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Services;