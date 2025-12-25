// src/components/Services.js
const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading animate" style={{'--i': 1}}>My <span>Services</span></h2>
            <div className="services-container">
                <div className="services-box animate" style={{'--i': 2}}>
                     <i className='bx bx-devices text-[4rem] text-[#00abf0]'></i>
                    <h3>UI/UX Design</h3>
                    <p>"Saya mengembangkan desain antarmuka (UI) yang menarik dan pengalaman pengguna (UX) yang intuitif. Dengan pendekatan user-centered, saya memastikan setiap desain mudah digunakan, efisien, dan memberikan kesan profesional."</p>
                   <a href="#about" className="btn mt-4">Pelajari Lebih</a>

                </div>
                <div className="services-box animate" style={{'--i': 3}}>
                    <i className='bx bx-code-block text-[4rem] text-[#00abf0]'></i>
                    <h3>Web Design</h3>
                    <p>"Saya merancang tampilan website yang modern, responsif, dan mudah dinavigasi. Fokus pada estetika visual dan struktur yang rapi agar pengguna merasa nyaman saat mengakses website, baik melalui desktop maupun perangkat mobile."</p>
                    <a href="#projects" className="btn mt-4">Lihat Proyek</a>

                </div>
                <div className="services-box animate" style={{'--i': 4}}>
                    <i className='bx bx-mobile-alt text-[4rem] text-[#00abf0]'></i>
                    <h3>App Design</h3>
                    <p>"Saya merancang desain aplikasi mobile yang fungsional dan user-friendly. Dengan mempertimbangkan ukuran layar dan perilaku pengguna di perangkat mobile, desain yang dibuat akan terasa alami dan mudah dipahami."</p>
                    <a href="#contact" className="btn mt-4">Hubungi Saya</a>

                </div>
            </div>
        </section>
    );
};
export default Services;