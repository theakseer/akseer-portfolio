import { BrowserRouter } from 'react-router-dom'
import {
  Hero,
  Navbar,
  About,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas
} from './components'
import { useEffect, useState } from 'react';
const App = () => {

  const [loading, setLoading] = useState(false);
  const [languageIndex, setLanguageIndex] = useState(0);

  const greetings = [
    "Hello", // English
    "Hola", // Spanish
    "Hallo", // German
    "Bonjour", // French
    "こんにちは", // Japanese
    "Ciao", // Italian
    "Здравствуйте", // Russian
    "你好", // Chinese
    "مرحبا", // Arabic //السلام عليكم 
    "Olá", // Portuguese
    "안녕하세요", // Korean
    "नमस्ते", // Hindi
  ];


  useEffect(() => {
    setLoading(true);
    const sub = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => clearTimeout(sub);
  }, []);
  useEffect(() => {
    let sub = setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(sub);
          return 0;
        }
      });
    }, 320);

    return () => clearInterval(sub);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-bold text-white bg-primary text-4xl md:text-2xl">
          {greetings[languageIndex]}
        </div>
    )
  }
  else return (
    <BrowserRouter>
      <div className='relative bg-primary z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        {/* <Experience/> */}
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App