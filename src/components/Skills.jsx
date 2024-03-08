import "./skills.css"
export const Skills = () => {
    return(
        <div className="skills-container" id="skills">
            <p className="skills-container__title">Skills</p>
            <div className="skills-container__grid">
                <div alt="HTML" title="HTML" className="skills-html skills-effect"> </div>
                <div alt="CSS" title="CSS" className="skills-css skills-effect"></div>
                <div alt="Java Script" title="JavaSript" className="skills-js skills-effect"></div>
                <div alt="React" title="React" className="skills-react skills-effect"></div>
                <div alt="NodeJs" title="NodeJs" className="skills-node skills-effect"></div>
                <div alt="Express" title="Express" className="skills-express skills-effect"></div>
                <div alt="Python" title="Python" className="skills-python skills-effect"></div>
                <div alt="Java" title="Java" className="skills-java skills-effect"></div>
                <div alt="Git" title="GIT" className="skills-git skills-effect"></div>
                <div alt="SQL" title="SQL" className="skills-sql skills-effect"></div>
                <div alt="Figma" title="Figma" className="skills-figma skills-effect"></div>
                
                
            </div>
        </div>
    )
}