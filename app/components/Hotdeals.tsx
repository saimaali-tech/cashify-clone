import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

// Local images from public/images folder
const phoneImages = {
  buyback: [
    '/images/deal1.jpg',

  ],
  exchange: [
    '/images/deal2.jpg',

  ],
  refurbished: [
    '/images/deal3.jpg',
  
  ],
  repair: [
    '/images/deal4.jpg',
    
  ],
};

const deals = [
  {
    title: 'Buyback\nOffers',
    color: '#fff1f5',
    images: phoneImages.buyback,
  },
  {
    title: 'Exchange\nOffers',
    color: '#e0f2f1',
    images: phoneImages.exchange,
  },
  {
    title: 'Refurbished\nDevice\nOffers',
    color: '#f3e5f5',
    images: phoneImages.refurbished,
  },
  {
    title: 'Repair\nOffers',
    color: '#fffde7',
    images: phoneImages.repair,
  },
];

const HotDealsSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: { xs: 2, md: 4 }, borderRadius: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'space-between' }}>
        Hot Deals
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 6, textAlign: 'space-between' }}>
        Exciting offers for more value
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {deals.map((deal, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: deal.color,
                borderRadius: 5,
                p: 1,
                height: 200, // Increased card height
                width:300,
                alignItems:'center',
                justifyItems:'center',
                position: 'relative',
                display: 'grid',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                  mb: 2,
                }}
              >
                {deal.title}
              </Typography>
              {/* Stacked overlapping images */}
              <Box
                sx={{
                  mt: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  position: 'relative',
                  height: 70, // Increased image container height
                  width:250,
                }}
              >
                {deal.images.map((src, imgIndex) => (
                  <Box
                    key={imgIndex}
                    component="img"
                    src={src}
                    alt="Phone"
                    sx={{
                      width: 160, // Fixed width (assuming typo from 1600)
                      height: 120, // Increased height for larger images
                      objectFit: 'contain', // Better scaling
                      borderRadius: 1.5,
                      boxShadow: 2,
                      position: 'absolute',
                      zIndex: deal.images.length - imgIndex,
                      left: imgIndex === 0 ? '10%' : '25%', // Adjusted for better centering/overlap
                      transform: imgIndex === 1 ? 'rotate(-5deg)' : 'none', // Optional tilt for dynamic look
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotDealsSection;