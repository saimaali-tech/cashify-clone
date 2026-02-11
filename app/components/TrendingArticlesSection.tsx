import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';

const trendingArticles = [
  {
    image: '/images/design-2026-02-03T10225.jpg',
    title: 'Moto G77 Camera Specs, Battery, and Performance: See All Details Here',
    description:
      'Moto G77. Yes, finally, Motorola has just dropped a camera maestro! Yes, finally, Motorola has launched a great camera value for the budget segment...',
    date: '30th Jan 2026',
  },
  {
    image: '/images/design-2026-02-03T13242.jpg',
    title: 'Samsung S26 Ultra Smart Localized Privacy Screen: Here’s How It Works',
    description:
      'Using your phone in public always come with a small risk...',
    date: '30th Jan 2026',
  },
  {
    image: '/images/design-2026-02-04T18252.jpg',
    title: 'Realme P4 Power Vs Vivo T4: Price Difference, Specs, All Details!',
    description:
      'I’ve been checking out some newly released smartphones...',
    date: '30th Jan 2026',
  },
];

const recentArticles = [
  {
    image: '/images/Apple.jpg',
    title: 'Cheapest Country To Buy MacBook In 2026: Global Price Comparison',
    date: '29th Jan 2026',
  },
  {
    image: '/images/OnePlus-Phone.jpg',
    title: 'How To Switch Off OnePlus Phone: A Quick Guide!',
    date: '29th Jan 2026',
  },
  {
    image: '/images/Exynos.jpg',
    title: 'Exynos 2700 VS Exynos 2600: Which Upcoming Samsung Chipset Is The Best?',
    date: '29th Jan 2026',
  },
  {
    image: '/images/OnePlus-15T.jpg',
    title: 'OnePlus 15T Features, Price And Launch Date In India!',
    date: '28th Jan 2026',
  },
];

const ArticlesSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
        p: { xs: 2, md: 4 },
        borderRadius: 2,
        maxWidth: 1400,        // ← Changed to 1400
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Trending Articles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1100,
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Trending Articles
        </Typography>
        <Button variant="text" color="primary" size="small">
          See all
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {trendingArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 0,
                borderRadius: 2,
                bgcolor: 'transparent',
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={article.image}
                alt={article.title}
                sx={{ borderRadius: 2 }}
              />
              <CardContent sx={{ p: 0, pt: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {article.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {article.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Articles - Now 2 per row, properly centered */}
     
     <Grid container spacing={4} justifyContent="center">
        {recentArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                boxShadow: 0,
                borderRadius: 3,
                bgcolor: 'transparent',
                height: 150,
                maxWidth: 680,           // Keeps cards nicely sized
                mx: 'auto',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 170,
                  height: 90,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mr: 2,
                  flexShrink: 0,
                }}
                image={article.image}
                alt={article.title}
              />
              <CardContent sx={{ p: 0, flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5, lineHeight: 1.3 }}>
                  {article.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {article.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticlesSection;