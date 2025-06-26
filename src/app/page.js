"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Topo from "./components/Topo/index.jsx";
import FundoInterativo from "./components/FundoInterativo/index.jsx";
import Capa from "./components/Capa/index";
import Sobre from "./components/sobre/index.jsx";
import Habilidades from "./components/habilidades/index.jsx";
import Projetos from "./components/Projetos/index.jsx";
export default function Home() {
  return (
    <main>
      <Topo />
      <FundoInterativo />
      <Capa />
      <Sobre />
      <Habilidades />
    </main>
  );
}
