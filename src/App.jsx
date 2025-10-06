import { useTypewriter } from 'react-simple-typewriter';
import EmblaCarousel from './EmblaCarousel';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Carousels' default settings:
const OPTIONS = { loop: true, duration: 30 };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const VOL_SLIDE_COUNT = 6;
const VOL_SLIDES = Array.from(Array(VOL_SLIDE_COUNT).keys());

function App() {
  const [typeEffect] = useTypewriter({
    words: ['am a compsci student.', 'love to code cool stuff.', 'like problem solving.', 'also enjoy working out!'],
    loop: {},
    type: 120,
    deleteSpeed: 50,
  });

  const scrollToResume = () => {
    document.querySelector('.resume').scrollIntoView({ behavior: 'smooth' });
  };

  // Custom hook for observer:
  const useOnScreen = (ref, rootMargin = '0px') => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { rootMargin }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [ref, rootMargin]);

    return isIntersecting;
  };

  const projects = [
    {
      title: 'Voluntree',
      description: 'The goal of VolunTree is to allow users to easily access volunteering opportunities posted by organizations. We also aim to make it easier for organizations to find volunteers and efficiently manage their active volunteering positions.',
      tech: 'SwiftUI, ASP.NET Web API',
      github: 'https://github.com/tahaminachy43/VolunTree',
      carousel: true,
      slides: VOL_SLIDES,
      type: 'vol'
    },
    {
      title: 'Book Club Organizer',
      description: 'Users can join or host book clubs based on certain themes, which puts them into a live chat.',
      tech: 'React, Tailwind, Firebase, Docker',
      github: 'https://github.com/Vergeful/Book-Club-Organizer',
      carousel: true,
      slides: SLIDES,
      type: 'book'
    },
    {
      title: 'Student Scheduler DB Management System',
      description: 'Students can easily enroll in courses relevant to their degree(s) and admins can make changes to degrees and their courses.',
      tech: 'React, Sass, Nodejs, MySQL, AWS',
      github: 'https://github.com/Vergeful/Student-Scheduler',
      carousel: true,
      slides: SLIDES,
      type: 'student'
    },
    {
      title: 'Fictional Character REST API',
      description: 'Users can register or login. They can then add characters from their favorite media.',
      tech: 'Nodejs, MongoDB, Postman',
      github: 'https://github.com/Vergeful/Fictional-Character-REST-API',
      website: 'https://fictional-character-api.onrender.com/documentation/'
    },
    {
      title: 'Recipe Search App',
      description: 'Users can search for the recipe to any common dish.',
      tech: 'React, Spoonacular API',
      github: 'https://github.com/Vergeful/Recipe',
      website: 'https://savitur-recipe.netlify.app/'
    },
    {
      title: 'GPU-Webscraper',
      description: "Python script that obtains GPU prices from Newegg's website.",
      tech: 'Python, Beautiful Soup',
      github: 'https://github.com/Vergeful/WebScraper'
    }
  ];

  return (
    <div className='site-wrapper'>
      <header>
        <h1 className='header-name'>Savitur Maharaj</h1>
        <div className="header-links">
          <a href='https://www.linkedin.com/in/savitur-maharaj-789806206/' target="_blank" aria-label="LinkedIn" className="icon-link">
            <img src='/linkedin.webp' alt='Linkedin Logo Link' className='header-logo-link'/>
          </a>
          <a href='https://github.com/Vergeful' target="_blank" aria-label="Github" className="icon-link">
            <img src='/github-mark.png' alt='Github Logo Link' className='header-logo-link'/>
          </a>
          <button onClick={scrollToResume} className="resume-button">See Resume</button>
        </div>
      </header>

      <div className='info'>
        <div className='img-container'>
          <img src='/face.png' alt='Image of Savitur'/>
        </div>
        <div className='info-details'>
          <div>My name is <span className='name'>Savitur!</span></div>
          <div className='two'>I <span className='typed'>{typeEffect}</span></div>
        </div>
      </div>

      <div className='projects'>
        <div className='section-header'>PROJECTS</div>
        <div className='list'>
          {projects.map((project, index) => {
            const ref = useRef();
            const isVisible = useOnScreen(ref, '-100px');
            const sideClass = index % 2 === 0 ? 'left' : 'right';

            return (
              <div
                key={index}
                ref={ref}
                className={`project ${sideClass} ${isVisible ? 'show' : ''}`}
                data-delay={index}
              >
                <div className='header'>{project.title}</div>
                <div className='description'>{project.description}</div>
                <div className='tech'>Tech used: {project.tech}</div>
                {project.github && <a href={project.github} target="_blank">See code at Github</a>}
                {project.website && <a href={project.website} target="_blank">Go to website</a>}
                {project.carousel && <EmblaCarousel slides={project.slides} options={OPTIONS} type={project.type}/>}
              </div>
            )
          })}
        </div>
      </div>

      <div className='resume'>
        <div className='section-header'>RESUME</div>
        <iframe id='pdf' src="/Resume.pdf" frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default App;
