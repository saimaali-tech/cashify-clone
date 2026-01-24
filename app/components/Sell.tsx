// components/Sell.tsx
'use client'; // Add this to make it a Client Component

import React, { useState } from 'react';

const devices = [
  {
    title: "Smartphone Pro",
    description: "High-end smartphone with 5G, 128GB storage, and triple camera",
    price: "$799",
    icon: "📱",
  },
  {
    title: "Laptop Ultra",
    description: "Powerful laptop with Intel i7, 16GB RAM, and 512GB SSD",
    price: "$1299",
    icon: "💻",
  },
  {
    title: "Wireless Earbuds",
    description: "Noise-cancelling earbuds with 24-hour battery life",
    price: "$149",
    icon: "🎧",
  },
  {
    title: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS",
    price: "$199",
    icon: "⌚",
  },
  // Additional devices for "Show More"
  {
    title: "Tablet Max",
    description: "10-inch tablet with stylus support and 256GB storage",
    price: "$499",
    icon: "📱",
  },
  {
    title: "Gaming Console",
    description: "Next-gen console with 4K graphics and online multiplayer",
    price: "$499",
    icon: "🎮",
  },
  {
    title: "Smart Home Hub",
    description: "Voice-controlled hub for lights, security, and more",
    price: "$99",
    icon: "🏠",
  },
  {
    title: "Drone Camera",
    description: "4K drone with obstacle avoidance and 30-min flight time",
    price: "$399",
    icon: "🚁",
  },
];

export default function Sell() {
  const [showAll, setShowAll] = useState(false);
  const visibleDevices = showAll ? devices : devices.slice(0, 4);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Devices for Sale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our selection of high-quality devices
          </p>
        </div>

        {/* Cards Container - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {visibleDevices.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 p-8 text-center
                         w-full max-w-sm hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{device.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {device.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {device.description}
              </p>
              <p className="text-xl font-bold text-green-600">
                {device.price}
              </p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && devices.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full 
                         font-semibold hover:bg-blue-700 transition-colors"
            >
              Show More Devices
            </button>
          </div>
        )}
      </div>
    </section>
  );
}