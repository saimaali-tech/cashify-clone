import Image from "next/image";
import "./phones.css";

const phones = () => {
  const laptops = [
    {
      id: 1,
      title: "MacBook Air 2024 (M3)",
      price: "₹75,199",
      image: "/images/laptop1.jpg",
    },
    {
      id: 2,
      title: "MacBook Air 2024 (13.3)",
      price: "₹62,399",
      image: "/images/laptop2.jpg",
    },
    {
      id: 3,
      title: "MacBook Pro 2020 (M1)",
      price: "₹48,499",
      image: "/images/laptop3.jpg",
    },
    {
      id: 4,
      title: "MacBook Pro 2020 (Touch Bar)",
      price: "₹39,599",
      image: "/images/laptop14jpg",
    },
  ];

  return (
    <section className="phones">
      <h2>Refurbished Laptops</h2>

      <div className="phones-grid">
        {laptops.map((item) => (
          <div className="phone-card" key={item.id}>
            <Image
              src={item.image}
              alt={item.title}
              width={220}
              height={150}
              className="phone-image"
            />
            <h3>{item.title}</h3>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default phones;
