// src/components/Home.js
// KODE INI SUDAH BENAR, TIDAK PERLU DIUBAH

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'Mahasiswa Informatika', 'Gamers'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });
        return () => typed.destroy();
    }, []);

    return (
        <section className="home show-animate" id="home">
            <div className="home-content">
                <h3 className="animate" style={{'--i': 1}}>Hello, It's Me</h3>
                <h1 className="animate" style={{'--i': 2}}>Muhammad Fajar Sidik</h1>
                <h3 className="animate" style={{'--i': 3}}>And I'm a <span ref={el} className="multiple-text"></span></h3>
                <p className="animate" style={{'--i': 4}}>I am a 4th semester student who enjoys learning to code....</p>
                <div className="social-media animate" style={{'--i': 5}}>
                    <a href="https://www.facebook.com/akhmadnur.fauzi.75"><i className='bx bxl-facebook'></i></a>
                    <a href="https://www.youtube.com/@Muhamadfajarsidiq-ms3qt"><i className='bx bxl-youtube'></i></a>
                    <a href="https://www.instagram.com/jarr_sdk?igsh=MTBmd3VrNTVsM2d5Mg=="><i className='bx bxl-instagram-alt'></i></a>
                </div>
                <a href="#about" className="btn animate" style={{'--i': 6}}>More About Me</a>
            </div>
            <div className="home-img animate" style={{'--i': 7}}>
                <img src="/profile.png" alt="Foto Profil" />
            </div>
        </section>
    );
};
export default Home;