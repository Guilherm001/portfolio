import Style from "./Style.module.css";

export default function Footer() {
  return (
    <div>
      <section className={Style.footer}>
        <div className={Style.footerContainer}>
          <div className={Style.titulo}>
            <h1>Vamos Conversar!</h1>
          </div>
          <div className={Style.descricao}>
            Estou sempre em busca de novas conexões e desafios. Se você tem um
            projeto em mente, uma oportunidade de trabalho, ou apenas quer
            trocar ideias, me envie uma mensagem!
          </div>
          <div className={Style.contato}>
            <a href="">Email</a>
            <a href="">Linkedin</a>
            <a href="">Github</a>
            <a href="">Whatsapp</a>
          </div>
        </div>
      </section>
      <div className={Style.assinatura}>
        <p>© 2025 Guilherme</p>
      </div>
    </div>
  );
}
