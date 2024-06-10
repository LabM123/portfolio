import { useState } from 'react'
import styles from './MobileNavBar.module.css'
import closeButtonSvg from '../../assets/closeButton.svg'

export function MobileNavBar(){
    const [isOpen, setIsOpen] = useState(true)
    const toogleNavBar = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
        {
            isOpen ?
            <div className={`${styles['MobileNavBarBody']}`} onClick={toogleNavBar}>
                <div className={styles['MobileNavBarMain']}>
                    <img src={closeButtonSvg} alt="" className={styles['MobileNavBarCloseButton']} onClick={toogleNavBar}/>
                    <a href="#inicio" onClick={toogleNavBar}>Inicio</a>
                    <a href="#proyectos" onClick={toogleNavBar}>Proyectos</a>
                    <a href="#formacion" onClick={toogleNavBar}>Formacion</a>
                    <a href="#contacto" onClick={toogleNavBar}>Contacto</a>
                </div>
            </div>
            : null
        }
        </>
    )
}