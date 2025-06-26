import Card from "./card";

export default function Habilidades(props) {
  return (
    <section className="habilidades">
      <div>
        <h2>Minhas Habilidades</h2>
      </div>
      <div>
        <Card
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          titulo="Front-End"
          tecnologias="React, Next.js, JavaScript, TypeScript, HTML, CSS"
        />
        <Card
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          titulo="Front-End"
          tecnologias="React, Next.js, JavaScript, TypeScript, HTML, CSS"
        />
      </div>
    </section>
  );
}
