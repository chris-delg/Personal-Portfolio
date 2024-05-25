import '/styles/Education.css'
import rccLogo from '../assets/RCC_logo.jpg'
import ucrLogo from '../assets/ucr_logo.png'

function Education () {
    return (
        <div className='education-container'>
            <h2>Education</h2>
            <div className='schools'>
                <div className='school-info'>
                    <a href='https://www1.cs.ucr.edu/' target='_blank'><img src={ucrLogo}></img></a>
                    <p style={{fontSize: 'large'}}>The University of California, Riverside</p>
                    <p><em>Expected Graduation June 2026 <br/> B.S in computer engineering.</em></p>
                </div>
                <div className='school-info'>
                    <a href='https://www.rcc.edu/programs/computer-science.html' target='_blank'><img src={rccLogo}></img></a>
                    <p style={{fontSize: 'large'}}>Riverside City College</p>
                    <p><em>Graduated May 2023 <br/> A.S in computer science.</em></p>
                </div>
            </div>
        </div>
    )
}

export default Education