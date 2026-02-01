import Carousel from './components/Carousel';
import Services from './components/Services';
import Sell from './components/Sell';
import Refirbished from './components/Refirbished';
import RefurbishedLaptops from './components/RefurbishedLaptops/RefurbishedLaptops';
import StoreCards from './components/Storecard';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BlogSections from './components/BlogSections';
import HotDealsSection from './components/Hotdeals';
import FAQSection from './components/FAQSection';
import { Box } from '@mui/material';  // Add this import

export default function Home() {
  return (
    <main className="container">
      <Carousel />
      <Services />
      <Sell />
      <Refirbished />
      <RefurbishedLaptops />
      <StoreCards />
      <Testimonials/>
      <BlogSections/>
      <HotDealsSection/>
      <FAQSection/>

      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header / main content */}
        <Box component="main" sx={{ flex: 1 }}>
          {/* page content */}
        </Box>
        <Footer />
      </Box>
    </main>
  );
}