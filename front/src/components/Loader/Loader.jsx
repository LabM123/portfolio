import styles from './Loader.module.css'

export function Loader(){
    return(
        <div className={styles['LoaderBody']}>
            <div className={styles['OuterRing']}>
                <div className={styles['InternalRing']}></div>
            </div>
            <p>Cargando...</p>
        </div>
    )
}