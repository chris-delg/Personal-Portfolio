import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Extracurricular from './components/Extracurricular.jsx'
import Footer from './components/Footer.jsx'

import myPhoto from './assets/photo_of_me.jpg'

import '/styles/App.css'
import "/styles/Navbar.css"

function App() {
  return (
    <>
      <div id='home'></div>

      <div className="navbar">
        <a href='#home'>Home</a>
        <a href='#education'>Education</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#extracurricular'>Extracurriculars</a>
        <a href='#footer'>Footer</a>
      </div>
    
      <div className='pageTop'>
        <div className='name'>
          <h1>Christopher Delgado</h1>
        </div>
        <div className='my-info'>
          <h3>Student at the University of California, Riverside studying computer engineering.</h3>
        </div>
      </div>

      <div className='about-container'>
        <div className='about-section'>
          <h2>About</h2>
            <p>I am a first generation college student who is passionate about software engineering. I have a background in 
                C/C++, Python, JavaScript and many other languages/technologies. Check out my resume below and the rest of this 
                website for more information about me.
            </p>
          <a href="https://maroon-cathyleen-91.tiiny.site/" target="_blank">
            <button className="btn btn-shadow btn-shadow--blue"> <span>View resume</span> </button>
          </a>
        </div>
        <div className="item">
          <div className="polaroid"><img src={myPhoto}/>
            <div className="caption">Me at UCR</div>
          </div>
        </div>
      </div>

      <div id='education'>
        <Education />
      </div>

      <div id='skills'>
        <Skills />
      </div>

      <div id='experience'>
        <Experience />
      </div>

      <div id='extracurricular'>
        <Extracurricular />
      </div>

      <div id='footer'>
        <Footer />
      </div>

    </>
  )
}

export default App
