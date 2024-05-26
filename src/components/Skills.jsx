import '/styles/Skills.css'

import cpp_logo from '/src/assets/C++.png'
import python_logo from '/src/assets/Python.png'
import js_logo from '/src/assets/js.png'
import react_logo from '/src/assets/react.png'
import html_logo from '/src/assets/html.png'
import css_logo from '/src/assets/css.png'
import node_logo from '/src/assets/nodejs.png'
import java_logo from '/src/assets/java.png'
import mongodb_logo from '/src/assets/mongodb.png'
import git_logo from '/src/assets/git.png'

function Skills () {
    return (
        <div className='skills-container'>
            <h2>Skills</h2>

            <div className='row'>
                <div className='skill'> 
                    <img src={cpp_logo} alt='C++ logo' />
                    <p>C/C++</p>
                </div>
                <div className='skill'>
                    <img src={python_logo} alt="Python logo" />
                    <p>Python</p>
                </div>
                <div className='skill'>
                    <img src={js_logo} alt="JavaScript logo" />
                    <p>JavaScript</p>
                </div>
                <div className='skill'>
                    <img src={react_logo} alt="React.js logo" />
                    <p>React</p>
                </div>
                <div className='skill'>
                    <img src={html_logo} alt="HTML logo" />
                    <p>HTML</p>
                </div>
                <div className='skill'>
                    <img src={css_logo} alt="CSS logo" />
                    <p>CSS</p>
                </div>
                <div className='skill'>
                    <img src={node_logo} alt="Node.js logo" />
                    <p>Node.js</p>
                </div>
            </div>

            <div className='row'>
                <div className='skill'>
                    <img src={java_logo} alt="Java logo" />
                    <p>Java</p>
                </div>
                <div className='skill'>
                    <img src={mongodb_logo} alt="MongoDB logo" />
                    <p>MongoDB</p>
                </div>
                <div className='skill'>
                    <img src={git_logo} alt="Git logo" />
                    <p>Git</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;