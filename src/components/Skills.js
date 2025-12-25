// src/components/Skills.js
import React from 'react';
// Import ikon - Perbaikan: SiNodeJs diganti menjadi SiNodedotjs agar tidak error
import { 
    SiNodedotjs, 
    SiNextdotjs, 
    SiJavascript, 
    SiMysql, 
    SiVite 
} from 'react-icons/si';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaPhp, 
    FaLaravel, 
    FaPython 
} from 'react-icons/fa';

// Pastikan file CSS tersedia
import './Skill.css';

const Skills = () => {
    // 1. Array Technical Skills - Data dipisahkan agar JSX tetap bersih
    const technicalSkills = [
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
        { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Node JS', icon: <SiNodedotjs />, color: '#339933' }, // Menggunakan SiNodedotjs
        { name: 'Next JS', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    ];

    // 2. Array Professional Skills
    const professionalSkills = [
        { name: "Creativity", value: 60 },
        { name: "Communication", value: 50 },
        { name: "Problem Solving", value: 50 },
        { name: "Teamwork", value: 50 }
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="heading animate" style={{ '--i': 1 }}>
                My <span>Skills</span>
            </h2>

            <div className="skills-container">
                {/* Kolom Kiri: Technical Skills */}
                <div className="skills-column animate" style={{ '--i': 2 }}>
                    <h3 className="title">Technical Skills</h3>
                    <div className="skills-box">
                        <div className="technical-skills-content">
                            {technicalSkills.map((skill) => (
                                <div className="skill-wrapper" key={skill.name}>
                                    <div 
                                        className="skill-item" 
                                        style={{ 
                                            '--skill-color': skill.color,
                                            fontSize: '40px' 
                                        }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <p className="skill-name">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Professional Skills */}
                <div className="skills-column animate" style={{ '--i': 3 }}>
                    <h3 className="title">Professional Skills</h3>
                    <div className="skills-box professional">
                        {professionalSkills.map((skill, index) => (
                            <div 
                                className="circular-progress" 
                                key={index} 
                                style={{ '--p': skill.value }}
                            >
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