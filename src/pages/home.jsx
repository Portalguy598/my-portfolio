import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const { state } = useLocation();
  
  // get targetId value sent from App.jsx
  let targetId = null;
  if(state !== null){
    targetId = state.targetId;
  }

  // scroll to proper place on page depending on state 
  useEffect(() => {
    console.log('in useeffect, targetId is ' + targetId);
    if(targetId === null){
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    else if(targetId === 'about'){
      aboutRef.current.scrollIntoView({behavior: 'smooth'});
    }
    else if(targetId === 'projects'){
      projectsRef.current.scrollIntoView({behavior: 'smooth'});
    }
    else{
      contactRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [targetId]);


  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I’m Ryan Milner</h1>
        <p>Aspiring software developer</p>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="section">
        <h2>About Me</h2>
        <p>
          I’m a student learning software and web development. I love
          building things with code and exploring new
          technologies. Currently studying at California State University San Marcos.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="CalPal"
            desc="A simple Java application that allows you to track your daily net calorie intake after factoring in food and exercises."
          />
          <ProjectCard
            title="Aim Rivals"
            desc="A React app that allows players to compete in aiming games with others."
          />
          <ProjectCard
            title="My Portfolio"
            desc="A portfolio website (the very one you are looking at!)."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="section contact">
        <h2>Contact</h2>
        <p>Email: ryandmilner@gmail.com</p>
        <p>GitHub: <a>github.com/Portalguy598</a></p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Home;