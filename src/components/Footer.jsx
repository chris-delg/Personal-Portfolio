import githubLogo from '../assets/github_logo.png'
import linkedinLogo from '../assets/LinkedIn_icon.png'
import '/styles/Footer.css'

function Footer () {
    return (
        <div className="footer-container">
            <hr/>
            <h2>Connect with me</h2>
            <div className="links">
                <div className='link'>
                    <a href="https://linkedin.com/in/chris-delg" target="_blank"><img src={linkedinLogo} alt="LinkedIn logo"/></a>
                </div>
                <div className='link'>
                    <a href="https://github.com/chris-delg" target="_blank"><img src={githubLogo} alt="Github logo"/></a>
                </div>                
            </div>
            <p>Or contact me at <a href="mailto:chrisdelgado221@gmail.com">chrisdelgado221@gmail.com</a></p>
        </div>
    );
}

export default Footer;
