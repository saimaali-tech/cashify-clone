
import { Box, Typography, Card, CardMedia, CardContent, Link, Rating } from '@mui/material';

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
    <Box sx={{ padding: 10}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" >
          Refurbished Laptops
        </Typography>
        <Link href="#" color="primary" underline="hover">
          View All
        </Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: 3 }}>
        {laptops.map((laptop) => (
          <Card key={laptop.id} sx={{ minWidth: 300, maxWidth: 300, position: 'relative' }}>
         
            <Box
              
             
            />
            <CardMedia
              component="img"
              height="100"
              image={laptop.image}
              alt={laptop.name}
            />
            <CardContent sx={{ padding: 1 }}>
              <Typography variant="body2" color="error" gutterBottom>
                {laptop.off}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {laptop.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="caption" sx={{ mr: 0.5 }}>
                  Lowest Price
                </Typography>
                <Rating value={laptop.rating} precision={0.1} readOnly size="small" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="caption" color="success" sx={{ mr: 0.5 }}>
                  {laptop.discount}
                </Typography>
                <Typography variant="caption" sx={{ textDecoration: 'line-through', mr: 0.5 }}>
                  {laptop.originalPrice}
                </Typography>
                <Typography variant="caption">
                  {laptop.discountedPrice}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary">
                {laptop.finalPrice}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RefurbishedLaptops;