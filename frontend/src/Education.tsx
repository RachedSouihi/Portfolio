import { useSpring, useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function EducationTimeline() {
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Computer Science and Software Engineering",
      institution: "Higher Institute of Information Technologies and Communication",
      location: "Borj Cedria, Tunisia",
      date: "Graduation date: May 31, 2025",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      id: 2,
      degree: "Baccalaureate in Computer Science",
      institution: "Wafa High School",
      location: "Ariana, Tunisia",
      date: "June 24, 2022",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13" />
        </svg>
      )
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const timelineSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 180, friction: 12 },
  });

  const trail = useTrail(educations.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 180, friction: 12 },
  });

  return (
    <animated.div
      id="education"
      ref={ref}
      style={timelineSpring}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#0D1117] dark:to-[#161B22]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-700 dark:text-gray-300">
          EDUCATION
        </h2>

        <div className="relative">
          <animated.div
            style={timelineSpring}
            className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#3E8CFF] to-[#00FFA3] md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-16">
            {trail.map((style, index) => (
              <animated.div
                key={educations[index].id}
                style={style}
                className={`relative pl-10 md:pl-0 md:flex ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-stretch`}
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 md:left-1/2">
                  {educations[index].icon}
                </div>

                <div
                  className={`bg-white dark:bg-[#161B22] rounded-xl shadow-md p-6 border-l-4 w-full md:w-96 flex flex-col justify-between h-full min-h-[240px] ${
                    index % 2 === 0
                      ? 'border-[#3E8CFF] md:border-l-0 md:border-r-4 md:ml-12 md:text-left'
                      : 'border-[#00FFA3] md:border-r-0 md:border-l-4 md:mr-12 md:text-right'
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#3E8CFF] dark:text-[#00FFA3]">
                      {educations[index].degree}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                      {educations[index].institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{educations[index].location}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#00FFA3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{educations[index].date}</span>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
}
