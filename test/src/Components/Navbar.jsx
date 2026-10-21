import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <span className="Navabar-Logo">dev.portafolio</span>
            <ul className={styles.links}>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#'proj'">Proyectos</a></li>
                <li><a href="#about">Contactos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar