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
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom >
        Our Services
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',      // 2 columns on mobile
            sm: 'repeat(3, 1fr)',       // 3 on small tablets
            md: 'repeat(4, 1fr)',       // 4 on medium screens
            lg: 'repeat(8, minmax(0, 1fr))',  // 8 columns on large screens → 8 in first row, 2 in second
            xl: 'repeat(8, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 3 },
          justifyItems: 'center',
          alignContent: 'start', // prevents stretching
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: 150,
              width: '100%',
            }}
          >
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                width: 150,
                height: 150,
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
                  style={{ objectFit: 'contain', padding: '12px' }}
                  sizes="(max-width: 600px) 140px, 150px"
                  priority={index < 4}
                />
              </Box>
            </Card>

            <Typography
              variant="subtitle1"
              fontWeight="medium"
              mt={2}
              color="text.primary"
              align="center"
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