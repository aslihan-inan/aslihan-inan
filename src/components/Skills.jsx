import React from 'react';
import skillIcon from '../assets/skill-icon.png'; // Doğru yol
import './Skills.css'; // CSS dosyasıyla aynı klasörde

export default function Skills() {
  return (
    <section className="skills-section">
      <img 
        src={skillIcon} // Import edilen resim
        alt="Skill Icon" 
        className="skill-icon"
      />
      <h2>Skills</h2>
    </section>
  );
}