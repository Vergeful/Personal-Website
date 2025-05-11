import { useTypewriter} from 'react-simple-typewriter';
import EmblaCarousel from './EmblaCarousel'
import './App.css';

// Carousels' default settings:
const OPTIONS = { loop: true, duration: 30 }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const VOL_SLIDE_COUNT = 6
const VOL_SLIDES = Array.from(Array(VOL_SLIDE_COUNT).keys())

const AGARIO_SLIDE_COUNT = 2
const AGARIO_SLIDES = Array.from(Array(AGARIO_SLIDE_COUNT).keys())


function App() {
  const [typeEffect] = useTypewriter({
    words: ['am a compsci student.', 'love to code cool stuff!', 'enjoy working out!', 'love making origami!'],
    loop: {},
    type: 120,
    deleteSpeed: 50,
  })

  const scrollToResume = () => {
    document.querySelector('.resume').scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <div className='site-wrapper'>
      
      <header>
        <h1 className='header-name'>Savitur Maharaj</h1>
        <div className="header-links">
          <a 
            href='https://www.linkedin.com/in/savitur-maharaj-789806206/'
            target="_blank" 
            aria-label="LinkedIn"
            className="icon-link"
          >
            <img src='/linkedin.webp' alt='Linkedin Logo Link'className='header-logo-link'/>
          </a>

          <a 
            href='https://github.com/Vergeful'
            target="_blank" 
            aria-label="Github"
            className="icon-link"
          >
            <img src='/github-mark.png' alt='Github Logo Link'className='header-logo-link'/>
          </a>
          <button 
            onClick={scrollToResume} 
            className="resume-button"
          >
            See Resume
          </button>
        </div>
      </header>


      <div className='info'>
        <div className='img-container'>
          <img src='/face.jpeg' alt='Image of Savitur'/>
        </div>

        <div className='info-details'>
          <div>My name is <span className='name'>Savitur!</span></div>
          <div className='two'>I <span className='typed'>{typeEffect}</span></div>
        </div>
        
      </div>


      <div className='projects'>
        <div className='section-header'>PROJECTS</div>
        <div className='list'>
          {/* <div className='project soon'> */}
            {/* <div className='header'>Origami-help (In-progress)</div>
            <div className='description'> Users can view origami tutorials, post their own models and interact with other users' creations.</div>
            <div className='tech'>Tech used: Typescript, .NET Web API</div>
            <a href="https://github.com/Vergeful/Origami-help" target="_blank">See code at Github</a> */}
            {/* <a href="" target="_blank">Go to website (coming soon)</a> */}
          {/* </div> */}

          <div className='project'>
            <div className='header'>Voluntree (Ongoing)</div>
            <div className='description'>The goal of VolunTree is to allow users to easily access volunteering opportunities posted by organizations. We also aim to make it easier for organizations to find volunteers and efficiently manage their active volunteering positions.</div>
            <div className='tech'>Tech used: SwiftUI, Firebase</div>
            <a href="https://github.com/tahaminachy43/VolunTree" target="_blank">See code at Github</a>
            <div style={{ fontWeight: "bold" }}>Some screenshots from the application:</div>
            <EmblaCarousel slides={VOL_SLIDES} options={OPTIONS} type={'vol'}/>
          </div>

          <div className='project'>
            <div className='header'>Agar.io clone</div>
            <div className='description'>Recreation of the popular multiplayer game, agario, using a distributed approach.</div>
            <div className='tech'>Tech used: Typescript, Django</div>
            <a href="https://github.com/Vergeful/Snake.io/tree/integration_v2" target="_blank">See code at Github</a>
            <div style={{ fontWeight: "bold" }}>Some screenshots from the application:</div>
            <EmblaCarousel slides={AGARIO_SLIDES} options={OPTIONS} type={'agario'}/>
          </div>

          <div className='project'>
            <div className='header'>Book Club Organizer</div>
            <div className='description'>Users can join or host book clubs based on certain themes, which puts them into a live chat.</div>
            <div className='tech'>Tech used: React, Tailwind, Firebase, Docker</div>
            <a href="https://github.com/Vergeful/Book-Club-Organizer" target="_blank">See code at Github</a>
            <div style={{ fontWeight: "bold" }}>Some screenshots from the application:</div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type={'book'}/>
          </div>

          <div className='project'>
            <div className='header'>Student Scheduler DB Management System</div>
            <div className='description'>Students can easily enroll in courses relevant to their degree(s) and admins can make changes to degrees and their courses.</div>
            <div className='tech'>Tech used: React, Sass, Nodejs, MySQL, AWS</div>
            <a href="https://github.com/Vergeful/Student-Scheduler" target="_blank">See code at Github</a>
            <div style={{ fontWeight: "bold" }}>Some screenshots from the application:</div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type={'student'}/>
          </div>

          <div className='project'>
            <div className='header'>Fictional Character REST API</div>
            <div className='description'>Users can register or login. They can then add characters from their favorite media.</div>
            <div className='tech'>Tech used: Nodejs, MongoDB, Postman</div>
            <a href="https://github.com/Vergeful/Fictional-Character-REST-API" target="_blank">See code at Github</a>
            <a href="https://fictional-character-api.onrender.com/documentation/" target="_blank">Test API here</a>
          </div>

          <div className='project'>
            <div className='header'>Recipe Search App</div>
            <div className='description'>Users can search for the recipe to any common dish.</div>
            <div className='tech'>Tech used: React, Spoonacular API</div>
            <a href="https://github.com/Vergeful/Recipe" target="_blank">See code at Github</a>
            <a href="https://savitur-recipe.netlify.app/" target="_blank">Go to website</a>
          </div>

          <div className='project'>
            <div className='header'>GPU-Webscraper</div>
            <div className='description'>Python script that obtains GPU prices from Newegg's website.</div>
            <div className='tech'>Tech used: Python, Beautiful Soup</div>
            <a href="https://github.com/Vergeful/WebScraper" target="_blank">See code at Github</a>
          </div>
        </div>
      </div>

      <div className='resume'>
        <div className='section-header'>RESUME</div>
        <iframe id='pdf' src="/Resume1.pdf" frameborder="0"></iframe>
      </div>

    </div>
  )
}

export default App
