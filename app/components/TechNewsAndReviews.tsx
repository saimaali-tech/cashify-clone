'use client';

import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Sample data (replace images with your own from public/media/image/)
const newsItems = [
  {
    id: 1,
    title: "iPhone 17 Drops To Rs 47,742 In Croma Valentine's Day Sale",
    desc: "Croma's Valentine's Day sale brings exciting discounts on electronics...",
    date: "8th Feb 2026",
    image: "/images/1200x600-6-2.jpg", // ← replace with your image
  },
  {
    id: 2,
    title: "HarmonyOS 6 Beta Devices List 2026: Check Supported Phones",
    desc: "Huawei launches HarmonyOS 6 developer beta access for developers...",
    date: "8th Feb 2026",
    image: "/images/1200x600-8-2.jpg",
  },
  {
    id: 3,
    title: "Google Pixel 9a Gets Massive Price Drop In India Ahead Of Pixel 10a",
    desc: "Google brings exciting news for budget smartphone buyers in India...",
    date: "8th Feb 2026",
    image: "/images/1200x600-10-2 (1).jpg",
  },
  {
    id: 4,
    title: "Tecno Pova Curve 2 5G To Launch In India Soon: 8000mAh Battery",
    desc: "Tecno Pova Curve 2 launch excites budget smartphone fans in India...",
    date: "8th Feb 2026",
    image: "/images/1200x600-10-2.jpg",
  },
  {
    id: 5,
    title: "OnePlus 13 Series Launch Date Confirmed",
    desc: "OnePlus is all set to bring flagship killers with Snapdragon 8 Gen 4...",
    date: "7th Feb 2026",
    image: "/images/1200x600-12-2.jpg",
  },
  {
    id: 6,
    title: "Samsung Galaxy S26 Ultra Leaks: Major Camera Upgrade Expected",
    desc: "New leaks suggest 200MP main sensor and improved AI features...",
    date: "6th Feb 2026",
    image: "/images/1200x600-14-1.jpg",
  },
];

const reviewItems = [
  {
    id: 1,
    title: "Xiaomi Redmi Note 15 Pro 5G Review: Is This The New Mid-Ranger King?",
    desc: "We tested the latest Redmi Note series with improved camera and performance.",
    date: "6th Feb 2026",
    image: "/images/Best-Big-Screen-Mobile-Phones-To.jpg",
  },
  {
    id: 2,
    title: "Realme P4 Power Review: The 10,001mAh Battery Beast",
    desc: "Realme brings massive battery life in the mid-range segment.",
    date: "30th Jan 2026",
    image: "/images/1200x600-12-2.jpg",
  },
  {
    id: 3,
    title: "Vivo X200T Review: A True Near-Flagship Experience in 2026",
    desc: "Vivo's new X series offers premium design and camera performance.",
    date: "30th Jan 2026",
    image: "/images/design-2026-02-03T13242.jpg",
  },
  {
    id: 4,
    title: "Redmi Note 15 5G Review: A Safe Choice for Camera-First Buyers",
    desc: "Balanced performance with excellent daylight photography.",
    date: "19th Jan 2026",
    image: "/images/design-2026-02-04T18252.jpg",
  },
  {
    id: 5,
    title: "iQOO Neo 10 Review: Gaming Performance Monster",
    desc: "Best cooling system and 144Hz display in this price range.",
    date: "15th Jan 2026",
    image: "/images/OnePlus-15T.jpg",
  },
  {
    id: 6,
    title: "Motorola Edge 60 Review: Clean Android Experience",
    desc: "Stock Android with excellent build quality and fast charging.",
    date: "10th Jan 2026",
    image: "/images/OnePlus-Phone.jpg",
  },
];

const HorizontalCarousel = ({ items, title }: { items: any[]; title: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Scroll by 2 cards (≈ 2 × (card width + gap))
      const scrollAmount = 620; // Adjust if needed (280px card + 30px gap × 2)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" fontWeight={500}>
          {title}
        </Typography>
        <Typography color="primary" sx={{ cursor: 'pointer', fontWeight: 500 }}>
          See all →
        </Typography>
      </Box>

      {/* Carousel Container */}
      <Box sx={{ position: 'relative' }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: -50,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'white',
            boxShadow: 3,
            '&:hover': { bgcolor: '#f5f5f5' },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Scrollable Cards */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            pb: 2,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              sx={{
                minWidth: 200,
                flexShrink: 0,
                borderRadius: 3,
                boxShadow: 2,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-8px)' },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom lineHeight={1.3}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {item.desc}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.date}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: -50,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'white',
            boxShadow: 3,
            '&:hover': { bgcolor: '#f5f5f5' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

// Main Component
export default function TechNewsAndReviews() {
  return (
    <Box sx={{ maxWidth: 1300, mx: 'auto', px: 3, py: 4 }}>
      <HorizontalCarousel items={newsItems} title="Recent News" />
      <HorizontalCarousel items={reviewItems} title="Recent Reviews" />
    </Box>
  );
}