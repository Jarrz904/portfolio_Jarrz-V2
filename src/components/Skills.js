// src/components/Skills.js

import React from 'react';
// Import ikon yang kita butuhkan
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiVite, SiMysql } from 'react-icons/si';

// PASTIKAN NAMA FILE INI BENAR! Jika file Anda bernama Skills.css, ganti di sini.
import './Skill.css'; 

const Skills = () => {
    // Array technical skills dengan ikon DAN WARNA ASLI
    const technicalSkills = [
        { name: 'HTML', icon: <FaHtml5 size={40} />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt size={40} />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript size={40} />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact size={40} />, color: '#61DAFB' },
        { name: 'PHP', icon: <FaPhp size={40} />, color: '#777BB4' },
        { name: 'Laravel', icon: <FaLaravel size={40} />, color: '#FF2D20' },
        { name: 'MySQL', icon: <SiMysql size={40} />, color: '#4479A1' },
        { name: 'Python', icon: <FaPython size={40} />, color: '#3776AB' },
        { name: 'Vite', icon: <SiVite size={40} />, color: '#646CFF' },
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="heading animate" style={{ '--i': 1 }}>
                My <span>Skills</span>
            </h2>

            <div className="skills-container">
                {/* Technical Skills - TELAH DIPERBAIKI */}
                <div className="skills-column animate" style={{ '--i': 2 }}>
                    <h3 className="title">Technical Skills</h3>
                    <div className="skills-box">
                        <div className="technical-skills-content">
                            {technicalSkills.map((skill) => (
                                // Setiap item sekarang dibungkus untuk menata ikon dan teks secara terpisah
                                <div className="skill-wrapper" key={skill.name}>
                                    <div className="skill-item" style={{ '--skill-color': skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <p className="skill-name">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Professional Skills - KODE ANDA TETAP SAMA */}
                <div className="skills-column animate" style={{ '--i': 3 }}>
                    <h3 className="title">Professional Skills</h3>
                    <div className="skills-box professional">
                        {[
                            { name: "Creativity", value: 60 },
                            { name: "Communication", value: 50 },
                            { name: "Problem Solving", value: 50 },
                            { name: "Teamwork", value: 50 }
                        ].map((skill, index) => (
                            <div className="circular-progress" key={index} style={{ '--p': skill.value }}>
                                <span className="progress-value">{skill.value}%</span>
                                <span className="progress-label">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;