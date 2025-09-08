import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Update the theme class on the root element
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Animation for heading
    const headingSpring = useSpring({
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        config: { tension: 180, friction: 12 },
        delay: 200,
    });

    // Animation for paragraph
    const paragraphSpring = useSpring({
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        config: { tension: 180, friction: 12 },
        delay: 400,
    });

    // Animation for image container
    const imageSpring = useSpring({
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1 },
        config: { tension: 180, friction: 12 },
        delay: 600,
    });

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Services', href: '#services' },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#F5F7FA] dark:bg-[#0D1117] shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-[#0D1117] dark:text-[#FAFAFA] hover:text-[#3E8CFF] focus:outline-none"
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Left navigation - Desktop */}
                        <div className="hidden md:flex md:flex-1 md:items-center md:justify-start">
                            <nav className="flex space-x-8">
                                {navLinks.slice(0, 3).map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-[#0D1117] dark:text-[#FAFAFA] hover:text-[#3E8CFF] font-medium transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Centered Logo */}
                        <div className="flex-1 md:flex-none flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 h-full">
                            <a href="#" className="flex items-center" aria-label="Home">
                                <div className="rounded-full flex items-center justify-center">
                                    <img src="logo.png" alt="Logo" width={80} />
                                </div>
                            </a>
                        </div>

                        {/* Right navigation - Desktop */}
                        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
                            <nav className="flex items-center space-x-4">
                                {/* Theme Toggle Button */}

                                <a
                                    href="#services"
                                    className="text-[#0D1117] dark:text-[#FAFAFA] hover:text-[#3E8CFF] font-medium transition-colors duration-300"
                                >
                                    Services
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:text-white transform focus:outline-none"
                                >
                                    Get in Touch
                                </a>

                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full text-[#0D1117] dark:text-[#FAFAFA] bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
                                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                >
                                    {isDarkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    )}
                                </button>

                            </nav>
                        </div>

                        {/* Get in Touch button - Mobile */}
                        <div className="md:hidden flex items-center space-x-4">
                            {/* Mobile Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-[#0D1117] dark:text-[#FAFAFA] hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </button>

                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 hover:scale-105"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-16 right-0 w-64 h-full bg-[#F5F7FA] dark:bg-[#0D1117] shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <nav className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-6 py-3 text-[#0D1117] dark:text-[#FAFAFA] hover:bg-[#3E8CFF] hover:bg-opacity-10 hover:text-[#3E8CFF] transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center px-6 py-3 text-[#0D1117] dark:text-[#FAFAFA] hover:bg-[#3E8CFF] hover:bg-opacity-10 hover:text-[#3E8CFF] transition-colors duration-300"
                        >
                            {isDarkMode ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                    Light Mode
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                    Dark Mode
                                </>
                            )}
                        </button>

                        <a
                            href="#contact"
                            className="mt-4 mx-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white py-2 rounded-md font-medium text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </a>
                    </nav>
                </div>
            </header>

            <div id='about' className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0D1117] dark:to-[#161B22] text-gray-900 dark:text-white px-6 md:px-16 py-12 flex justify-center items-center">


                <div className="flex flex-col md:flex-row-reverse items-center max-w-7xl w-full">

                    <animated.div
                        style={{
                            ...imageSpring,
                            transform: imageSpring.scale.to((s: any) => `scale(${s})`),
                        }}
                        className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#3E8CFF] dark:border-blue-500 flex-shrink-0 mb-8 md:mb-0 md:ml-12"
                    >
                        <img
                            src="RachedUS24.jpg"
                            alt="Rached profile"
                            className="object-cover w-full h-full"
                        />
                    </animated.div>
                    <div className="flex-1 text-center md:text-center">
                        <animated.h1
                            style={{
                                ...headingSpring,
                                transform: headingSpring.y.to((y: any) => `translateY(${y}px)`),
                                fontFamily: 'Orbitron, sans-serif',
                            }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                        >
                            Hi, I’m Rached —<br />
                            a Computer Science graduate & <span className="text-[#3E8CFF] dark:text-blue-500">full-stack developer</span> passionate about building modern, impactful software.
                        </animated.h1>

                        <animated.p
                            style={{
                                ...paragraphSpring,
                                transform: paragraphSpring.y.to((y: any) => `translateY(${y}px)`),
                            }}
                            className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400"
                        >
                            I specialize in crafting seamless user experiences and scalable backend systems, blending design with functionality.
                        </animated.p>
                    </div>

                </div>
            </div>


        </>
    );
}
