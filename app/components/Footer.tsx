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
        pt: 10,
        pb: 8,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
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

        {/* === NEW BOTTOM SECTION === */}
        <Box sx={{ mt: 10, pt: 5, borderTop: '1px solid #e0e0e0' }}>
          <Grid container spacing={6} alignItems="flex-start">
            {/* Registered Office + Disclaimer */}
            <Grid item xs={12} md={8}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, mb: 1, color: '#333' }}
              >
                Registered Office:
              </Typography>

              <Typography
                variant="caption"
                sx={{ lineHeight: 1.7, color: '#555', display: 'block' }}
              >
                Manak Waste Management Pvt Ltd. | 55, 2nd Floor, Lane-2, Westend
                Marg, Saidulajab, Near Saket Metro Station, New Delhi-110030,
                India.
                <br />
                Support-7290068900 | CIN: U46524DL2009PTC190441
                <br />
                Manak Waste Management Pvt Ltd. Is ISO 27001 &amp; 27701
                Compliance Certified. Person who may be contacted in case of any
                compliance related queries or grievances: Manoj Kumar
                <br />
                (grievanceofficer@cashify.in)
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  mt: 4,
                  display: 'block',
                  fontStyle: 'italic',
                  color: '#777',
                  lineHeight: 1.6,
                }}
              >
                ** All product names, logos, and brands are property of their
                respective owners. All company, product and service names used in
                this website are for identification purposes only. Use of these
                names, logos, and brands does not imply endorsement.
              </Typography>
            </Grid>

            {/* Safeguarded by DeviceSafety.org */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}
            >
              <Box
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  p: 2.5,
                  maxWidth: 300,
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* Circular Logo (approximated) */}
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      border: '3px solid #00BFA5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '9px',
                      fontWeight: 'bold',
                      color: '#00BFA5',
                      textAlign: 'center',
                      lineHeight: 1.1,
                      backgroundColor: '#fff',
                    }}
                  >
                    SAFEGUARDED
                    <br />
                    BY
                    <br />
                    DEVICESAFETY
                  </Box>

                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: '#222', mb: 0.5 }}
                    >
                      Safeguarded by DeviceSafety.org
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ lineHeight: 1.5, color: '#555' }}
                    >
                      All devices are data-wiped using DeviceSafety.org certified
                      tools, guaranteeing the highest standards of data security
                      and privacy.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="caption"
              sx={{ color: '#999', fontSize: '0.8rem' }}
            >
              Copyright © 2026 Cashify All rights reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;