import Style from "./Style.module.css";

export default function Card(props) {
  return (
    <div className={Style.Card}>
      <div className={Style.Imagem}>
        <h1>imagem</h1>
      </div>
      <div className={Style.Titulo}>
        <h2>{props.titulo}</h2>
      </div>
      <div className={Style.Descricao}>
        <p>{props.descricao}</p>
      </div>
      <div className={Style.Tecnologias}>
        <p>{props.tecnologia1}</p>
        <p>{props.tecnologia2}</p>
        <p>{props.tecnologia3}</p>
        <p>{props.tecnologia4}</p>
      </div>
      <nav className={Style.Links}>
        <a href="#">Demo</a>
        <a href="#">Código</a>
      </nav>
    </div>
  );
}
