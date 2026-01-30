import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogSections = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        {/* First Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000' }}>
            Better For Pocket. Buy Refurbished
          </Typography>
          <Link href="#" underline="none" sx={{ color: '#00b8d4' }}>
            See all
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2, pb: 2 }}>
          {buyRefurbishedData.map((item, index) => (
            <Card key={index} sx={{ minWidth: 250, maxWidth: 300, flexShrink: 0, borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Second Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000' }}>
            Be Smart. Sell Smart
          </Typography>
          <Link href="#" underline="none" sx={{ color: '#00b8d4' }}>
            See all
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2, pb: 2 }}>
          {sellSmartData.map((item, index) => (
            <Card key={index} sx={{ minWidth: 250, maxWidth: 300, flexShrink: 0, borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const buyRefurbishedData = [
  {
    title: 'Top 5 Refurbished Smartwatches To Buy Right Now',
    image: 'https://via.placeholder.com/300x140?text=Smartwatches', // Replace with actual image URL
  },
  {
    title: 'What Is Cashify Split Payment? Features, Benefits, All Details',
    image: 'https://via.placeholder.com/300x140?text=Split+Payment', // Replace with actual image URL
  },
  {
    title: 'Best Refurbished Gaming Laptops You Can Buy Under Rs. 50,000: Top Picks!',
    image: 'https://via.placeholder.com/300x140?text=Gaming+Laptops', // Replace with actual image URL
  },
  {
    title: 'Surprising Reasons To Get Google Pixel 9 Pro XL Refurbished',
    image: 'https://via.placeholder.com/300x140?text=Pixel+9+Pro+XL', // Replace with actual image URL
  },
];

const sellSmartData = [
  {
    title: 'MacBook Pro 2025 vs MacBook Air 2025: Which Is A Better Resale Choice?',
    image: 'https://via.placeholder.com/300x140?text=MacBook+Pro+vs+Air', // Replace with actual image URL
  },
  {
    title: 'HP Notebook Series vs Lenovo IdeaPad: Retains Value?',
    image: 'https://via.placeholder.com/300x140?text=HP+vs+Lenovo', // Replace with actual image URL
  },
  {
    title: 'ZBook Firefly vs ZBook 6 Series vs ZBook 8 Series',
    image: 'https://via.placeholder.com/300x140?text=ZBook+Series', // Replace with actual image URL
  },
  {
    title: 'ZBook 8 Series vs MacBook Pro: Which Is Better Buyback Investment?',
    image: 'https://via.placeholder.com/300x140?text=ZBook+vs+MacBook', // Replace with actual image URL
  },
];

export default BlogSections;