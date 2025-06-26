import { useState } from "react";
import styles from "./styles.module.css";

export default function Topo() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.Topo}>
      <h1>{"<Guilherme/>"}</h1>
      <nav>
        <div
          className={styles.hamburguer}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </div>
        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Sobre mim</a>
          </li>
          <li>
            <a href="/">Habilidades</a>
          </li>
          <li>
            <a href="/">Produtos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
