import "./projects.css"
import {Card} from "./Card.jsx";
// sin importar la imagen, no se puede pasar por props
import imgFetch from '../assets/project-img/fetch.png' 
import imgCalcu from '../assets/project-img/calcu.png' 
import imgTodo from '../assets/project-img/todo.png' 
import imgPpt from '../assets/project-img/piedrapt.png' 
import imgTar from '../assets/project-img/tarjetas.png' 
import imgPica from '../assets/project-img/model-pica.png'
import vidPica from '../assets/project-img/vid-pica.avi'

export const Projects = () => {

    const cardsFront = [
        {
            id: 1,
            name: 'Phone contacts',
            description: 'Fetching data from jsonplaceholder combined with forms. Developed in React.js',
            image: imgFetch,
            deploy: 'https://tlecuenis.github.io/fetching-data/',
            repositorie: 'https://github.com/tlecuenis/fetching-data'
        },
        {
            id: 2,
            name: 'Calculator',
            description: 'Great designed calculator, without using eval function. Developed in React.js',
            image: imgCalcu,
            deploy: 'https://tlecuenis.github.io/calculator/',
            repositorie: 'https://github.com/tlecuenis/calculator'
        },
        {
            id: 3,
            name: 'To do list',
            description: 'Functional to do list, emphasizing in DOM manipulation. Developed in JavaScript',
            image: imgTodo,
            deploy: 'https://tlecuenis.github.io/todo-list/',
            repositorie: 'https://github.com/tlecuenis/todo-list'
        },
        {
            id: 4,
            name: 'Animated Cards',
            description: 'Social media cards replica with animations, using design knlowledge',
            image: imgTar,
            deploy: 'https://tlecuenis.github.io/animated-cards/',
            repositorie: 'https://github.com/tlecuenis/animated-cards'
        },
        {
            id: 5,
            name: '✊-✋-✌',
            description: 'Everyone has ever played this game. Developed in JavaScript',
            image: imgPpt,
            deploy: 'https://tlecuenis.github.io/piedra-papel-tijera/',
            repositorie: 'https://github.com/tlecuenis/piedra-papel-tijera'
        }
    ]
    const cardsModel = [
        {
            id: 6,
            name: 'Meat mincer',
            description: 'Real kitchen tool design. Modelled in Rhinoceros and rendered in Keyshot',
            image: imgPica,
            deploy: vidPica,
            picture: imgPica

        }
        // {
        //     id: 7,
        //     name: 'Blitz inspector',
        //     description: 'Exposition EXPO-PIO, in CABA, Argentina - groupal project as a electronic technitian about designing and building a tank that inspects industrial pipelines. Modeled and Assembly in SolidWorks',
        //     image: imgPica,
        //     deploy: vidTan,
        //     picture: imgPica
        // }
    ]

    // const cardsBack = [
    //     {
    //         id: 6,
    //         name: 'Fetching Data',
    //         description: 'asdf',
    //         image: img1,
    //         deploy: '',
    //         repositorie: 'https://github.com/tlecuenis'

    //     },
    //     {
    //         id: 7,
    //         name: 'Fetching Data',
    //         description: 'asdf',
    //         image: img1,
    //         deploy: '',
    //         repositorie: 'https://github.com/tlecuenis'

    //     }
    // ]
        
    
    
    return(
        <div className="projects" id="projects">
            <p className="projects-title">Projects</p>
            <p className="programming-title">Frontend</p>
            <div className="projects-container projects__programming">
                {cardsFront.map(front => (
                    <Card key={front.id} projectName={front.name} description={front.description} imgBackground={front.image} deploy={front.deploy} repositorie={front.repositorie}/>
                ))}
            </div>
            {/* <p className="modeling-title">Backend</p>
            <div className="projects-container projects__modeling">
                {cardsBack.map(back => (
                    <Card key={back.id} projectName={back.name} description={back.description} imgBackground={back.image} deploy={back.deploy} repositorie={back.repositorie}/>
                ))}
            </div> */}
            <p className="modeling-title">3D Models</p>
            <div className="projects-container projects__modeling">
                {cardsModel.map(model => (
                    <Card key={model.id} projectName={model.name} description={model.description} imgBackground={model.image} deploy={model.deploy} picture={model.picture}/>
                ))}
            </div>
        </div>
    )

}