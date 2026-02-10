'use client';

import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function CashifyContent() {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        py: { xs: 6, md: 10 },
        maxWidth: 900,           // Good readability width
        mx: 'auto',
        px: { xs: 3, md: 4 }
      }}
    >
      <Box>
        {/* Main Title */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          fontWeight={600}
          sx={{ mb: 4, fontSize: { xs: '1.5rem', md: '2.5rem' } }}
        >
          Sell Your Old Phone & Buy Old Mobile Phones with Cashify
        </Typography>

        {/* First Paragraph */}
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.2rem', lineHeight: 1.85, color: '#333' }}
        >
          Cashify is the best platform if you are looking to sell your old mobile phone. It offers a hassle-free experience, and you can sell your old mobile phone in less than five minutes.
        </Typography>

        {/* Second Paragraph */}
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.2rem', lineHeight: 1.85, color: '#333' }}
        >
          When you sell an old mobile phone with Cashify, you can easily upgrade to a new one. Cashify ensures that the phones you sell are in top condition so that people get good quality when they buy them.
        </Typography>

        {/* Sell Your Old Phone Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          fontWeight={600}
          sx={{ mt: 7, mb: 3 }}
        >
          Sell Your Old Phone
        </Typography>

        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.2rem', lineHeight: 1.85, color: '#333' }}
        >
          Ready to sell old mobile phone? With Cashify, you can easily get cash for your old mobile phone without leaving home. Just share your phone's details, and we'll offer you the best price. It's that simple:
        </Typography>

        <List sx={{ mt: 2 }}>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary="• Get an Instant Quote: Enter your phone's details on our website or app." 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary="• Free Home Pickup: Book a convenient time, and we'll pick up your phone from your doorstep." 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary="• Instant Cash Payment: Receive cash on the spot upon pickup." 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
        </List>

        {/* Brands Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          fontWeight={600}
          sx={{ mt: 8, mb: 3 }}
        >
          Which Mobile Phone Brands Can Be Sold and Bought On Cashify?
        </Typography>

        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.2rem', lineHeight: 1.85, color: '#333' }}
        >
          You can buy or sell almost all mobile phone brands in India. Popular laptops, tablets, and gaming consoles are also available on the go. Cashify has more than 20 phone brands, and for every device you sell. Apart from this, we offer:
        </Typography>

        <List sx={{ mt: 2 }}>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary="• Assured sale at best price" 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary=" • Hassle free" 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
           <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary=" • Free home pick up" 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
            <ListItem sx={{ pl: 0 }}>
            <ListItemText 
              primary=" • Instant cash payment on pickup" 
              sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
            />
          </ListItem>
          
        </List>
      </Box>
    </Container>
  );
}