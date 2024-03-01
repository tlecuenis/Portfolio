import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './nav.css'

export const Nav = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hamburger, setHamburger] = useState(false)

    const handleBurger = (e) => {
        setHamburger(!hamburger);
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
    });
    
    return(
        <header className='nav-container'>
            {/* logo */}
            <button className='nav-container__buttons left'>Lecuenis</button>
            
            {windowWidth >= 780 && <div className='nav-container__flex'>
                <Link to='about' spy={true} smooth={true} offset={-30} duration={700}><button className='nav-container__buttons right' >About</button></Link>
                <Link to='projects' spy={true} smooth={true} offset={-30} duration={500}><button className='nav-container__buttons right' >Projects</button></Link>
                <Link to='skills' spy={true} smooth={true} offset={-30} duration={600}><button className='nav-container__buttons right' >Skills</button></Link>
                <Link to='contact' spy={true} smooth={true} offset={-30} duration={700}><button className='nav-container__buttons right' >Contacts</button></Link>
            </div>}
            {/* {windowWidth < 960 && <div className='nav-container__flex-mobile'>
                <Link to='projects' spy={true} smooth={true} offset={-30} duration={500}><button className='nav-container__buttons right' >Projects</button></Link>
                <Link to='skills' spy={true} smooth={true} offset={-30} duration={600}><button className='nav-container__buttons right' >Skills</button></Link>
                <Link to='contact' spy={true} smooth={true} offset={-30} duration={700}><button className='nav-container__buttons right' >Contacts</button></Link>
            </div>} */}

            {windowWidth < 780 && <label className='hamburger-menu' onFocus={handleBurger}>
                <input type="checkbox" /> {/* input dentro del label para que al presionar el label funcione el input */}
            </label>}

            {(hamburger && windowWidth < 780) && <div className='mobile-menu'>
                <div>
                    <Link to='about' spy={true} smooth={true} offset={-30} duration={400}><button className='nav-container__buttons-mobile' >About</button></Link>
                    <Link to='projects' spy={true} smooth={true} offset={-30} duration={500}><button className='nav-container__buttons-mobile' >Projects</button></Link>
                    <Link to='skills' spy={true} smooth={true} offset={-30} duration={600}><button className='nav-container__buttons-mobile' >Skills</button></Link>
                    <Link to='contact' spy={true} smooth={true} offset={-30} duration={700}><button className='nav-container__buttons-mobile' >Contacts</button></Link>
                </div>
            </div>}
        </header>

    )

}