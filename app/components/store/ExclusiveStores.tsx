import Image from 'next/image'; // If needed for icons, but not used here

const ExclusiveStores = () => {
  const stores = [
    {
      city: 'GURGAON',
      name: 'Cashify Mobile Phone Store Airia Mall Sec 68 Gurgram',
      address: 'Ground Floor, Reach, AIRIA MALL, Sadashpur Sohna Rd Hwy, Sect...',
      timings: '11:00 AM - 10:00 PM',
    },
    {
      city: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store Sushant Lok',
      address: 'GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon',
      timings: '10:00 AM - 09:00 PM',
    },
    {
      city: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon',
      address: 'Shop No.13, Old Delhi Road, Opp. Plaza Solitare Hotel Bank market...',
      timings: '10:00 AM - 09:00 PM',
    },
    {
      city: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon',
      address: 'Shop No.13, Old Delhi Road, Opp. Plaza Solitare Hotel Bank market...',
      timings: '10:00 AM - 09:00 PM',
    },
    {
      city: 'GURGAON',
      name: 'Cashify Buy, Sell and Repair Mobile Store MG Road Gurgaon',
      address: 'M.G. Road Metro Gate No 2, M.G. Road...',
      timings: 'Details',
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Our Exclusive Stores</h1>
        <a href="#" className="view-all">View all stores</a>
      </div>
      <div className="subheader">
        <span className="centres">🗺️ 200+ Experience Centres</span>
        <span className="rating">⭐ 4.5+ Star Rating</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Enter Pincode" />
        <button>🔍</button>
      </div>
      <div className="store-grid">
        {stores.map((store, index) => (
          <div key={index} className="store-card">
            <div className="city-badge">{store.city}</div>
            <h2 className="name">{store.name}</h2>
            <p className="address">{store.address}</p>
            <p className="timings">Timings: {store.timings}</p>
            <a href="#" className="view-details">View Details →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveStores;