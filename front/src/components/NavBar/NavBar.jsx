import styles from './NavBar.module.css'
import photo from '../../assets/photo.png'
import menuIcon from '../../assets/menuButton.svg'
import { useState } from 'react';
import closeButtonSvg from '../../assets/closeButton.svg'

export function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const toogleNavBar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <div className={styles['NavBarBody']}>
            <img src={menuIcon} alt="" className={styles['MobileNavBarActivator']} onClick={toogleNavBar}/>
            <div className={styles['NavBarIcon']}>
                <img src={photo} alt="" />
                <div className={styles['NavBarIconText']}>
                    <p className={styles['NavBarIconTextName']}>Luis Becerril</p>
                    <p className={styles['NavBarIconTextRole']}>Fullstack Developer</p>
                </div>
            </div>
            <div className={styles['NavBarLinks']}>
                <a href="#inicio">Inicio</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#formacion">Formacion</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>
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