import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import {
	FiArrowLeft,
	FiArrowRight,
	FiExternalLink,
	FiGithub,
} from "react-icons/fi";

const projects = [
	// ... (your projects array remains the same)
];

export default function ProjectsCarousel() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");
	const [cardsPerView, setCardsPerView] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) setCardsPerView(1);
			else if (window.innerWidth < 1024) setCardsPerView(2);
			else setCardsPerView(3);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const visibleProjects = projects.slice(index, index + cardsPerView);
	
	// Optimized transition configuration
	const transitions = useTransition(visibleProjects, {
		keys: (item) => item.id,
		from: {
			opacity: 0,
			transform: direction === "right" 
				? "translate3d(100%,0,0)" 
				: "translate3d(-100%,0,0)",
		},
		enter: { 
			opacity: 1, 
			transform: "translate3d(0%,0,0)",
			position: "static" 
		},
		leave: {
			opacity: 0,
			position: "absolute",
			transform: direction === "right" 
				? "translate3d(-50%,0,0)" 
				: "translate3d(50%,0,0)",
		},
		config: { 
			tension: 280, 
			friction: 22,
			clamp: true // Prevents overshooting
		},
		trail: 0, // Removes delay between individual item animations
	});

	const handlePrev = () => {
		setDirection("left");
		setIndex((prev) => {
			const newIndex = prev - 1;
			return newIndex < 0 ? projects.length - cardsPerView : newIndex;
		});
	};

	const handleNext = () => {
		setDirection("right");
		setIndex((prev) => {
			const newIndex = prev + 1;
			return newIndex > projects.length - cardsPerView ? 0 : newIndex;
		});
	};

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA] dark:bg-[#0D1117] text-[#0D1117] dark:text-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-[#0D1117] dark:text-white">
						My <span className="text-[#3E8CFF]">Projects</span>
					</h2>
					<p className="text-lg text-[#6C7280] dark:text-[#A0AEC0] max-w-3xl mx-auto">
						Explore my latest work across personal, academic, and professional
						projects.
					</p>
				</div>

				<div className="relative overflow-hidden">
					{/* Navigation arrows */}
					<button
						onClick={handlePrev}
						aria-label="Previous projects"
						className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#E0ECFF] dark:bg-[#161B22] p-3 rounded-full hover:bg-[#CBD5E0] dark:hover:scale-110 transition"
					>
						<FiArrowLeft className="text-xl text-[#0D1117] dark:text-white" />
					</button>

					<button
						onClick={handleNext}
						aria-label="Next projects"
						className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#E0ECFF] dark:bg-[#161B22] p-3 rounded-full hover:bg-[#CBD5E0] dark:hover:scale-110 transition"
					>
						<FiArrowRight className="text-xl text-[#0D1117] dark:text-white" />
					</button>

					{/* Carousel track */}
					<div className="relative min-h-[480px]">
						<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{transitions((style, item) => (
								<animated.div
									style={style}
									className="h-full bg-white dark:bg-[#161B22] rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[460px] border border-[#CBD5E0] dark:border-[#2D3748]"
									key={item.id}
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
								</animated.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}