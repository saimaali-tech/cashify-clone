// components/Footer.tsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import Image from 'next/image';  // Add this import for Next.js Image

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f5f5f5',          // light gray like many e-commerce sites
        color: 'text.secondary',
        pt: 6,
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        {/* Add Logo Here - Assuming your logo file is in /public/logo.png (replace path if needed) */}
        <Box sx={{ mb: 4 }}>
          <Image
            src="/image563.jpg"  // Path to your logo in the public folder (e.g., public/logo.png)
            alt="Cashify Logo"
            width={100}     // Adjust width/height to match the image size/style
            height={40}
            priority        // Optional: for faster loading
          />
        </Box>

        {/* Main links grid - 5 columns on desktop */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* Column 1: Services */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.primary">
              Services
            </Typography>
            <Stack spacing={1}>
              {[
                'Sell Phone', 'Sell Television', 'Sell Smart Watch', 'Sell Smart Speakers',
                'Sell DSLR Camera', 'Sell Earbuds', 'Repair Phone', 'Buy Gadgets',
                'Recycle Phone', 'Find New Phone', 'Partner With Us',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: '0.95rem' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 2: Company */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.primary">
              Company
            </Typography>
            <Stack spacing={1}>
              {[
                'About Us', 'Careers', 'Articles', 'Press Releases',
                'Become Cashify Partner', 'Become Supersale Partner',
                'Corporate Information',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: '0.95rem' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Sell Device */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.primary">
              Sell Device
            </Typography>
            <Stack spacing={1}>
              {[
                'Mobile Phone', 'Laptop', 'Tablet', 'iMac',
                'Gaming Consoles',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: '0.95rem' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Help & Support */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.primary">
              Help & Support
            </Typography>
            <Stack spacing={1}>
              {[
                'FAQ', 'Contact Us', 'Warranty Policy', 'Refund Policy',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: '0.95rem' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 5: More Info */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="text.primary">
              More Info
            </Typography>
            <Stack spacing={1}>
              {[
                'Terms & Conditions', 'Privacy Policy', 'Terms of Use',
                'E-Waste Policy', 'Cookie Policy', 'What is Refurbished',
                'Device Safety',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: '0.95rem' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Social icons row */}
        <Box sx={{ mt: 5, mb: 3, textAlign: 'center' }}>
          <Typography variant="body2" gutterBottom>
            Follow us on
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton color="primary" aria-label="twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" aria-label="facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary" aria-label="youtube">
              <YouTubeIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Bottom legal section */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body2" gutterBottom>
            <strong>Registered Office:</strong><br />
            Manak Waste Management Pvt Ltd. | 55, 2nd Floor, Lane-2, Westend Marg, Saidullajab,
            Near Saket Metro Station, New Delhi-110030, India
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Support: 7290068900 | CIN: U46524DL2009PTC190441
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
            ISO 27001 & 27701 Compliance Certified.
          </Typography>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Person who may be contacted in case of any compliance related queries or grievances:{' '}
            <Link href="mailto:grievanceofficer@cashify.in" color="inherit">
              Manoj Kumar (grievanceofficer@cashify.in)
            </Link>
          </Typography>

          <Typography variant="caption" display="block" sx={{ mt: 3, opacity: 0.7 }}>
            ** All product names, logos, and brands are property of their respective owners. All
            company, product and service names used in this website are for identification purposes
            only. Use of these names, logos, and brands does not imply endorsement.
          </Typography>

          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Copyright © 2026 Cashify All rights reserved
          </Typography>

          {/* Optional: you can add DeviceSafety badge as image or icon here */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;