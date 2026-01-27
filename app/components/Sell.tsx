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
  { name: 'Sell Smart Speakers', imageSrc: '/images/sell7.jpg' },
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
      <Typography variant="h3" component="h2" gutterBottom >
        Sell Your Old Device Now
      </Typography>

      {/* Changed to flex for single horizontal line on large screens */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: {
            xs: 'wrap',   // wrap on mobile/tablet
            lg: 'nowrap', // ONE LINE on large screens and up
          },
          overflowX: {
            lg: 'auto',   // horizontal scroll if needed on large screens
          },
          gap: 6,         // slightly larger gap for better spacing
          justifyContent: 'center',
          alignItems: 'flex-start',
          pb: { lg: 3 },  // extra padding for scrollbar (if visible)
          scrollSnapType: { lg: 'x mandatory' }, // optional: smooth snapping
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
              maxWidth: 180,
              flex: '0 0 auto', // prevent shrinking/growing → fixed width per card
              scrollSnapAlign: 'center', // optional: nice scroll snap
            }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                width: 140,
                height: 140,
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
                  style={{ objectFit: 'contain', padding: '12px' }}
                  sizes="140px"
                  priority={index < 4}
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
              maxWidth: 180, // made same width as others for consistency
              flex: '0 0 auto',
              cursor: 'pointer',
              scrollSnapAlign: 'center',
            }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                width: 150, // made same size as other cards
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
                  src="/images/more-services.jpg"
                  alt="More devices to sell"
                  fill
                  style={{ objectFit: 'contain', padding: '12px' }}
                  sizes="140px"
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