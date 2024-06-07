import styles from './NavBar.module.css'
import photo from '../../assets/photo.png'

export function NavBar(){
    return (
        <div className={styles['NavBarBody']}>
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
                <a href="">Contacto</a>
            </div>
        </div>
    )
}