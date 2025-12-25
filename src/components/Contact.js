// src/components/Contact.js

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading animate" style={{'--i': 1}}>Contact <span>Me</span></h2>

            <div className="contact-container">
                {/* Sisi Kiri - Info Kontak */}
                <div className="contact-info animate" style={{'--i': 2}}>
                    <h3>Let's Work Together</h3>
                    <p>Got a cool idea or want to chat about a project? Let's connect! Send a message anytime, I'm ready to help and respond as quickly as possible. 😊</p>
                    <p><i className='bx bxs-envelope'></i> mfajarsidik64@gmail.com</p>
                    <p><i className='bx bxs-phone'></i> 085741129749</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com/akhmadnur.fauzi.75"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.youtube.com/@Muhamadfajarsidiq-ms3qt"><i className='bx bxl-youtube'></i></a>
                        <a href="https://www.instagram.com/jarr_sdk?igsh=MTBmd3VrNTVsM2d5Mg=="><i className='bx bxl-instagram-alt'></i></a>
                        <a href="https://www.tiktok.com/@jarrrrrrrrrrrz?_t=ZS-8xjlvcfWpVq&_r=1"><i className='bx bxl-tiktok'></i></a>
                    </div>
                </div>

                {/* Sisi Kanan - Form */}
                {/* GANTI DENGAN EMAIL ANDA SENDIRI */}
                <form action="https://formsubmit.co/mfajarsidik64@gmail.com" method="POST" className="animate" style={{ '--i': 3 }}>
                    {/* Input untuk data pengguna */}
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <input type="email" name="email" placeholder="Enter Your Email" required />
                    <input type="text" name="subject" placeholder="Enter Your Subject" required/>
                    <textarea name="message" cols="30" rows="10" placeholder="Enter Your Message" required></textarea>

                    {/* --- PENGATURAN FORM SUBMIT (OPSIONAL TAPI DIANJURKAN) --- */}

                    {/* 1. Atur Judul Email yang Anda Terima */}
                    <input type="hidden" name="_subject" value="Pesan Baru dari Website Portfolio!" />

                    {/* 2. Halaman "Terima Kasih" setelah submit berhasil */}
                    {/*    Ganti value dengan URL halaman terima kasih di website Anda yang sudah online */}
                    <input type="hidden" name="_next" value="https://website-anda.com/terima-kasih" />

                    {/* 3. Nonaktifkan CAPTCHA (TIDAK DISARANKAN) */}
                    {/*    Untuk melindungi dari spam, sebaiknya HAPUS baris di bawah ini agar CAPTCHA aktif */}
                    <input type="hidden" name="_captcha" value="false" />
                    
                    {/* Tombol Submit */}
                    <input type="submit" value="Submit" className="btn" />
                </form>

            </div>
        </section>
    );
};

export default Contact;