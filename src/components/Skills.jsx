import '/styles/Skills.css'

function Skills () {
    return (
        <div className='skills-container'>
            <h2>Skills</h2>

            <div className='row'>
                <div className='skill'> 
                    <img src='../src/assets/C++.png' alt='C++ logo' />
                    <p>C/C++</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/Python.png" alt="Python logo" />
                    <p>Python</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/js.png" alt="JavaScript logo" />
                    <p>JavaScript</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/react.png" alt="React.js logo" />
                    <p>React</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/html.png" alt="HTML logo" />
                    <p>HTML</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/css.png" alt="CSS logo" />
                    <p>CSS</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/nodejs.png" alt="Node.js logo" />
                    <p>Node.js</p>
                </div>
            </div>

            <div className='row'>
                <div className='skill'>
                    <img src="../src/assets/java.png" alt="Java logo" />
                    <p>Java</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/mongodb.png" alt="MongoDB logo" />
                    <p>MongoDB</p>
                </div>
                <div className='skill'>
                    <img src="../src/assets/git.png" alt="Git logo" />
                    <p>Git</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;