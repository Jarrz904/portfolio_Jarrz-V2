// src/components/Header.js (Final dengan Animasi Header yang Terpisah)

import { useEffect, useState } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);

            let currentSectionId = 'home';
            document.querySelectorAll('section[id]').forEach(sec => {
                const sectionTop = sec.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    currentSectionId = sec.getAttribute('id');
                }
            });
            setActiveLink(currentSectionId);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            {/* GANTI className menjadi 'animate-header' */}
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="logo animate-header" style={{'--i': 1}}>
                My Portfolio
            </a>

            <i 
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
                id="menu-icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>

            {/* GANTI className menjadi 'animate-header' */}
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className={`${activeLink === 'home' ? 'active' : ''} animate-header`} style={{'--i': 2}}>Home</a>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className={`${activeLink === 'about' ? 'active' : ''} animate-header`} style={{'--i': 3}}>About</a>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className={`${activeLink === 'services' ? 'active' : ''} animate-header`} style={{'--i': 4}}>Services</a>
                <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className={`${activeLink === 'skills' ? 'active' : ''} animate-header`} style={{'--i': 5}}>Skills</a>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className={`${activeLink === 'projects' ? 'active' : ''} animate-header`} style={{'--i': 6}}>Project</a>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className={`${activeLink === 'contact' ? 'active' : ''} animate-header`} style={{'--i': 7}}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;