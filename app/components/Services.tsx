import React from 'react';
import Image from 'next/image';
import {
  Container,
  Typography,
  Box,
  Card,
} from '@mui/material';

interface Service {
  name: string;
  imageSrc: string;
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
    <Container maxWidth="xl" sx={{ my: 6 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Our Services
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 4,
          justifyItems: 'center',
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 160, // Keeps each item compact
            }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 3, // Slightly rounded square (or '50%' for circle)
                overflow: 'hidden',
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.08)',
                  boxShadow: 8,
                },
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={service.imageSrc}
                  alt={`${service.name} service`}
                  fill
                  style={{ objectFit: 'contain', padding: '12px' }} // Padding for breathing room inside card
                  sizes="120px"
                  priority={index < 4} // Preload first few
                />
              </Box>
            </Card>

            <Typography
              variant="subtitle1"
              fontWeight="medium"
              mt={2}
              color="text.primary"
            >
              {service.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Services;