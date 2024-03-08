import './about.css'
import gridPicture from '../assets/2-Foto-tipo-DNI.jpg'

export const About = () => {
    return(
        <div className="about-container about">
            <p className="about__title">About Me</p>
            <div className='about-flex'>
                <div className="about-flex__whoami">
                <p className='about-flex__name'>Tomás Matías Lecuenis</p>
                    <p>I'm currently studying bachelor's degree in systems in UADE and in my free time learning fullstack development by my self. I've been in many teams of work as Electronic technitian and done very variant tasks. Some of them were developing microcontrollers for IOT projects, modeling and rendering, etc.</p>
                    <ul>
                        <li className='outter'>📜  Certifications: </li>
                        <ul>
                            <li className='inner'>Fullstack Developer (Platzi Academy)</li>
                            <li className='inner'>Electronic technitian (Pio IX Institute)</li>
                            <li className='inner'>Linux and Bash (RedHat Academy)</li>
                        </ul>
                        <li className='outter'>💙  Nationality: Argentina</li>
                        <li className='outter'>🤙  Birthdate: NOV/13/2002</li>
                        <li className='outter'>🤩  Hobby: Rugby (Club Italiano)</li>
                    </ul>
                    
                </div>
                <img src={gridPicture} alt="" className="about-flex__picture"/>
            </div>
        </div>
    )
}


// Soy proactivo y organizado. Me
// apasiona aprender cosas nuevas.
// Estoy abierto a oportunidades
// laborales