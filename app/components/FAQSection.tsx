'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Link,
  Tabs,
  Tab,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = {
  SellSmart: [
    'What should I do if my Amazon voucher shows "Already Redeemed"?',
    'What documents do you need to sell old mobile phone on Cashify?',
    'What if my pickup is delayed?',
  ],
  SmartBuy: [
    'How do I exchange my old device for a new one?',
    'What is the process for buying refurbished devices?',
    'Are there any warranties on SmartBuy products?',
  ],
  'Repair/Others': [
    'How long does a repair take?',
    'What types of repairs do you offer?',
    'How can I track my repair status?',
  ],
};

const FAQSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('SellSmart');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const faqs = faqData[selectedTab as keyof typeof faqData];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Frequently Asked Questions
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              minWidth: 'auto',
              px: 2,
              py: 0.5,
              borderRadius: 20,
              mr: 1,
            },
            '& .Mui-selected': {
              bgcolor: '#f0f0f0',
              fontWeight: 'medium',
            },
            '& .MuiTabs-indicator': { display: 'none' },
          }}
        >
          <Tab label="SellSmart" value="SellSmart" />
          <Tab label="SmartBuy" value="SmartBuy" />
          <Tab label="Repair/Others" value="Repair/Others" />
        </Tabs>
      </Box>

      {faqs.map((question, index) => (
        <Accordion key={index} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              px: 0,
              py: 1,
              minHeight: 'auto',
              '& .MuiAccordionSummary-content': { my: 0, justifyContent: 'center' },
            }}
          >
            <Typography variant="body1" sx={{ textAlign: 'center', flexGrow: 1 }}>
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0, py: 1 }}>
            {/* Placeholder for answer; add real content as needed */}
            <Typography>Answer to the question goes here.</Typography>
          </AccordionDetails>
          <Divider />
        </Accordion>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Link href="#" underline="none" sx={{ color: '#00b3a6', fontWeight: 'medium' }}>
          Load More FAQs
        </Link>
      </Box>
    </Box>
  );
};

export default FAQSection;