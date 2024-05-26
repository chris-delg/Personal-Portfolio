import '/styles/Experience.css'

import czi_logo from '/src/assets/czi_logo.jpg'
import mse_pic from '/src/assets/mse.jpg'

function Experience () {
    return (
        <div className='experience-container'>
            <h2>Experience</h2>
            <div className='experience-content'>
                <img className='czi-logo' src={czi_logo} alt='Chan Zuckerberg Initiative logo'/>
                <div>
                    <h3>Incoming Software Engineering Intern <a href='https://tech.chanzuckerberg.com/scitech/' target='_blank'>@CZI</a><br/><em>June 2024 - Sep. 2024</em></h3>
                    <p>
                        This upcoming summer I will be working as a Software Engineering Intern at the Chan Zuckerberg Initiative
                        in Redwood City California. There, I will be working on imaging software under the science wing of the company.
                    </p>
                </div>
            </div>
            <div className='experience-content'>
                <div>
                    <h3>Research Intern <a href='https://lorenzo.engr.ucr.edu/' target='_blank'>@UCR</a> <br/><em>June 2023 - Sep. 2023</em></h3>
                    <ul>
                        <li>
                            <p>
                                Collaborated with a PhD student researching ways to enhance the combustibility of magnesium by forming 
                                magnesium nanoparticles.
                            </p>
                        </li>
                        <li>
                            <p>
                                Developed a Python application that aids with the processing and visualization of the data collected 
                                during the analysis of the nanoparticles.
                            </p>
                        </li>
                        <li>
                            <p>
                                Assisted in assembling, disassembling, and running the system that forms the magnesium nanoparticles.
                            </p>
                        </li>
                    </ul>
                </div>
                <img className='mse-img' src={mse_pic} alt='Material Science and Engineering building at UCR'/>
            </div>
        </div>
    )
}

export default Experience;