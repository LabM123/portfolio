import styles from './NavBar.module.css'
import photo from '../../assets/photo.png'
import menuIcon from '../../assets/menuButton.svg'
import { useState } from 'react';
import closeButtonSvg from '../../assets/closeButton.svg'
import { Button, Drawer, Stack, Switch, Typography } from '@mui/material';
import MobileComponent from '../MobileComponent/MobileComponent';

export function NavBar({ language, setLanguage, t }) {
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
                <a href="#inicio">{t("navbar.links.home")}</a>
                <a href="#experiencia">{t("navbar.links.experience")}</a>
                <a href="#proyectos">{t("navbar.links.projects")}</a>
                <a href="#formacion">{t("navbar.links.tech-stack")}</a>
                <a href="#contacto">{t("navbar.links.contact")}</a>
                <Stack direction="row" alignItems="center" spacing={0}>
					<p
						style={{
							color: "white",
							fontWeight: "500",
							zIndex: 1,
							margin: 0,
						}}
					>
						ES
					</p>
					<Switch
						checked={language === "english"}
						onChange={() => setLanguage(language === "english" ? "spanish" : "english")}
						sx={{
							'& .MuiSwitch-track': {
								backgroundColor: '#1976d2 !important',
								opacity: '1 !important',
							},
							'& .MuiSwitch-thumb': {
								color: '#fff !important',
							},
						}}
					/>
					<p
						style={{
							color: "white",
							fontWeight: "500",
							zIndex: 1,
							margin: 0,
						}}
					>
						EN
					</p>
				</Stack>
            </div>
            <MobileComponent>
                <Button
					onClick={() => setLanguage(language === 'english' ? 'spanish' : 'english')}
					sx={{
						border: '1px solid rgba(37, 49, 39, 1)',
						padding: 0,
						minWidth: "3rem",
						minHeight: "3rem",
						fontFamily: 'Poppins, sans-serif',
						fontWeight: 500,
					}}
				>
					<Typography
						sx={{
							color: "white",
							fontWeight: 500,
							fontFamily: 'Poppins, sans-serif',
						}}
					>
						{language === 'english' ? 'EN' : 'ES'}
					</Typography>
				</Button>
            </MobileComponent>
        </div>
        <Drawer open={isOpen} anchor='left' onClose={handleCloseDrawer}>
                <div className={styles['MobileNavBarMain']}>
                    <img src={closeButtonSvg} alt="" className={styles['MobileNavBarCloseButton']} onClick={handleCloseDrawer}/>
                    <a href="#inicio" onClick={handleCloseDrawer}>{t("navbar.links.home")}</a>
                    <a href="#experiencia" onClick={handleCloseDrawer}>{t("navbar.links.experience")}</a>
                    <a href="#proyectos" onClick={handleCloseDrawer}>{t("navbar.links.projects")}</a>
                    <a href="#formacion" onClick={handleCloseDrawer}>{t("navbar.links.tech-stack")}</a>
                    <a href="#contacto" onClick={handleCloseDrawer}>{t("navbar.links.contact")}</a>
                </div>
            <div className={styles['MobileNavBarBody']}>
            </div>
        </Drawer>
        </>
    )
}