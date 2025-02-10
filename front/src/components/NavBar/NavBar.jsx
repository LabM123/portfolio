import styles from './NavBar.module.css'
import photo from '../../assets/photo.png'
import menuIcon from '../../assets/menuButton.svg'
import { useState } from 'react';
import closeButtonSvg from '../../assets/closeButton.svg'
import { Drawer } from '@mui/material';

export function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseDrawer = () => setIsOpen(false)
    const handleOpenDrawer = () => setIsOpen(true)
    return (
        <>
        <div className={styles['NavBarBody']}>
            <img src={menuIcon} alt="" className={styles['MobileNavBarActivator']} onClick={handleOpenDrawer}/>
            <div className={styles['NavBarIcon']}>
                <img src={photo} alt="" />
                <div className={styles['NavBarIconText']}>
                    <p className={styles['NavBarIconTextName']}>Luis Becerril</p>
                    <p className={styles['NavBarIconTextRole']}>Fullstack Developer</p>
                </div>
            </div>
            <div className={styles['NavBarLinks']}>
                <a href="#inicio">Inicio</a>
                <a href="#experiencia">Experiencia</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#formacion">Formacion</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>
        <Drawer open={isOpen} anchor='left' onClose={handleCloseDrawer}>
                <div className={styles['MobileNavBarMain']}>
                    <img src={closeButtonSvg} alt="" className={styles['MobileNavBarCloseButton']} onClick={handleCloseDrawer}/>
                    <a href="#inicio" onClick={handleCloseDrawer}>Inicio</a>
                    <a href="#experiencia" onClick={handleCloseDrawer}>Experiencia</a>
                    <a href="#proyectos" onClick={handleCloseDrawer}>Proyectos</a>
                    <a href="#formacion" onClick={handleCloseDrawer}>Formacion</a>
                    <a href="#contacto" onClick={handleCloseDrawer}>Contacto</a>
                </div>
            <div className={styles['MobileNavBarBody']}>
            </div>
        </Drawer>
        </>
    )
}