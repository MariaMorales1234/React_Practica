import styles from './hero.module.css'

function Hero({ name }) {
    return (
        <section className={styles.hero}>
            <p className="hero-greeting">Hola, soy</p>
            <h1 className="hero-name">{ name }</h1>
            <h3 className="hero-professions">Ilustradora & Ingeniería Multimedia</h3>
            <p className="hero.message">Creo experiencias apartir del diseño y la programación</p>
            <button className="button-project">Ver Proyectos</button>
        </section>
    )
}

export default Hero