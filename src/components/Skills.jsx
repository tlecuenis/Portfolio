import "./skills.css"
export const Skills = () => {
    return(
        <div className="skills-container" id="skills">
            <p className="skills-container__title">Skills</p>
            <div className="skills-container__grid">
                <div alt="HTML" title="HTML" className="skills-html skills-effect"> </div>
                <div alt="CSS" title="CSS" className="skills-css skills-effect"></div>
                <div alt="Tailwind" title="Tailwind" className="skills-tail skills-effect"></div>
                <div alt="Java Script" title="JavaSript" className="skills-js skills-effect"></div>
                <div alt="React" title="React" className="skills-react skills-effect"></div>
                <div alt="Git" title="GIT" className="skills-git skills-effect"></div>
                <div alt="Figma" title="Figma" className="skills-figma skills-effect"></div>
                <div alt="Rhinoceros" title="Rhinoceros" className="skills-rhino skills-effect"></div>
                <div alt="Solidworks" title="Solidworks" className="skills-solid skills-effect"></div>
                
                
            </div>
        </div>
    )
}