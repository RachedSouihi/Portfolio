import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { toast } from 'react-hot-toast';



import "./t.css"
import { submitContactForm } from './api/contact';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //toast.loading('Sending message...', { duration: 2000 , position: 'top-left'});

   submitContactForm(formData).then(() => {

      console.log('Form submitted:', formData);

      toast.success('Message sent successfully!');





      setFormData({ name: '', subject: '', message: '' });


    }).catch( (error) => {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message.');
    })

  };

  // Track dark mode with state
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    // Listen for class changes on <html>
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // React Spring animation for the text
  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 180, friction: 12 },
    delay: 200,
  });

  // Arrow image selection
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const arrowSrc = isMobile
    ? 'down-arrow.png'
    : isDarkMode
    ? 'r-arrow.png'
    : 'dark-right-arrow.png';





  return (
    <div className="w-full mx-auto p-6 md:p-8 bg-[#F5F7FA] dark:bg-[#0D1117] shadow-xl">
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex-1 relative">
          <div className="relative mb-6">
            {/* Text Section */}
            <div className="flex flex-col items-start gap-3 mb-10">
              <animated.span
                style={{ ...textSpring, fontFamily: 'Orbitron, sans-serif' }}
                className="text-lg sm:text-5xl font-semibold text-[#0D1117] dark:text-[#FAFAFA]"
              >
                It’s time to build something exciting 🚀
              </animated.span>
            </div>

            {/* Arrow Image */}
            <div className="relative mx-auto mt-10">
              <animated.img
                src={arrowSrc}
                alt="Arrow"
                width={400}
                className="mx-auto"
                style={textSpring}
              />
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form with Glowing Aura) */}
        <div className="flex-1 max-w-2xl mt-10 relative glow-effect">
          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6 bg-white dark:bg-[#161B22] rounded-2xl p-8 shadow-xl"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-[#6C7280] dark:text-[#A0AEC0]">Name</label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#161B22] border border-[#CBD5E0] dark:border-[#2D3748] rounded-lg focus:ring-2 focus:ring-[#3E8CFF] focus:border-transparent outline-none transition-all duration-300 text-[#0D1117] dark:text-[#FAFAFA]"
                  placeholder="Enter your name"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-[#00FFA3]" viewBox="0 0 24 24" fill="none">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-[#6C7280] dark:text-[#A0AEC0]">Subject</label>
              <div className="relative">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#161B22] border border-[#CBD5E0] dark:border-[#2D3748] rounded-lg focus:ring-2 focus:ring-[#3E8CFF] focus:border-transparent outline-none transition-all duration-300 text-[#0D1117] dark:text-[#FAFAFA]"
                  placeholder="What's this regarding?"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-[#00FFA3]" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-[#6C7280] dark:text-[#A0AEC0]">Message</label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#161B22] border border-[#CBD5E0] dark:border-[#2D3748] rounded-lg focus:ring-2 focus:ring-[#3E8CFF] focus:border-transparent outline-none transition-all duration-300 text-[#0D1117] dark:text-[#FAFAFA] resize-none"
                  placeholder="Your message here..."
                />
                <div className="absolute top-3 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-[#00FFA3]" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E8CFF] dark:focus:ring-offset-[#0D1117]"
            >
              Send Message
              <span className="ml-2">→</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
