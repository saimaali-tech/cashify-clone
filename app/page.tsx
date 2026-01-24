import Carousel from './components/Carousel';
import  Services from './components/Services'
import  Sell from './components/Sell'


export default function Home() {
  return (
    <main className="page-center">
    <Carousel/>
    <Services />
    <Sell/>
    </main>
  );
}
