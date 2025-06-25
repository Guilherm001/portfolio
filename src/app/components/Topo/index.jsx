import styles from './styles.module.css';


export default function Topo() {
    return (
        <header className={styles.Topo}>
        <h1>{'<Guilherme/>'}</h1>
        <nav>
            <ul className={styles.menu}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Sobre mim</a></li>
            <li><a href="/">Habilidades</a></li>
            <li><a href="/">Produtos</a></li>
            </ul>
        </nav>
        </header>
    );
}
