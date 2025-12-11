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

export function Experience({ t }){
    const experiences = [
        {
            id: "Coders Link",
            position: t("experience.job.coders-link.position"),
            company: t("experience.job.coders-link.company"),
            startDate: t("experience.job.coders-link.start-date"),
            endDate: t("experience.job.coders-link.end-date"),
            details: [
                t("experience.job.coders-link.responsibilities-1"),
                t("experience.job.coders-link.responsibilities-2"),
                t("experience.job.coders-link.responsibilities-3"),
            ]
        },
        {
            id: "Muhami",
            position: t("experience.job.muhami.position"),
            company: t("experience.job.muhami.company"),
            startDate: t("experience.job.muhami.start-date"),
            endDate: t("experience.job.muhami.end-date"),
            details: [
                t("experience.job.muhami.responsibilities-1"),
                t("experience.job.muhami.responsibilities-2"),
                t("experience.job.muhami.responsibilities-3"), 
            ]
        },
        {
            id: "Henry",
            position: t("experience.job.henry.position"),
            company: t("experience.job.henry.company"),
            startDate: t("experience.job.henry.start-date"),
            endDate: t("experience.job.henry.end-date"),
            details: [
                t("experience.job.henry.responsibilities-1"),
                t("experience.job.henry.responsibilities-2"),
                t("experience.job.henry.responsibilities-3"),
            ]
        },
        {
            id: "CCSI",
            position: t("experience.job.ccsi.position"),
            company: t("experience.job.ccsi.company"),
            startDate: t("experience.job.ccsi.start-date"),
            endDate: t("experience.job.ccsi.end-date"),
            details: [
                t("experience.job.ccsi.responsibilities-1"),
                t("experience.job.ccsi.responsibilities-2"),
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
            <h2 className={styles["ExperienceH2"]}>{t('experience.title')}</h2>
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
                    {renderExperiencesMobile()}
                </div>
            </div>
        </div>
        </>
    )
}