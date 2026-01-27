import Carousel from './components/Carousel';
import  Services from './components/Services'
import  Sell from './components/Sell'
import Refirbished from './components/Refirbished'


export default function Home() {
  return (
    <main className="page-center">
    <Carousel/>
    <Services />
    <Sell/>
    <Refirbished/>
    </main>
  );
}
