import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  'What should I do if my Amazon voucher shows "Already Redeemed"?',
  'What documents do you need to sell old mobile phone on Cashify?',
  'What if my pickup is delayed?',
];

const FAQSection: React.FC = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              bgcolor: '#f0f0f0',
              borderRadius: 20,
              px: 2,
              py: 0.5,
              mr: 1,
              fontWeight: 'medium',
            }}
          >
            SellSmart
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>
            SmartBuy
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Repair/Others
          </Typography>
        </Box>
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