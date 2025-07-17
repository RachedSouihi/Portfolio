import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
	{
		id: 1,
		title: 'Portfolio Website',
		type: 'personal',
		description:
			'A modern portfolio website showcasing my projects and skills with responsive design and animations.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		link: '#',
		github: '#',
	},
	{
		id: 2,
		title: 'E-Commerce Platform',
		type: 'professional',
		description:
			'Full-featured online shopping platform with product management, cart, and payment integration.',
		technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
		link: '#',
		github: '#',
	},
	{
		id: 3,
		title: 'University Management System',
		type: 'academic',
		description:
			'Comprehensive system for managing student records, courses, and faculty information.',
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
		link: '#',
		github: '#',
	},
	{
		id: 4,
		title: 'Health Tracking App',
		type: 'personal',
		description:
			'Mobile application for tracking fitness goals, nutrition, and health metrics.',
		technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
		link: '#',
		github: '#',
	},
	
];

export default function ProjectsCarousel() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState<'left' | 'right'>('right');
	const [cardsPerView, setCardsPerView] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) setCardsPerView(1);
			else if (window.innerWidth < 1024) setCardsPerView(2);
			else setCardsPerView(3);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const visibleProjects = projects.slice(index, index + cardsPerView);
	const transitions = useTransition(visibleProjects, {
		keys: (item) => item.id,
		from: {
			opacity: 0,
			transform: direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
		},
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: {
			opacity: 0,
			transform: direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)',
		},
		config: { tension: 250, friction: 20 },
		trail: 100,
	});

	const handlePrev = () => {
		setDirection('left');
		setIndex((prev) => (prev - cardsPerView + projects.length) % projects.length);
	};

	const handleNext = () => {
		setDirection('right');
		setIndex((prev) => (prev + cardsPerView) % projects.length);
	};

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0D1117] text-[#0D1117] dark:text-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-[#0D1117] dark:text-white">
						My <span className="text-[#3E8CFF]">Projects</span>
					</h2>
					<p className="text-lg text-[#6C7280] dark:text-[#A0AEC0] max-w-3xl mx-auto">
						Explore my latest work across personal, academic, and professional projects.
					</p>
				</div>

			<div className="relative overflow-hidden">
  {/* ----------  Left arrow  ---------- */}
  <button
    onClick={handlePrev}
    aria-label="Previous projects"
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#E0ECFF] dark:bg-[#161B22] p-3 rounded-full hover:bg-[#CBD5E0] dark:hover:scale-110 transition"
  >
    <FiArrowLeft className="text-xl text-[#0D1117] dark:text-white" />
  </button>

  {/* ----------  Right arrow  ---------- */}
  <button
    onClick={handleNext}
    aria-label="Next projects"
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#E0ECFF] dark:bg-[#161B22] p-3 rounded-full hover:bg-[#CBD5E0] dark:hover:scale-110 transition"
  >
    <FiArrowRight className="text-xl text-[#0D1117] dark:text-white" />
  </button>

  {/* ----------  Carousel track  ---------- */}
  <div className="relative min-h-[480px]">
    {transitions((style, _, __, i) =>
      i === 0 ? (
        <animated.div
          style={style}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.map((item) => (
            <div
              key={item.id}
              className="h-full bg-white dark:bg-[#161B22] rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[460px] border border-[#CBD5E0] dark:border-[#2D3748]"
            >
              <div>
                <div className="bg-gradient-to-r from-[#3E8CFF] to-[#00FFA3] h-32 rounded-t-xl flex items-center justify-center">
                  <div className="bg-white dark:bg-[#161B22] w-16 h-16 rounded-full flex items-center justify-center">
                    <div className="bg-[#00FFA3] w-10 h-10 rounded-full text-[#0D1117] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-4 mb-2 text-[#0D1117] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[#6C7280] dark:text-[#A0AEC0] mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#E0ECFF] dark:bg-[#0D1117] text-[#6C7280] dark:text-[#A0AEC0] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <a
                  href={item.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#E0ECFF] dark:bg-white text-[#0D1117] rounded-lg font-medium hover:bg-[#CBD5E0] dark:hover:bg-opacity-90 transition"
                >
                  <FiGithub className="w-5 h-5" /> Code
                </a>
                <a
                  href={item.link}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  <FiExternalLink className="w-5 h-5" /> Demo
                </a>
              </div>
            </div>
          ))}
        </animated.div>
      ) : null
    )}
  </div>
</div>
			</div>
		</section>
	);
}
