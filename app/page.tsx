import Carousel from './components/Carousel';
import  Services from './components/Services'
import  Sell from './components/Sell'
import Refirbished from './components/Refirbished'
import RefurbishedLaptops from './components/RefurbishedLaptops'
// import ExclusiveStores from './components/store/ExclusiveStores';



export default function Home() {
  return (
    <main className="container">
    <Carousel/>
    <Services />
    <Sell/>
    <Refirbished/>
    <RefurbishedLaptops/>
    {/* <ExclusiveStores/> */}
   
    </main>
  );
}
