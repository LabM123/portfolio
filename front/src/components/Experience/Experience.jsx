import styles from './Experience.module.css'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {timelineOppositeContentClasses,} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import dropdownIcon from '../../assets/dropdownIcon.svg'
import { useState } from 'react';

export function Experience(){
    const experiences = [
        {
            id: "Muhami",
            position: "Fullstack Developer",
            company: "Consultora Muhami",
            startDate: "Oct 2024",
            endDate: "Presente",
            details: [
                "Desarrollé una herramienta interna para una de las dos mayores televisoras del país, utilizando React, FastAPI, SQLAlchemy y Kafka en una arquitectura orientada a eventos bajo principios de Domain-Driven Design (DDD).",
                "Colaboré en la traducción de requerimientos del cliente y lógica de negocio a funciones dentro de la aplicación, asegurando que el sistema cumpliera con las necesidades específicas del negocio.",
                "Colaboré en un equipo ágil bajo metodología SCRUM, participando en sprints, dailys y retrospectivas para garantizar la entrega de funcionalidades.", 
            ]
        },
        {
            id: "Henry",
            position: "Practicas Profesionales",
            company: "Henry Bootcamp",
            startDate: "May 2024",
            endDate: "Jun 2024",
            details: [
                "Desarrolle una aplicacion web para un negocio de mudanzas utylizando React, Express, MongoDB y JWT para la autenticacion de usuarios.",
                "Se hicieron integraciones con Google Maps para la geolocalización de los clientes y la generación de rutas para los traslados y pasarela de pagos con Mercado Pago.", 
                "Colaboré en un equipo de desarrollo, participando en reuniones de planificación y revisión de código para garantizar la entrega de funcionalidades.", 
            ]
        },
        {
            id: "CCSI",
            position: "Bilingual Appointment Setter",
            company: "CCSI",
            startDate: "Feb 2023",
            endDate: "May 2023",
            details: [
                "Coordine soluciones de programación de viajes, atendiendo clientes que utilizaban los servicios de Lyft y Uber bajo las condiciones de su seguro.",
                "Utilice estrategias de comunicación matizadas para proporcionar soluciones personalizadas a problemáticas respecto al funcionamiento de la plataforma.",
            ]
        },
    ] 

    const renderExperiences = () => {
        return experiences.map((experience, index) => (
            <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography color="rgb(182, 182, 39)" sx={{fontFamily: "Poppins"}}>{experience.startDate} - {experience.endDate}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    {index < experiences.length - 1 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="span" sx={{color: "rgb(182, 182, 39)", fontFamily: "Poppins", padding: "0 .5rem"}}>
                        {experience.position}
                    </Typography>
                    <Typography sx={{color: "rgb(233, 233, 136)", fontFamily: "Poppins", padding: "0 1rem"}}>{experience.company}</Typography>
                    <ul style={{fontFamily: "Poppins", listStyleType: "initial", paddingLeft: " 2rem", paddingTop: ".5rem"}}>
                        {experience.details.map((detail, index) => (
                            <li key={index} style={{padding: ".25rem 0"}}>{detail}</li>
                        ))}
                    </ul>
                </TimelineContent>
            </TimelineItem>
        ))
    }

    const [isExperienceOpen, setIsExperienceOpen] = useState({})

    const handleExperienceToogle = (id) => {
        setIsExperienceOpen(prev => ({...prev, [id]: !prev[id] || false}))
    }

    const renderExperiencesMobile = () => {
        return experiences.map((experience, index) => (
            <div className={styles["ExperienceMobileItem"]} key={index}>
                <div className={styles["ExperienceMobileItemMain"]} onClick={() => handleExperienceToogle(experience.id)}>
                    <div className={styles["ExperienceMobileItemMainTitle"]}>
                        <h3 className={styles["ExperienceMobileItemTitle"]}>{experience.position}</h3>
                        <p className={styles["ExperienceMobileItemCompany"]}>{experience.company}</p>
                        <p className={styles["ExperienceMobileItemDate"]}>{experience.startDate} - {experience.endDate}</p>
                    </div>
                    <img className={`${styles["ExperienceMobileItemDropdown"]} ${isExperienceOpen[experience.id] ? styles["dropdownOpen"] : styles["dropdownClose"]}`} src={dropdownIcon} alt="dropdown"/>
                </div>
                <div className={`${styles["ExperienceMobileItemDetails"]} ${isExperienceOpen[experience.id] ? styles["detailsOpen"] : styles["detailsClose"]}`}>
                    <ul style={{fontFamily: "Poppins", listStyleType: "initial", padding: "1rem"}}>
                        {experience.details.map((detail, index) => (
                            <li key={index} style={{marginBlock: ".5rem", fontSize: ".9rem"}}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))
    }

    return (
        <>
        <div id="experiencia"></div>
        <div className="experience-section">
            <h2 className={styles["ExperienceH2"]}>Experiencia</h2>
            <div className={styles["ExperienceBody"]}>
                <div className={styles["ExperienceDesktop"]}>
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.2,
                            },
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        {renderExperiences()}
                    </Timeline>
                </div>
                <div className={styles["ExperienceMobile"]}>
                    {/* <div className={styles["ExperienceMobileItem"]}>
                        <div className={styles["ExperienceMobileItemMain"]}>
                            <div className={styles["ExperienceMobileItemMainTitle"]}>
                                <h3 className={styles["ExperienceMobileItemTitle"]}>Fullstack Developer</h3>
                                <p className={styles["ExperienceMobileItemCompany"]}>Consultora Muhami</p>
                                <p className={styles["ExperienceMobileItemDate"]}>Oct 2024 - Presente</p>
                            </div>
                            <img className={styles["ExperienceMobileItemDropdown"]} src={dropdownIcon} alt="dropdown" onClick={() => handleExperienceToogle()}/>
                        </div>
                    </div> */}
                    {renderExperiencesMobile()}
                </div>
            </div>
        </div>
        </>
    )
}