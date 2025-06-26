import Card from "./card";
import Style from "./Style.module.css";

export default function Projetos() {
  return (
    <section className={Style.Projetos}>
      <div className={Style.containerTitulo}>
        <h1>Projetos em Destaque</h1>
      </div>
      <div className={Style.containerCards}>
        <Card
          imagem="/projeto1.png"
          titulo="Projeto 1"
          descricao="Descrição do Projeto 1"
          tecnologia1=" React"
          tecnologia2=" JavaScript"
          tecnologia3=" CSS"
          tecnologia4=" Next.js"
          link1=""
          link2=""
        />
      </div>
    </section>
  );
}
