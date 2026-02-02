import React from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Paper,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Use local images from the public folder
// Assigning the provided images to the deals; repeating/adjusting arrays as needed to match the original structure
const phoneImages = {
  buyback: [
    '/images/deal1.jpg',
    '/images/deal2.jpg',
    '/images/deal1.jpg',
  ],
  exchange: [
    '/images/deal2.jpg',
    '/images/deal3.jpg',
  ],
  refurbished: [
    '/images/deal1.jpg',
    '/images/deal2.jpg',
  ],
  repair: [
    '/images/deal3.jpg',
    // '/images/deal4.jpg', // Used deal4 here to incorporate all provided images
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
    <Box sx={{ bgcolor: '#f5f5f5', p: { xs: 2, md: 4 }, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
        Hot Deals
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Exciting offers for more value
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {deals.map((deal, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: deal.color,
                borderRadius: 3,
                p: 2,
                height: 220,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  whiteSpace: 'pre-line',
                }}
              >
                {deal.title}
              </Typography>
              {/* Images stacked with overlap, centered */}
              <Box
                sx={{
                  mt: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  position: 'relative',
                  height: 120,
                }}
              >
                {deal.images.map((src, imgIndex) => (
                  <Box
                    key={imgIndex}
                    component="img"
                    src={src}
                    alt="Phone"
                    sx={{
                      width: 70,
                      height: 140,
                      objectFit: 'cover',
                      borderRadius: 1,
                      boxShadow: 1,
                      position: 'relative',
                      left: `${(deal.images.length - 1) * -15}px`, // Adjust overlap for centering
                      ml: imgIndex === 0 ? `${(deal.images.length - 1) * 15}px` : -3, // Center the stack
                      zIndex: deal.images.length - imgIndex,
                    }}
                  />
                ))}
              </Box>
              {/* Arrow button */}
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  right: 12,
                  bgcolor: 'white',
                  '&:hover': { bgcolor: 'white' },
                  boxShadow: 1,
                }}
                size="small"
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotDealsSection;