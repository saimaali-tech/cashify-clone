import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Link, Rating } from '@mui/material';

const laptops = [
  {
    id: 1,
    image: '/images/laptop1.jpg',
    off: '₹48,000 OFF',
    name: 'Apple MacBook Pro 2023 A2779 Apple M2 Pro Chip 1..',
    rating: 4.6,
    discount: '-32%',
    originalPrice: '₹1,00,999',
    discountedPrice: '₹49,999',
    finalPrice: '₹98,391 with GOLD',
  },
  {
    id: 2,
    image: '/images/laptop2.jpg',
    off: '₹61,300 OFF',
    name: 'Apple MacBook Pro 2021 A2485 (Apple M1 Pro Chip 16..',
    rating: 4.7,
    discount: '-46%',
    originalPrice: '₹77,699',
    discountedPrice: '₹39,999',
    finalPrice: '₹75,557 with GOLD',
  },
  {
    id: 3,
    image: '/images/laptop3.jpg',
    off: '₹64,300 OFF',
    name: 'Apple MacBook Pro 2021 a2442 (Apple M1 Pro Chip 14..',
    rating: 4.4,
    discount: '-48%',
    originalPrice: '₹70,699',
    discountedPrice: '₹34,999',
    finalPrice: '₹68,697 with GOLD',
  },
  {
    id: 4,
    image: '/images/laptop4.jpg',
    off: '₹55,000 OFF',
    name: 'Apple MacBook Air 2022 M2 Chip 13-inch..',
    rating: 4.8,
    discount: '-40%',
    originalPrice: '₹85,999',
    discountedPrice: '₹45,999',
    finalPrice: '₹82,345 with GOLD',
  },
];

const RefurbishedLaptops = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" component="h2">
          Refurbished Laptops
        </Typography>
        <Link href="#" color="primary" underline="hover">
          View All
        </Link>
      </Box>
      <Grid container spacing={2}>
        {laptops.map((laptop) => (
          <Grid item xs={12} sm={6} md={3} key={laptop.id}>
            <Card sx={{ position: 'relative' }}>
              {/* Logo - Assuming a placeholder, replace with actual image if needed */}
              <Box
                component="img"
                src="https://via.placeholder.com/50?text=CASHIFY" // Replace with actual CASHIFY logo URL
                alt="CASHIFY"
                sx={{ position: 'absolute', top: 8, left: 8, width: 50, height: 50 }}
              />
              <CardMedia
                component="img"
                height="200"
                image={laptop.image}
                alt={laptop.name}
              />
              <CardContent>
                <Typography variant="h6" color="error" gutterBottom>
                  {laptop.off}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {laptop.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    Lowest Price
                  </Typography>
                  <Rating value={laptop.rating} precision={0.1} readOnly size="small" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="success" sx={{ mr: 1 }}>
                    {laptop.discount}
                  </Typography>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', mr: 1 }}>
                    {laptop.originalPrice}
                  </Typography>
                  <Typography variant="body2">
                    {laptop.discountedPrice}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="primary">
                  {laptop.finalPrice}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RefurbishedLaptops;