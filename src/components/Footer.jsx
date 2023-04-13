import { Link } from 'react-scroll'
import './footer.css'
export const Footer = () => {
    return(
        <footer className="footer">
            <p className="copyright">Made by Tomás Matías Lecuenis</p>
            <div className="footer__container">
                <Link to='projects' spy={true} smooth={true} offset={-30} duration={800}><button className='nav-container__buttons sm' >Projects</button></Link>
                <Link to='skills' spy={true} smooth={true} offset={-30} duration={600}><button className='nav-container__buttons sm' >Skills</button></Link>
                <Link to='contact' spy={true} smooth={true} offset={-30} duration={500}><button className='nav-container__buttons sm' >Contact</button></Link>
            </div>
        </footer>
    )

}