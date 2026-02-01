// components/HotDealsSection.tsx
import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const deals = [
  {
    title: 'Buyback Offers',
    color: '#ff80ab', // pinkish
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80', // placeholder phones
  },
  {
    title: 'Exchange Offers',
    color: '#80d8ff', // cyan
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80',
  },
  {
    title: 'Refurbished Device Offers',
    color: '#ce93d8', // purple
    imageUrl: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?auto=format&fit=crop&q=80',
  },
  {
    title: 'Repair Offers',
    color: '#fff59d', // yellow
    imageUrl: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80',
  },
  // Add more if needed
];

const HotDealsSection: React.FC = () => {
  const theme = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ py: 4, px: 2, bgcolor: 'background.default' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Hot Deals
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Exciting offers for more value
        </Typography>
      </Box>

      {/* Carousel-like horizontal scroll container */}
      <Box sx={{ position: 'relative' }}>
        {/* Left Arrow */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: 'absolute',
            left: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'background.paper',
            boxShadow: 3,
            '&:hover': { bgcolor: 'grey.200' },
            display: { xs: 'none', md: 'flex' }, // hide on mobile if you want
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Scrollable content */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            pb: 2,
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', // hide scrollbar Firefox
            '&::-webkit-scrollbar': { display: 'none' }, // hide scrollbar Chrome/Safari
            px: { xs: 2, md: 0 },
          }}
        >
          {deals.map((deal, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 280,
                maxWidth: 320,
                flexShrink: 0,
                borderRadius: 4,
                overflow: 'hidden',
                bgcolor: deal.color,
                color: 'white',
                position: 'relative',
                scrollSnapAlign: 'start',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: 4,
              }}
            >
              {/* Gradient overlay for text readability */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)',
                }}
              />

              {/* Image */}
              <Box
                component="img"
                src={deal.imageUrl}
                alt={deal.title}
                sx={{
                  width: '100%',
                  height: 280,
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              {/* Text + arrow */}
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  right: 16,
                  p: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {deal.title}
                </Typography>
                <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)' }}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={scrollRight}
          sx={{
            position: 'absolute',
            right: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'background.paper',
            boxShadow: 3,
            '&:hover': { bgcolor: 'grey.200' },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HotDealsSection;