import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AppleIcon from '@mui/icons-material/Apple';

const Testimonials = () => {
  const brands = ['Vivo', 'SAMSUNG', 'Apple', 'realme', 'Oppo', 'mi', 'vijay sales', 'Reliance digital', 'HP', 'Paytm', 'NOKIA'];

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Trusted by 17.14 Lac + Happy Users and Major Brands since 2015
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item>
            <Typography variant="h6" align="center">
              ₹12835.12Cr.
            </Typography>
            <Typography variant="body2" align="center">
              Cash Given
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              190.15Lac
            </Typography>
            <Typography variant="body2" align="center">
              Gadgets Encashed
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: 2, pb: 2 }}>
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3, minWidth: 250, maxWidth: 300, flexShrink: 0 }}>
              <CardContent>
                <FormatQuoteIcon sx={{ color: '#00b8d4', fontSize: 40 }} />
                <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                  {testimonial.quote}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle2">{testimonial.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: '#26c6da', py: 1, mt: 4 }}>
          <Box
            sx={{
              display: 'inline-block',
              animation: 'marquee 30s linear infinite',
              '@keyframes marquee': {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {brands.map((brand, index) => (
              <Typography key={index} variant="h6" component="span" sx={{ mx: 2, color: '#fff' }}>
                {brand === 'Apple' ? <AppleIcon sx={{ verticalAlign: 'middle', fontSize: '1.5em' }} /> : brand}
              </Typography>
            ))}
            {brands.map((brand, index) => (
              <Typography key={`dup-${index}`} variant="h6" component="span" sx={{ mx: 2, color: '#fff' }}>
                {brand === 'Apple' ? <AppleIcon sx={{ verticalAlign: 'middle', fontSize: '1.5em' }} /> : brand}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const testimonialsData = [
  {
    quote: 'Sold off my phone very easily and got the payment on the spot. Best experience so far.',
    name: 'Tarun Singh Verma',
    location: 'New Delhi',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
  },
  {
    quote: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.',
    name: 'Karan Sharma',
    location: 'Delhi NCR',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
  },
  {
    quote: 'No complaints, sold my phone very easily here. Definitely worth a try.',
    name: 'Abhiyash',
    location: 'New Delhi',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
  },
  {
    quote: 'Payment was very instant and the whole process was quick. Will recommend it.',
    name: 'Vinit Kumar',
    location: 'New Delhi',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
  },
];

export default Testimonials;