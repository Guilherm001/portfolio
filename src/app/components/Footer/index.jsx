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
            <a
              href="mailto:guilherm.rodrigues@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-rodrigues-492814300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Guilherm001"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://wa.me/5511982135919"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </section>
      <div className={Style.assinatura}>
        <p>© 2025 Guilherme</p>
      </div>
    </div>
  );
}
