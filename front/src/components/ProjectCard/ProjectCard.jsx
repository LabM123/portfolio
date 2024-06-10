import styles from './ProjectCard.module.css'
import expressIcon from '../../assets/expressIcon.svg'
import mongoIcon from '../../assets/mongoIcon.svg'
import nestIcon from '../../assets/nestIcon.svg'
import nextIcon from '../../assets/nextIcon.svg'
import postgresIcon from '../../assets/postgresIcon.svg'
import reactIcon from '../../assets/reactIcon.svg'
import tailwindIcon from '../../assets/tailwindIcon.svg'
import typescriptIcon from '../../assets/typescriptIcon.svg'
import javascriptIcon from '../../assets/javascriptIcon.svg'

export function ProjectCard({ title, description, technologies, imageUrl}){
    const allTechnologies = ['Next', 'Nest', 'PostgreSQL', 'Typescript', 'Tailwind', 'Express', 'MongoDB', 'React', 'Javascript'];
    const allTechnologiesImages = [nextIcon, nestIcon, postgresIcon, typescriptIcon, tailwindIcon, expressIcon, mongoIcon, reactIcon, javascriptIcon];
    return (
        <div className={styles['CardBody']}>
            <div className={styles['CardBodyMain']}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles['CardTechnologies']}>
                    {technologies.map((technology, index)=>{
                        const imgIndex = allTechnologies.indexOf(technology);
                        const img = allTechnologiesImages[imgIndex];
                        return(
                            <div key={index}>
                                <img src={img} title={allTechnologies[imgIndex]} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <img src={imageUrl} alt="" className={styles['CardSiteImg']}/>
        </div>
    )
    }