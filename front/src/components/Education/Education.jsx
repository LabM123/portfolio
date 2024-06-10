import styles from './Education.module.css'
import englishCert from '../../assets/englishCert.png'
import linkIcon from '../../assets/linkIcon.svg'

export function Education() {
    return (
        <div className='education-section'>
            <h2 className={styles['EducationH2']}>Educacion y Certificaciones</h2>
            <div className={styles['EducationBody']}>
                <div className={styles['EducationCard']}>
                    <img src={englishCert} alt="" className={styles['EducationCardSS']}/>
                    <div className={styles['EducationCardBody']}>
                        <div className={styles['EducationCardHeader']}>
                            <h3>Henry Bootcamp - Fullstack Developer</h3>
                            <a href="https://cert.efset.org/YpdYsd">
                                <img src={linkIcon} alt="" title='Link al certificado'/>
                            </a>
                        </div>
                        <div className={styles['EducationCardMain']}>
                        El certificado de Full Stack Web Developer, emitido por Henry Bootcamp, acredita la finalización exitosa de un programa intensivo en desarrollo web. Este curso cubre tecnologías clave como HTML, CSS, JavaScript, React, Node.js, y bases de datos SQL y NoSQL. Los graduados han demostrado competencia en la creación de aplicaciones web modernas y la implementación de APIs RESTful.
                        </div>
                    </div>
                </div>
                <div className={styles['EducationCard']}>
                    <img src={englishCert} alt="" className={styles['EducationCardSS']}/>
                    <div className={styles['EducationCardBody']}>
                        <div className={styles['EducationCardHeader']}>
                            <h3>Certificado EF SET 71/100 (C2 Proficient)</h3>
                            <a href="https://cert.efset.org/YpdYsd">
                                <img src={linkIcon} alt="" title='Link al certificado'/>
                            </a>
                        </div>
                        <div className={styles['EducationCardMain']}>
                        El certificado de Inglés C2, emitido por el EF Standard English Test (EF SET), acredita un dominio avanzado del inglés, equivalente al nivel C2 del Marco Común Europeo de Referencia para las Lenguas (MCER). Este nivel demuestra la capacidad de comprender y resumir información compleja, y expresarse de manera fluida y precisa en cualquier contexto.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}