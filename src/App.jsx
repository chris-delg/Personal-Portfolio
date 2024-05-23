import myPhoto from './assets/photo_of_me.jpg'
import '/styles/App.css'
import "/styles/Navbar.css"
import githubLogo from './assets/github_logo.svg'
import linkedinLogo from './assets/LinkedIn_icon.png'

function App() {
  return (
    <>
      
      <div className="navbar">
        <a href="https://github.com/chris-delg" target="_blank"><img src={githubLogo} alt="Github logo"/></a>
        <a href="https://linkedin.com/in/chris-delg" target="_blank"><img src={linkedinLogo} alt="LinkedIn logo"/></a>
      </div>

      <div className='pageTop'>
        <div className='my-info'>
          <h3>Student at the University of California, Riverside studying computer engineering.</h3>
        </div>
        <div className='my-photo'>
          <img src={myPhoto} alt='photo of me'></img>
        </div>
        <div className='name'>
          <h1>Christopher Delgado</h1>
        </div>
      </div>

      <hr/>

      <div className='about-section'>
        <h2>About</h2>
        <h3>I am a first generation college student who is passionate about software engineering. I have a background in 
          <br/>
            C/C++, Python, JavaScript and many other languages/technologies. Check out my resume below and the rest of this 
          <br/>
            website for more information about me.
        </h3>
        <a href="https://maroon-cathyleen-91.tiiny.site/" target="_blank">
          <button className="btn btn-shadow btn-shadow--blue"> <span>View resume</span> </button>
        </a>
      </div>

    </>
  )
}

export default App
