import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AppleIcon from '@mui/icons-material/Apple';

const testimonialsData = [
  {
    quote: 'Sold off my phone very easily and got the payment on the spot. Best experience so far.',
    name: 'Tarun Singh Verma',
    location: 'New Delhi',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    quote: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.',
    name: 'Karan Sharma',
    location: 'Delhi NCR',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    quote: 'No complaints, sold my phone very easily here. Definitely worth a try.',
    name: 'Abhiyash',
    location: 'New Delhi',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    quote: 'Payment was very instant and the whole process was quick. Will recommend it.',
    name: 'Vinit Kumar',
    location: 'New Delhi',
    avatar: 'https://via.placeholder.com/40',
  },
];

const Testimonials = () => {
  const brands = ['Vivo', 'SAMSUNG', 'Apple', 'realme', 'Oppo', 'mi', 'vijay sales', 'Reliance digital', 'HP', 'Paytm', 'NOKIA'];

  return (
    <>
      {/* Full Width Black Section */}
      <Box sx={{ 
        backgroundColor: '#000', 
        color: '#fff', 
        py: 5,
        width: '100%',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          maxWidth: 1500, 
          mx: 'auto', 
          px: { xs: 3, md: 6 } 
        }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold' }}
          >
            Trusted by 17.14 Lac + Happy Users and Major Brands since 2015
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6} md={3} textAlign="center">
              <Typography variant="h5" fontWeight="bold">
                ₹12835.12Cr.
              </Typography>
              <Typography variant="body2" color="grey.400">
                Cash Given
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} textAlign="center">
              <Typography variant="h5" fontWeight="bold">
                190.15Lac
              </Typography>
              <Typography variant="body2" color="grey.400">
                Gadgets Encashed
              </Typography>
            </Grid>
          </Grid>

          {/* Testimonials Horizontal Scroll */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              overflowX: 'auto', 
              gap: 3, 
              pb: 3,
              scrollSnapType: 'x mandatory',
              '&::-webkit-scrollbar': { height: 8 },
              '&::-webkit-scrollbar-thumb': { backgroundColor: '#555', borderRadius: 4 }
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <Card 
                key={index} 
                sx={{ 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: 3, 
                  boxShadow: 4, 
                  minWidth: 280, 
                  maxWidth: 320, 
                  flexShrink: 0,
                  scrollSnapAlign: 'center'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteIcon sx={{ color: '#00b8d4', fontSize: 48, opacity: 0.6 }} />
                  <Typography variant="body1" sx={{ mt: 2, mb: 3, lineHeight: 1.6 }}>
                    {testimonial.quote}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={testimonial.avatar} sx={{ mr: 2, width: 48, height: 48 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Full Width Marquee */}
      <Box sx={{ 
        overflow: 'hidden', 
        whiteSpace: 'nowrap', 
        backgroundColor: '#26c6da', 
        py: 1.5 
      }}>
        <Box
          sx={{
            display: 'inline-block',
            animation: 'marquee 20s linear infinite',
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {brands.map((brand, index) => (
            <Typography 
              key={index} 
              variant="h6" 
              component="span" 
              sx={{ mx: 4, color: '#fff', fontWeight: 500 }}
            >
              {brand === 'Apple' ? (
                <AppleIcon sx={{ verticalAlign: 'middle', fontSize: '1.6em', mr: 1 }} />
              ) : brand}
            </Typography>
          ))}
          {brands.map((brand, index) => (
            <Typography 
              key={`dup-${index}`} 
              variant="h6" 
              component="span" 
              sx={{ mx: 4, color: '#fff', fontWeight: 500 }}
            >
              {brand === 'Apple' ? (
                <AppleIcon sx={{ verticalAlign: 'middle', fontSize: '1.6em', mr: 1 }} />
              ) : brand}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;