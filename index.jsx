import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section" style={{border: '2px solid red'}}> 
      <h2>Skills</h2>
      <div className="skills-container">
        {['JS', 'REACT'].map(skill => (
          <div key={skill} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
}