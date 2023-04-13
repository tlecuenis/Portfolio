import "./home.css"
import CV from "../assets/CV-Lecuenis.pdf"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useState } from "react"
export const Home = () => {
    const [copy, setCopy] = useState(false)

    const handleCopy = (e) =>{
        e.preventDefault()
        setCopy(!copy)
    }
    return(
            <div className='home-container'>
                <div className='home-container__picture'></div>
                <div className='home-container__phrase'>
                    <p className="home-container__name medium-introduce">Hi! I'm <span className="bold-introduce">Tomás Lecuenis</span></p>
                    <p className="home-container__role medium-introduce">Frontend Developer</p>
                    <p className="home-container__soft-skills">
                    💡 I'm proactive, organized and passionate.
                    </p>
                    <div className="home-container__buttons">
                        <a href="https://ar.linkedin.com/in/tomaslecuenis"><button className='home-container__button lin'>LinkedIn</button></a>
                        <CopyToClipboard text="tlecuenis@gmail.com">
                            <>
                                <button className='home-container__button em' onClick={handleCopy} title="Copy email">Email</button>
                                {copy && <span className="copied">Copied!</span>}
                            </>
                            
                        </CopyToClipboard>
                        <a href="https://github.com/tlecuenis"><button className='home-container__button gh'>GitHub</button></a>
                        <a href={CV} download="CV-Lecuenis.pdf"><button className='home-container__button cv' title="Download CV">CV</button></a>
                    </div>
                    </div>
            </div>
        
    )
}