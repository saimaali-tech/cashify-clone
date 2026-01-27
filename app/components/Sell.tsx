'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Typography, Box, Card } from '@mui/material';

interface Service {
  name: string;
  imageSrc: string; // Path relative to /public (starts with /)
}

const fullServices: Service[] = [
  { name: 'Sell Phone', imageSrc: '/images/sell1.jpg' },
  { name: 'Sell Laptop', imageSrc: '/images/sell2.jpg' },
  { name: 'Sell TV', imageSrc: '/images/sell3.jpg' },
  { name: 'Sell Tablet', imageSrc: '/images/sell4.jpg' },
  { name: 'Sell Gaming Consoles', imageSrc: '/images/sell5.jpg' },
  { name: 'Sell Smartwatch', imageSrc: '/images/sell6.jpg' },
  { name: 'Sell Smart Speakers', imageSrc: '/images/7.jpg' },
  { name: 'Sell Camera', imageSrc: '/images/sell1.jpg' },
  { name: 'Sell Headphones', imageSrc: '/images/sell2.jpg' },
  { name: 'Sell Printer', imageSrc: '/images/sell3.jpg' },
  { name: 'Sell Accessories', imageSrc: '/images/sell4.jpg' },
];

const Sell: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedServices = showMore ? fullServices : fullServices.slice(0, 7);

  return (
    <Container maxWidth="xl" sx={{ my: 6 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Sell Your Old Device Now
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',   // 2 columns on mobile
            sm: 'repeat(3, 1fr)',    // 3 on small
            md: 'repeat(4, 1fr)',    // 4 on medium
            lg: 'repeat(5, 1fr)',    // 5 on large (adjust if needed)
          },
          gap: 4,
          justifyItems: 'center',
        }}
      >
        {displayedServices.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 160,
            }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 3, // Rounded square; change to '50%' for circle
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
                  alt={`Sell ${service.name.toLowerCase()} service`}
                  fill
                  style={{ objectFit: 'contain', padding: '12px' }} // Padding avoids edge cropping
                  sizes="120px"
                  priority={index < 4} // Preload first few for better LCP
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

        {!showMore && (
          <Box
            onClick={() => setShowMore(true)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 160,
              cursor: 'pointer',
            }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
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
                  src="/images/more-services.jpg" // Add this image to public/images/
                  alt="More devices to sell"
                  fill
                  style={{ objectFit: 'contain', padding: '12px' }}
                  sizes="120px"
                />
              </Box>
            </Card>

            <Typography
              variant="subtitle1"
              fontWeight="medium"
              mt={2}
              color="text.primary"
            >
              Sell More
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Sell;