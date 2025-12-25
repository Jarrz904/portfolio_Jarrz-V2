// src/components/Projects.js
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]);

    const handleOpenLightbox = (projectImages) => {
        setSlides(projectImages);
        setOpen(true);
    };

    const projectData = [
        {
            id: 1,
            title: 'SIMAM',
            desc: 'Sistem Informasi Manajemen Mahasiswa berbasis web dengan login Mahasiswa & Admin.',
            type: 'web',
            images: [
                { src: '/project1-1.png' },
                { src: '/project1-2.png' },
                { src: '/project1-3.png' },
                { src: '/project1-4.png' },
                { src: '/project1-5.png' },
                { src: '/project1-6.png' },
                { src: '/project1-7.png' },
            ]
        },
        {
            id: 2,
            title: 'Pendakian Merbabu',
            desc: 'Web pendakian & peminjaman alat Gunung Merbabu dengan fitur login dan validasi.',
            type: 'web',
            images: [
                { src: '/project2-1.png' },
                { src: '/project2-2.png' },
                { src: '/project2-3.png' },
                { src: '/project2-4.png' },
                { src: '/project2-5.png' }
            ]
        },
        {
            id: 3,
            title: 'Diagnosa Penyakit',
            desc: 'Form gejala & diagnosis berbasis checklist untuk membantu identifikasi penyakit.',
            type: 'web',
            images: [
                { src: '/project3-1.png' },
                { src: '/project3-2.png' }
            ]
        },
         {
            id: 4,
            title: 'Web Coffe Shop',
            desc: 'Web Coffe Shop memudahkan pembeli untuk memesan coffe,makanan,minuman dan berbagai snak.',
            type: 'web',
            images: [
                { src: '/project4-1.jpeg' },
                { src: '/project4-2.jpeg' },
                { src: '/project4-3.jpeg' },
                { src: '/project4-4.png' },
                { src: '/project4-5.jpeg' },
                { src: '/project4-6.jpeg' },
                { src: '/project4-7.jpeg' }
            ]
        },
        {
            id: 5,
            title: 'Web Booking Hotel',
            desc: 'Website pemesanan hotel adalah sebuah platform online yang memungkinkan pengguna untuk mencari, membandingkan, dan memesan kamar hotel secara praktis dan cepat. Sistem ini dirancang untuk mempermudah pengguna dalam menemukan akomodasi yang sesuai dengan kebutuhan dan anggaran mereka.',
            type: 'web',
            images: [
                { src: '/project5-1.jpeg' },
                { src: '/project5-2.jpeg' },
                { src: '/project5-3.jpeg' },
                { src: '/project5-4.jpeg' },
                { src: '/project5-5.jpeg' },
                { src: '/project5-6.jpeg' },
                { src: '/project5-7.jpeg' }
            ]
        },
        {
            id: 6,
            title: 'Pendakian Merbabu (App)',
            desc: 'Aplikasi pendakian & peminjaman alat Gunung Merbabu dengan fitur login dan validasi.',
            type: 'app',
            images: [
                { src: '/project6-1.jpeg' },
                { src: '/project6-2.jpg' },
            ]
        }
    ];

    useEffect(() => {
        const buttons = document.querySelectorAll('.filter-btn');
        const boxes = document.querySelectorAll('.project-item');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                buttons.forEach((btn) => btn.classList.remove('active'));
                button.classList.add('active');

                boxes.forEach((box) => {
                    if (filter === 'all' || box.classList.contains(filter)) {
                        box.style.display = 'flex';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
    }, []);

    return (
        <section className="projects" id="projects">
            <h2 className="heading animate" style={{ '--i': 1 }}>
                Latest <span>Project</span>
            </h2>

            <div className="project-filter-buttons" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <button className="btn filter-btn active" data-filter="all">Semua</button>
                <button className="btn filter-btn" data-filter="web">Website</button>
                <button className="btn filter-btn" data-filter="app">Aplikasi</button>
            </div>

            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={project.id} className={`project-item animate ${project.type}`} style={{ '--i': index + 2 }}>
                        <div className="project-box">
                            <img
                                src={project.images[0].src}
                                alt={project.title}
                                onClick={() => handleOpenLightbox(project.images)}
                                style={{ cursor: 'zoom-in' }}
                            />
                        </div>
                        <div className="project-caption">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
            />
        </section>
    );
};

export default Projects;
