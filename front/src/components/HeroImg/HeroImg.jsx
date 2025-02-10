import styles from './HeroImg.module.css'
import CV from '../../assets/CV.pdf'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import dwcv from '../../assets/dwcv.svg'

export function HeroImg(){
    return(
        <div>
            <div id='inicio' className={styles['HeroImgBody']}>
                <div className={styles['HeroImgTitle']}>
                    <p className={styles['HeroImgTitleRole']}>Fullstack Developer</p>
                    <p className={styles['HeroImgTitleName']}>Luis Alberto Becerril</p>
                    <p className={styles['HeroImgTitleSubtitle']}>NodeJs | React | NestJs | Python</p>
                </div>
                <div className={styles['HeroImgButtons']}>
                    <a href="https://www.linkedin.com/in/luis-alberto-becerril-moralez/" target='_blank'>
                        <img src={linkedin} alt="" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/LabM123" target='_blank'>
                        <img src={github} alt="" />
                        Github
                    </a>
                    <a href={CV} download='LuisAlbertoBecerrilCV.pdf'>
                        <img src={dwcv} alt="" />
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    )
}