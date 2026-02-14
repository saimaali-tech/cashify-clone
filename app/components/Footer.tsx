'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Services',
      links: [
        'Sell Phone',
        'Sell Television',
        'Sell Smart Watch',
        'Sell Smart Speakers',
        'Sell DSLR Camera',
        'Sell Earbuds',
        'Repair Phone',
        'Buy Gadgets',
        'Recycle Phone',
        'Find New Phone',
        'Partner With Us',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Articles',
        'Press Releases',
        'Become Cashify Partner',
        'Become Supersale Partner',
        'Corporate Information',
      ],
    },
    {
      title: 'Sell Device',
      links: ['Mobile Phone', 'Laptop', 'Tablet', 'iMac', 'Gaming Consoles'],
    },
    {
      title: 'Help & Support',
      links: ['FAQ', 'Contact Us', 'Warranty Policy', 'Refund Policy'],
    },
    {
      title: 'More Info',
      links: [
        'Terms & Conditions',
        'Privacy Policy',
        'Terms of Use',
        'E-Waste Policy',
        'Cookie Policy',
        'What is Refurbished',
        'Device Safety',
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        color: '#555',
        pt: 8,
        pb: 6,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Logo + Social */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: '#00BFA5',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                }}
              >
                CASHIFY
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ mb: 2, fontWeight: 500, color: '#666' }}
            >
              Follow us on
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                sx={{
                  bgcolor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&:hover': { bgcolor: '#f5f5f5' },
                }}
              >
                <TwitterIcon sx={{ color: '#1DA1F2' }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                sx={{
                  bgcolor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&:hover': { bgcolor: '#f5f5f5' },
                }}
              >
                <FacebookIcon sx={{ color: '#1877F2' }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                sx={{
                  bgcolor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&:hover': { bgcolor: '#f5f5f5' },
                }}
              >
                <InstagramIcon sx={{ color: '#E1306C' }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://youtube.com"
                target="_blank"
                sx={{
                  bgcolor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&:hover': { bgcolor: '#f5f5f5' },
                }}
              >
                <YouTubeIcon sx={{ color: '#FF0000' }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Sections */}
          {sections.map((section) => (
            <Grid item xs={6} md={2} key={section.title}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#222',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                {section.title}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
                {section.links.map((link) => (
                  <MuiLink
                    key={link}
                    href="#"
                    underline="hover"
                    sx={{
                      color: '#666',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: '#00BFA5',
                      },
                    }}
                  >
                    {link}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Chat Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 8 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              backgroundColor: '#00BFA5',
              color: '#fff',
              borderRadius: 3,
              px: 4,
              py: 2.5,
              boxShadow: '0 10px 30px rgba(0, 191, 165, 0.25)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 35px rgba(0, 191, 165, 0.35)',
                backgroundColor: '#00a38d',
              },
            }}
          >
            <ChatBubbleOutlineIcon sx={{ fontSize: 32 }} />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, lineHeight: 1, mb: 0.3 }}
              >
                Chat with Us
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.9, fontSize: '0.8rem' }}>
                Got questions? Just ask.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;