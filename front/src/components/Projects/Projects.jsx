import styles from './Projects.module.css'
import questieSS from '../../assets/questieSS.png'
import proyectoPuriSS from '../../assets/proyectPuriSS.png'
import { ProjectCard } from '../ProjectCard/ProjectCard'

export function Projects(){
    const proyectos = [
        {
            title: 'Questie',
            description: 'Fue ideada como una aplicacion de aprendizaje en linea a traves de cursos, con integraciones para hacer pagos por medio de Mercado Pago y Paypal e integraciones de inteligencia artificial para un ChatBot',
            technologies: ['Next', 'Nest', 'PostgreSQL', 'Typescript', 'Tailwind'],
            imageUrl: questieSS
        },
        {
            title: 'Proyecto Puri',
            description: 'La aplicacion fue ideada para un negocio con gio de purificadora de agua que facilitaria a los usuarios hacer pedidos en linea, despues de un resgitro que facilitaria la informacion de contacto a los repartidores',
            technologies: ['React', 'Express', 'MongoDB', 'Javascript'],
            imageUrl: proyectoPuriSS
        },
        {
            title: 'A Restaurant',
            description: 'Una aplicacion pensada para un restaurante que quisiera contar con un sistema de reservaciones, pudiendo este proveer a la plataforma de dias inhabiles, horarios, etc.',
            technologies: ['React', 'Express', 'PostgreSQL', 'Javascript'],
            imageUrl: proyectoPuriSS
        }
    ]
    return(
        <>
        <div id="proyectos"></div>
        <div className='projects-section'>
            <h2 className={styles['ProjectsH2']} >Proyectos</h2>
            <div className={styles['ProjectsBody']}>
                {proyectos.map((proyecto, index) => (
                    <ProjectCard
                    key={index}
                    title={proyecto.title}
                    description={proyecto.description}
                    technologies={proyecto.technologies}
                    imageUrl={proyecto.imageUrl}
                    />
                ))}
            </div>
        </div>
        </>
    )
}