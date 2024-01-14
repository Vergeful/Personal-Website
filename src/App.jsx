import { useTypewriter} from 'react-simple-typewriter'
import './App.css'

function App() {
  const [typeEffect] = useTypewriter({
    words: ['am a computer science student.', 'love to code cool stuff!', 'enjoy working out and reading manga!'],
    loop: {},
    type: 120,
    deleteSpeed: 50,
  })

  return (
    <div className='site-wrapper'>
      
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
          <div className='project'>
            <div className='header'>Student Scheduler DB Management System</div>
            <div className='description'>Students can easily enroll in courses relevant to their degree(s) and admins can make changes to degrees and their courses.</div>
            <div className='tech'>Tech used: React, Sass, Nodejs, MySQL, AWS</div>
            <a href="https://github.com/Vergeful/Student-Scheduler" target="_blank">See code at Github</a>
            <a href="" target="_blank">Go to website (coming soon)</a>
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

          <div className='project soon'>
            <div className='header'>Fitness with Friends (Coming soon)</div>
            <div className='description'> Users can post their lifts of the day and their friends can comment on them.</div>
            <div className='tech'>Tech used: Typescript, .NET Web API</div>
          </div>
        </div>
      </div>

      <div className='resume'>
        <div className='section-header'>RESUME</div>
        <iframe id='pdf' src="/Resume.pdf" frameborder="0"></iframe>
      </div>

    </div>
  )
}

export default App
