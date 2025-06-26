import Style from "./Style.module.css";

export default function Card(props) {
  return (
    <div>
      <div className={Style.Imagem}>
        <h1>imagem</h1>
      </div>
      <div>
        <h2>{props.titulo}</h2>
      </div>
      <div>
        <p>{props.descricao}</p>
      </div>
      <div>
        <p>{props.tecnologia1}</p>
        <p>{props.tecnologia2}</p>
        <p>{props.tecnologia3}</p>
      </div>
      <nav>
        <a href="#">Demo</a>
        <a href="#">Código</a>
      </nav>
    </div>
  );
}
