import styles from './HeroImg.module.css'
import CVEnglish from '../../assets/CVEnglish.pdf'
import CVSpanish from '../../assets/CVSpanish.pdf'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import dwcv from '../../assets/dwcv.svg'

export function HeroImg({ t, language }){
    return(
        <div>
            <div id='inicio' className={styles['HeroImgBody']}>
                <div className={styles['HeroImgTitle']}>
                    <p className={styles['HeroImgTitleRole']}>{t('hero-img.title.role')}</p>
                    <p className={styles['HeroImgTitleName']}>{t('hero-img.title.name')}</p>
                    <p className={styles['HeroImgTitleSubtitle']}>{t('hero-img.title.subtitle')}</p>
                </div>
                <div className={styles['HeroImgButtons']}>
                    <a href="https://www.linkedin.com/in/luis-alberto-becerril-moralez/" target='_blank'>
                        <img src={linkedin} alt="" />
                        {t('hero-img.buttons.linkedin')}
                    </a>
                    <a href="https://github.com/LabM123" target='_blank'>
                        <img src={github} alt="" />
                        {t('hero-img.buttons.github')}
                    </a>
                    <a href={language === 'english' ? CVEnglish : CVSpanish} download='LuisAlbertoBecerrilCV.pdf'>
                        <img src={dwcv} alt="" />
                        {t('hero-img.buttons.download-resume')}
                    </a>
                </div>
            </div>
        </div>
    )
}