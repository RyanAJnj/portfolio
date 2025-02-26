import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // State to track email status

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_qt2uz2k', 'template_r2bnkm9', form.current, {
        publicKey: 'D3KpNZFi9P2vW76zK',
      })
      .then(
        () => {
          setIsSent(true); // Update state to show success
          setTimeout(() => {
            setIsSent(false); // Reset button after 3 seconds (or any desired duration)
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSent(false); // If failed, don't change the button color
        }
      );
  };

  return (
    <div 
      id="contact" 
      className={`w-11/12 max-w-3xl mx-auto py-20 text-center flex flex-col items-center gap-4 ${isDarkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'}`}
    >
      <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[66px] font-Ovo mb-8">
        Contact Me
      </h2>
        
      <form ref={form} onSubmit={sendEmail} className={`p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto ${isDarkMode ? 'bg-darkHover/50 text-white border-white/50' : 'bg-white text-black border-gray-300'}`}>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium" htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium" htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`px-10 py-3 ${isSent ? 'bg-green-500' : 'bg-black'} text-white font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isSent ? 'Message Sent!' : 'Send Message'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
