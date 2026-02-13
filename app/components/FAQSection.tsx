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
    'Can I place another exchange order if my previous one was cancelled?',
    'What happens if my exchange order is cancelled by Cashify?',
    'Can I appeal Cashify’s decision to cancel my order?',
  ],
};

const FAQSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Repair/Others');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const faqs = faqData[selectedTab as keyof typeof faqData];

  return (
    <Box
      sx={{
        maxWidth: 1300,        // ← Max width 1300px
        mx: 'auto',            // ← Centers the whole section
        px: { xs: 2, md: 4 },  // ← Horizontal padding (keeps content from touching edges)
        py: { xs: 4, md: 6 },  // ← Vertical padding (looks better)
        bgcolor: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Frequently Asked Questions
        </Typography>

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              minWidth: 'auto',
              px: 6,
              py: 3,
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
              '& .MuiAccordionSummary-content': { my: 0 },
            }}
          >
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2, py: 2 }}>
            <Typography>
              If you encounter an error stating that your Amazon voucher has already been redeemed, please follow the steps below to report and resolve the issue:
              <br /><br />
              Please check your Amazon Pay balance, as the voucher might have already been redeemed. If the amount isn’t reflecting in your account, kindly follow the steps mentioned below.
              <br />
              File a complaint with the Cyber Crime Department at https://cybercrime.gov.in.
              <br />
              While filing the complaint, ensure that the complaint notice is submitted under Section 91 of the Cr.PC.
              <br />
              The Cyber Crime team will forward the complaint to police-inquiries@amazon.com.
              <br />
              Upon receiving the complaint, the Amazon team will share complete redemption details with the investigating Cyber Crime authority.
            </Typography>
          </AccordionDetails>
          <Divider />
        </Accordion>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Link href="#" underline="none" sx={{ color: '#00b3a6', fontWeight: 'medium' }}>
          Load More FAQs
        </Link>
      </Box>
    </Box>
  );
};

export default FAQSection;