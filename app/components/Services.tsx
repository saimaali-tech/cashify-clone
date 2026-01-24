// components/Services.tsx

import React from 'react';

const services = [
  {
    title: "Web Development",
    description: "Responsive websites & web applications using React, Next.js & Tailwind",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    description: "Native & Cross-platform mobile apps for iOS and Android",
    icon: "📱",
  },
  {
    title: "Desktop Applications",
    description: "Powerful desktop software for Windows, Mac & Linux",
    icon: "💻",
  },
  {
    title: "Cloud Solutions",
    description: "AWS, Azure & Google Cloud deployment & architecture",
    icon: "☁️",
  },
  // Added 4 more cards
  {
    title: "UI/UX Design",
    description: "Intuitive and user-centered design for all platforms",
    icon: "🎨",
  },
  {
    title: "API Development",
    description: "Secure and scalable backend APIs with REST or GraphQL",
    icon: "🔌",
  },
  {
    title: "DevOps Services",
    description: "CI/CD pipelines, automation, and infrastructure as code",
    icon: "⚙️",
  },
  {
    title: "AI Integration",
    description: "Machine learning models and AI features for smart applications",
    icon: "🤖",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build high-quality solutions for different devices and platforms
          </p>
        </div>

        {/* Cards Container - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 p-8 text-center
                         w-full max-w-sm hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}