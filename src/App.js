// src/App.js

import { useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


function App() {
  useEffect(() => {
    // Intersection Observer untuk animasi masuk dan keluar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animate');
        } else {
          entry.target.classList.remove('show-animate');
        }
      });
    }, {
      threshold: 0.1 // Picu animasi saat 10% elemen terlihat
    });

    // Amati semua elemen yang punya class .animate
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup function untuk unobserve saat komponen di-unmount
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []); // Array dependensi kosong, hanya berjalan sekali saat mount

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;