import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);

  const services = [
    {
      title: "Front End Development",
      description: "Building responsive, accessible interfaces with React, TypeScript, and modern CSS frameworks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
          <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
        </svg>
      ),
    },
    {
      title: "Back End Development",
      description: "Creating scalable APIs and services with Node.js, databases, and cloud infrastructure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="4" width="18" height="8" rx="3" />
          <rect x="3" y="12" width="18" height="8" rx="3" />
          <line x1="7" y1="8" x2="7" y2="8.01" />
          <line x1="7" y1="16" x2="7" y2="16.01" />
        </svg>
      ),
    },
    {
      title: "AI Integrations",
      description: "Implementing machine learning models and AI solutions to enhance your applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 12a3 3 0 1 0 3 3" />
          <path d="M13.456 10.56l2.104 -2.104a3 3 0 0 0 -4.24 -4.24l-2.104 2.104" />
          <path d="M7.924 7.915l-2.104 -2.104a3 3 0 0 0 -4.24 4.24l2.104 2.104" />
          <path d="M7.92 15.09l-2.104 2.104a3 3 0 0 0 4.24 4.24l2.104 -2.104" />
          <path d="M13.452 13.44l2.104 2.104a3 3 0 0 0 4.24 -4.24l-2.104 -2.104" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F5F7FA] to-[#E0ECFF] dark:from-[#0D1117] dark:to-[#10161D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1117] dark:text-[#FAFAFA]">
            My <span className="text-[#3E8CFF]">Services</span>
          </h2>
          <p className="text-lg text-[#6C7280] dark:text-[#A0AEC0] max-w-3xl mx-auto">
            Solutions tailored to your needs, from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 transition-all duration-500 overflow-hidden
                ${
                  hoveredCard === index
                    ? 'bg-gradient-to-br from-[#00FFA3] to-[#5F00FF] text-white shadow-xl'
                    : 'bg-white dark:bg-[#161B22] text-[#0D1117] dark:text-[#FAFAFA] shadow-md border border-gray-200 dark:border-gray-800'
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(index === 0 ? 0 : null)}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#00FFA3] to-[#5F00FF] opacity-0 transition-opacity duration-500 
                ${hoveredCard === index ? 'opacity-100' : ''}`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`mb-6 p-3 inline-block rounded-full transition-all duration-300
                  ${
                    hoveredCard === index
                      ? 'bg-white/20'
                      : 'bg-[#00FFA3]/10 dark:bg-[#00FFA3]/20'
                  }`}
                >
                  <div className={hoveredCard === index ? 'text-white' : 'text-[#00FFA3]'}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="mb-6 opacity-90">{service.description}</p>

                <a
                  className={`inline-flex items-center font-medium transition-all duration-300 group
                    ${hoveredCard === index ? 'text-white' : 'text-[#5F00FF] dark:text-[#7C3AED]'}`}
                  href="#"
                >
                  <span className="mr-2 group-hover:underline">Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1
                      ${hoveredCard === index ? 'text-white' : 'text-[#5F00FF] dark:text-[#7C3AED]'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;