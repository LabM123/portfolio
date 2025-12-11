import styles from './Projects.module.css'
import questieSS from '../../assets/questieSS.png'
import proyectoPuriSS from '../../assets/proyectPuriSS.png'
import arestaurantSS from '../../assets/arestaurantSS.png'
import soundsSS from '../../assets/projectSoundsSS.png'
import { ProjectCard } from '../ProjectCard/ProjectCard'

export function Projects({ t }){
    const proyectos = [
        {
            title: t("projects.my-sounds.title"),
            description: t("projects.my-sounds.description"),
            technologies: ['React', 'Nest', 'PostgreSQL', 'Typescript', 'Material UI', 'AWS'],
            imageUrl: soundsSS,
        },
        {
            title: t("projects.questie.title"),
            description: t("projects.questie.description"),
            technologies: ['Next', 'Nest', 'PostgreSQL', 'Typescript', 'Tailwind'],
            imageUrl: questieSS
        },
        {
            title: t("projects.project-puri.title"),
            description: t("projects.project-puri.description"),
            technologies: ['React', 'Express', 'MongoDB', 'Javascript'],
            imageUrl: proyectoPuriSS
        },
        {
            title: t("projects.a-restaurant.title"),
            description: t("projects.a-restaurant.description"),
            technologies: ['React', 'Express', 'PostgreSQL', 'Javascript', 'Typescript'],
            imageUrl: arestaurantSS
        }
    ]
    return(
        <>
        <div id="proyectos"></div>
        <div className='projects-section'>
            <h2 className={styles['ProjectsH2']}>{t("projects.title")}</h2>
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