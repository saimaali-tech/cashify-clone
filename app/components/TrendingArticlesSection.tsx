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
    image: '/images/Samsung-Galaxy.jpg', // For Moto G77
    title: 'Moto G77 Camera Specs, Battery, and Performance: See All Details Here',
    description:
      'Moto G77. Yes, finally, Motorola has just dropped a camera maestro! Yes, finally, Motorola has launched a great camera value for the budget segment. Motorola is coming up with the new Moto G77. The phone got announced this week, and in just two days, the whole social media community started talking about this phone. This phone is among the...',
    date: '30th Jan 2026',
  },
  {
    image: '/images/Samsung-Galaxy (1).jpg',
    title: 'Samsung S26 Ultra Smart Localized Privacy Screen: Here’s How It Works',
    description:
      'Using your phone in public always come with a small risk. Whether you’re checking messages in a crowded metro, replying to a work email in a cafe, or opening a banking app while standing in line, your screen is visible to people around you. Until now, smartphone privacy features used to...',
    date: '30th Jan 2026',
  },
  {
    image: '/images/Realme-P4.jpg',
    title: 'Realme P4 Power Vs Vivo T4: Price Difference, Specs, All Details!',
    description:
      'I’ve been checking out some newly released smartphones, the Realme P4 Power Vs Vivo T4 are standing out! They are great and it’s confusing to choose between them. I found that both of them are crazy powerful for mid-range phones. The Realme P4 Power is great if you care about long use, because it...',
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      {/* Trending Articles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Trending Articles
        </Typography>
        <Button variant="text" color="primary" size="small">
          See all
        </Button>
      </Box>
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
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

      {/* Recent Articles */}
      <Grid container spacing={7} justifyContent="center">
        {recentArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                // display: 'flex',
                alignItems: 'center',
                boxShadow: 0,
                borderRadius: 3,
                bgcolor: 'transparent',
                height: 150,
                
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 150,
                  height: 100,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mr: 2,
                }}
                image={article.image}
                alt={article.title}
              />
              <CardContent sx={{ p: 0, flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5, lineHeight: 1.2 }}>
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