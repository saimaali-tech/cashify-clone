import React from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Paper,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Placeholder phone images from Unsplash (resized for the card)
// Replace with your own images if needed
const phoneImages = {
  buyback: [
    'https://images.unsplash.com/photo-1745848413099-13adc3aaf308?fm=jpg&q=60&w=70&h=140&fit=crop',
    'https://images.unsplash.com/photo-1598965402089-897ce52e8355?fm=jpg&q=60&w=70&h=140&fit=crop',
    'https://images.unsplash.com/photo-1557576902-671136754c97?fm=jpg&q=60&w=70&h=140&fit=crop',
  ],
  exchange: [
    'https://images.unsplash.com/photo-1598965402089-897ce52e8355?fm=jpg&q=60&w=70&h=140&fit=crop',
    'https://images.unsplash.com/photo-1557576902-671136754c97?fm=jpg&q=60&w=70&h=140&fit=crop',
  ],
  refurbished: [
    'https://images.unsplash.com/photo-1745848413099-13adc3aaf308?fm=jpg&q=60&w=70&h=140&fit=crop',
    'https://images.unsplash.com/photo-1598965402089-897ce52e8355?fm=jpg&q=60&w=70&h=140&fit=crop',
  ],
  repair: [
    'https://images.unsplash.com/photo-1557576902-671136754c97?fm=jpg&q=60&w=70&h=140&fit=crop',
    'https://images.unsplash.com/photo-1598965402089-897ce52e8355?fm=jpg&q=60&w=70&h=140&fit=crop', // Replace second with a cracked phone image if desired
  ],
};

const deals = [
  {
    title: 'Buyback\nOffers',
    color: '#fff1f5', // Light pink
    images: phoneImages.buyback,
  },
  {
    title: 'Exchange\nOffers',
    color: '#e0f2f1', // Light teal
    images: phoneImages.exchange,
  },
  {
    title: 'Refurbished\nDevice\nOffers',
    color: '#f3e5f5', // Light purple
    images: phoneImages.refurbished,
  },
  {
    title: 'Repair\nOffers',
    color: '#fffde7', // Light yellow
    images: phoneImages.repair,
  },
];

const HotDealsSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: { xs: 2, md: 4 }, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
        Hot Deals
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Exciting offers for more value
      </Typography>

      <Grid container spacing={3}>
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

              {/* Images stacked with overlap at bottom-right */}
              <Box
                sx={{
                  mt: 'auto',
                  display: 'flex',
                  justifyContent: 'flex-end',
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
                      ml: imgIndex > 0 ? -3 : 0, // Overlap
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