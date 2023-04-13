import "./card.css"

export const Card = (props) => {
    
    return(
        <div className="projects-container__project">
            <div className="projects-container__img" style={{ backgroundImage: `url(${props.imgBackground})` }}>
                <div className="projects-container__hover">
                    <p className="projects-container__title">{props.projectName}</p>
                    <p className="projects-container__description">{props.description}</p>
                    <div className="project-container__flex">
                        {props.repositorie != undefined ? <a href={`${props.repositorie}`}><button className="projects-container__button">Github</button></a>
                        : <a href={`${props.picture}`}><button className="projects-container__button">Picture</button></a>
                        }
                        <a href={`${props.deploy}`}><button className="projects-container__button">Preview</button></a>
                    </div>
                </div>
            </div>
            
        </div>
    )

}