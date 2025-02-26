'use client'
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Bio from "./Components/Bio";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from 'react';
import ChatBubble from "./Components/ChatBubble";

export default function Home() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.
      matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);
  
  return (
    <>
    <Navbar isDarkMode= {isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode= {isDarkMode} />
    <Bio isDarkMode= {isDarkMode}/>
    <Resume isDarkMode= {isDarkMode}/>
    <Projects isDarkMode= {isDarkMode}/>
    <Contact isDarkMode= {isDarkMode}/>
    <Footer isDarkMode= {isDarkMode}/>
    <ChatBubble />
    </>
  );
}
