import Image from 'next/image';
import "./refurbishedlaptops.css"

const RefurbishedLaptops = () => {
  const laptops = [
    {
      logo: 'CASHIFY',
      stock: '3 left',
      image: '/images/laptop1.jpg',
      discount: '₹29,700 OFF',
      name: 'Apple MacBook Air 2025 A3240 (Apple M4 13.3 Inch...)',
      sale: 'Republic Day Sale',
      rating: '4.6 ★',
      price: '-29% ₹73,299 ₹102,999',
      withGold: '₹71,245 with GOLD',
    },
    {
      logo: 'SELECT',
      stock: '3 left',
      image: '/images/laptop2.jpg',
      discount: '₹45,000 OFF',
      name: 'Apple MacBook Air 2024 A3113 (Apple M3 Chip 13.3...)',
      sale: 'Republic Day Sale',
      rating: '4.9 ★',
      price: '-44% ₹59,399 ₹105,299',
      withGold: '₹57,623 with GOLD',
    },
    {
      logo: 'SELECT',
      stock: '1 left',
      image: '/images/laptop3.jpg',
      discount: '₹50,200 OFF',
      name: 'Apple MacBook Air 2023 A2941 (Apple M2 Chip 15...)',
      sale: 'Republic Day Sale',
      rating: '5.0 ★',
      price: '-47% ₹56,399 ₹106,599',
      withGold: '₹54,683 with GOLD',
    },
    {
      logo: 'CASHIFY',
      stock: '5 left',
      image: '/images/laptop4.jpg',
      discount: '₹47,000 OFF',
      name: 'Apple MacBook Air 2022 A2681 (Apple M2 Chip 13.6...)',
      sale: 'Republic Day Sale',
      rating: '4.4 ★',
      price: '-48% ₹50,499 ₹97,499',
      withGold: '₹48,901 with GOLD',
    },
  ];

  return (
    <div className="laptop" >
      <h1>Refurbished Laptops</h1>
      <div className="laptop-grid">
        {laptops.map((laptop, index) => (
          <div key={index} className="laptop-card">
            <div className="brand-logo">{laptop.logo}</div>
            <div className="stock-label">{laptop.stock}</div>
            <Image
              src={laptop.image}
              alt={laptop.name}
              width={200}
              height={100}
              className="laptop-image"
            />
            <div className="discount">{laptop.discount}</div>
            <div className="name">{laptop.name}</div>
            <div className="sale">
              {laptop.sale} {laptop.rating}
            </div>
            <div className="price">{laptop.price}</div>
            <div className="with-gold">{laptop.withGold}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefurbishedLaptops;