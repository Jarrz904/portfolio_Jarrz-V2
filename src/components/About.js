const About = () => {

    return (
        <section className="about" id="about">
            {/* ▼▼▼ KONTENER UTAMA ▼▼▼ */}
            <div className="about-container"> 
                
                {/* BAGIAN GAMBAR (KIRI) */}
                <div className="about-img animate" style={{'--i': 1}}>
                    <img src="/profile.png" alt="Profile" />
                </div>

                {/* BAGIAN KONTEN (KANAN) - SEMUA TEKS ADA DI SINI */}
                <div className="about-content animate" style={{'--i': 2}}>
                    {/* Heading "About Me" sekarang ada di dalam konten kanan */}
                    <h2 className="heading">About <span>Me</span></h2>
                    
                    <h3>Web Developer</h3>
                    <p className="about-bio">
                        I am an active student majoring in Computer Science, with an interest in the fields of web application development and artificial intelligence. I enjoy learning new things and am actively involved in various projects that hone my technical skills and teamwork. My goal is to become a professional who can make a real contribution in the world of technology.</p>
                </div>
            </div>
        </section>
    );
};

export default About;