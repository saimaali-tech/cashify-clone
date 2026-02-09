'use client';

import React from 'react';
import { Box, Container } from '@mui/material';

const AppDownloadBanner = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: 1400,
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/casifyimage.png"           // ← Put your image here
          alt="Download the App Banner"
          sx={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 4,
            boxShadow: 4,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Container>
  );
};

export default AppDownloadBanner;