import styles from './Education.module.css'
import englishCert from '../../assets/englishCert.png'
import henryCert from '../../assets/henryCert.png'
import linkIcon from '../../assets/linkIcon.svg'

export function Education({ t }) {
    const certifications = [
        {
            id: "henry",
            title: t("certifications.henry.title"),
            description: t("certifications.henry.description"),
            img: henryCert,
            link: "https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=dd0cd683be30e55b14c128b13e8dc73cc0337db813c6c98cbef5cafff071f7b5"
        },
        {
            id: "efset",
            title: t("certifications.efset.title"),
            description: t("certifications.efset.description"),
            img: englishCert,
            link: "https://cert.efset.org/YpdYsd"
        }
    ]

    function renderCertifications() {
        return certifications.map((cert, index) => (
            <div className={styles['EducationCard']} key={index}>
                <img src={cert.img} alt="" className={styles['EducationCardSS']}/>
                <div className={styles['EducationCardBody']}>
                    <div className={styles['EducationCardHeader']}>
                        <h3>{cert.title}</h3>
                        <a href={cert.link} target='_blank'>
                            <img src={linkIcon} alt="" title='Link al certificado'/>
                        </a>
                    </div>
                    <div className={styles['EducationCardMain']}>
                        {cert.description}
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className='education-section'>
            <h2 className={styles['EducationH2']}>{t("certifications.title")}</h2>
            <div className={styles['EducationBody']}>
                {renderCertifications()}
            </div>
        </div>
    )
}