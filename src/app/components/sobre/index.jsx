import Style from "./style.module.css";

export default function Sobre() {
  return (
    <main className={Style.containerPai}>
      <div className={Style.containerFilho}>
        <div className={Style.Titulo}>
          <h1>Sobre Mim</h1>
        </div>
        <div className={Style.containerSobre}>
          <div className={Style.containerImagem}>
            <img
              src="/images/robot.gif"
              alt="Guilherme"
              className={Style.gifCentro}
            />
            <img
              src="/images/gif.gif"
              alt="Imagem de exemplo"
              className={Style.gifDireita}
            />
            <img
              src="/images/bug.gif"
              alt="Guilherme"
              className={Style.gifEsquerda}
            />
          </div>
          <div className={Style.containerTexto}>
            <p>
              Quando escrevi meu primeiro "Hello, World", eu ainda não sabia
              exatamente o que buscava. Já tinha 24 anos e nenhuma ideia clara
              sobre o que queria fazer da minha vida. Foi então que, quase por
              acaso, conheci a profissão de desenvolvedor e pensei: por que não
              tentar? Sempre gostei da ideia de aprendizado contínuo, de poder
              me aprimorar de forma quase infinita — e isso me empolgava muito.
              Mas o momento em que realmente me apaixonei pela área foi quando
              finalizei meu primeiro projeto. Era algo simples, feito apenas com
              HTML e CSS, mas foi o suficiente para me dar uma enorme alegria e
              uma sensação de realização pessoal. Desde então, nunca mais tive
              dúvidas sobre qual caminho seguir.
            </p>
            <p>
              Atualmente atuo como desenvolvedor Full-Stack, com conhecimentos
              em JavaScript, Python, React, Node.js e no desenvolvimento de APIs
              RESTful. Também tenho experiência com controle de versão usando
              Git, além de trabalhar com bancos de dados relacionais (SQL) e não
              relacionais (NoSQL). Grande parte do que aprendi veio da prática.
              Gosto de testar ideias, quebrar a cabeça e ver as coisas ganhando
              forma. Para mim, programar é resolver problemas de forma criativa,
              e é isso que me prende tanto à área. Estou sempre buscando
              aprender mais e me superar a cada proje
            </p>
            <p>
              Tudo o que eu preciso é de uma chance. Talvez eu ainda não seja o
              mais qualificado entre suas opções, mas posso garantir uma coisa:
              vou me dedicar como poucos fariam. Me comprometo a crescer,
              aprender e me tornar um dos melhores dentro da empresa. Só preciso
              de uma oportunidade — apenas uma — para mostrar do que sou capaz.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
