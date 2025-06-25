import styles from "./styles.module.css";

export default function Capa() {
  return (
    <div className={styles.capa}>
      <img src="/images/gui.jpg" alt="Guilherme" className={styles.foto} />
      <h1>
        Olá, eu sou o <span>Guilherme</span>.
      </h1>
      <p>Desenvolvedor Full-Stack sempre em busca de experiencias incríveis.</p>
      <div className={styles.botoes}>
        <button className={styles.botaoProjetos}>Meus Projetos</button>
        <button className={styles.botaoSaibaMais}>Saiba Mais</button>
      </div>
    </div>
  );
}
