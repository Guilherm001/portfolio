import Card from "./card";
import {
  FiDatabase,
  FiServer,
  FiCloud,
  FiCode,
  FiGitBranch,
  FiTool,
} from "react-icons/fi";
import { BsClipboardCheck, BsLayoutWtf } from "react-icons/bs";
import Style from "./Style.module.css";

export default function Habilidades(props) {
  return (
    <section className="habilidades">
      <div className={Style.titulopagina}>
        <h2>Minhas Habilidades</h2>
      </div>
      <div className={Style.containerpai}>
        <Card
          imagem={<FiCode />}
          titulo="Front-End"
          tecnologias="React, Next.js, JavaScript, TypeScript, HTML, CSS"
        />
        <Card
          imagem={<FiServer />}
          titulo="Back-End"
          tecnologias="Node.js (Express, NestJS), REST APIs, Microservices"
        />

        <Card
          imagem={<FiDatabase />}
          titulo="Bancos de Dados"
          tecnologias="PostgreSQL, MongoDB, MySQL, Redis"
        />

        <Card
          imagem={<FiCloud />}
          titulo="Cloud & DevOps"
          tecnologias="Supabase, Git"
        />

        <Card
          imagem={<BsLayoutWtf />}
          titulo="Design UI/UX"
          tecnologias="Figma, Sketch, Adobe XD, Prototipagem, Wireframing"
        />

        <Card
          imagem={<BsClipboardCheck />}
          titulo="Testes"
          tecnologias="Jest, React Testing Library, Cypress, Pytest, Mocha, Chai"
        />

        <Card
          imagem={<FiGitBranch />}
          titulo="Controle de Versão"
          tecnologias="Git, GitHub"
        />

        <Card
          imagem={<FiTool />}
          titulo="Ferramentas"
          tecnologias="npm, Yarn, Postman, VS Code"
        />
      </div>
    </section>
  );
}
