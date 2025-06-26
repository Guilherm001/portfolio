import Style from "./Style.module.css";

export default function Card(props) {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={Style.imagem}>
          <figure className={Style.figure}>{props.imagem}</figure>
        </div>
        <div className={Style.titulo}>
          <h3>{props.titulo}</h3>
        </div>
        <div className={Style.descricao}>
          <p>{props.tecnologias}</p>
        </div>
      </div>
    </div>
  );
}
