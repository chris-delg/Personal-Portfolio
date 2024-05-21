import "/styles/Navbar.css"
import githubLogo from '../assets/github_logo.svg'
import linkedinLogo from '../assets/LinkedIn_icon.png'

function Navbar () {
    return (
        <div className="navbar">
            <a href="https://github.com/chris-delg" target="_blank"><img src={githubLogo} alt="Github logo"/></a>
            <a href="https://linkedin.com/in/chris-delg" target="_blank"><img src={linkedinLogo} alt="LinkedIn logo"/></a>
        </div>
    );
}

export default Navbar;