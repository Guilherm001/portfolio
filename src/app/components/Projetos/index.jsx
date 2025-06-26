import Card from "./card";
import Style from "./Style.module.css";

export default function Projetos() {
  return (
    <section>
      <div>
        <h1>Projetos em Destaque</h1>
      </div>
      <div>
        <div>
          <Card
            imagem="/projeto1.png"
            titulo="Projeto 1"
            descricao="Descrição do Projeto 1"
            tecnologia1=""
            tecnologia2=""
            tecnologia3=""
            tecnologia4=""
            botao1=""
            botao2=""
          />
        </div>
      </div>
    </section>
  );
}
