import { useState } from "react";
import { ContainerCentral, ContainerIcons, Fundo, Paragrafo } from "./styles";

// assets
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

// Carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imagens
import Print1 from "../../assets/print1.png";
import Print2 from "../../assets/print2.png";
import Print1app from "../../assets/print1app.jpeg";
import Print2app from "../../assets/print2app.jpeg";
import Print3app from "../../assets/print3app.jpeg";

// primereact
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";

const Home = () => {
  const handleLinkedin = (e: any) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/guilherme-lincoln-lima/",
      "_blank"
    );
  };

  const handleGithub = (e: any) => {
    e.preventDefault();
    window.open("https://github.com/lincolnzera1", "_blank");
  };

  const projetos = [
    {
      titulo: "Projeto Adelco",
      descricao:
        "Aplicativo feito com a biblioteca ReactTS, para o projeto indígenas da organização Adelco.",
      demonstracao:
        "https://www.youtube.com/watch?v=A8b27nAITpA&ab_channel=starscream",
      // git: ""
    },
    {
      titulo: "Oficinas 4.0",
      descricao:
        "Desenvolvedor Flutter/Dart.\n Desenvolvedor ReactJs & Node.js.",
      demonstracao: "https://youtube.com/shorts/IdNKacMWh3Y",
      demonstracao2: "https://youtu.be/UUYxWCjy7mU",
      gitFront: "https://github.com/lincolnzera1/infinity-power-project",
      gitBack: "https://github.com/lincolnzera1/infinity-power-backend",
    },
    {
      titulo: "Esp32/Flutter controle de led",
      descricao:
        "Flutter/Dart.\nLinguagem C com esp32.\nMontagem de circuitos com esp32.",
      demonstracao: "https://youtu.be/JFGyK0pN4XU",
      git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo: "Carrinho bluetooth",
      descricao:
        "Controlando carrinho com arduino usando aplicativo feito em Kotlin",
      demonstracao:
        "https://www.youtube.com/watch?v=XT8551M75ho&ab_channel=starscream",
      git: "https://github.com/lincolnzera1/Kotlin-bluetooth-arduino",
    },
    {
      titulo: "Aplicativo projeto indígenas",
      descricao:
        "Aplicativo feito com o framework Flutter, para o projeto indígenas da organização Adelco.",
      demonstracao: "https://youtu.be/hUpfe-clK38",
      // git: "https://github.com/lincolnzera1/Kotlin-bluetooth-arduino",
    },
    {
      titulo: "Site Lit alunos",
      descricao:
        "Aplicativo feito com o biblioteca ReactTS, para divulgação dos projetos dos bolsistas do LIT.",
      demonstracao: "https://youtu.be/gdgw3TPU7l0",
      git: "https://github.com/lincolnzera1/Lit-feed",
    },
    {
      titulo: "App Provérbio do dia",
      descricao:
        "Aplicativo feito com o framework Flutter, para gerar uma passagem de provérbios diferente todo dia.",
      demonstracao: "https://youtube.com/shorts/NMK9-uJADbM",
      git: "https://github.com/lincolnzera1/Flutter_MVC",
    },
    {
      titulo: "App QR code",
      descricao:
        "Aplicativo feito com o framework Flutter, ler, copiar, abrir e compartilhar o link do QR code",
      demonstracao: "https://youtube.com/shorts/1MQj-zQIPx8",
      git: "https://github.com/lincolnzera1/QR_code_scanner",
    },
    {
      titulo: "Social ignite - rocketseat",
      descricao:
        "Site feito com a biblioteca React. Site Feito no curso da rocketseat para aprimorar meus conhecimentos em React.",
      demonstracao: "https://youtu.be/N9KZkDwpD0k",
      git: "https://github.com/lincolnzera1/01-social-ignite",
    },
    {
      titulo: "Lit Flutter App ",
      descricao:
        "Aplicativo feito com o framework Flutter, para cadastro e comunicação dos alunos do laboratório LIT.",
      demonstracao: "https://youtube.com/shorts/CQvh1-grAK8",
      git: "https://github.com/lincolnzera1/projeto_rest",
    },
    {
      titulo: "Acendendo LED com webservers, flutter e esp32",
      descricao:
        "Integração da esp32 e do aplicativo flutter, para comunicação via webserver com a placa esp32. Consiste numa variante do código do App Oficias 4.0 - dush",
      demonstracao: "https://youtube.com/shorts/kx7DY7PO-io",
      git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo:
        "Aplicativo feito em Flutter, que faz o cálculo do consumo de energia de um chuveiro elétrico",
      descricao:
        "Aplicativo feito para ter uma ideia do gasto do consumo de energia elétrica de um chuveiro em um determinado período",
      demonstracao: "https://youtube.com/shorts/sh3pxnTNNYY",
      // git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo: "Color detection",
      descricao: `Site feito com uma integração com um backend python, 
        onde o python detecta a cor amarela pela câmera, e manda a posição da cor na tela para o backend em Node.\n
        O backend node cria um webserver com as informações e guarda a ultima atualização de posição em uma variável.\n
        O frontend faz constantemente requisições para o webserver do node, pedindo a posição da cor na tela.\n 
        Assim, o front recebe os dados (números entre 0 e 1), e multiplica isso pela largura da tela. 
        O resultado é atualizado na largura da div vermelha`,
      demonstracao: "https://youtu.be/J1pQA5Vydtg",
      git: "https://github.com/lincolnzera1/Python-color-detection",
    },
    {
      titulo: "Arduino Face Detection",
      descricao:
        "Sistema feito para detectar rostos com python. Ao detectar um rosto, o código python manda um sinal para o arduino via serial.\n Com esse sinal, o arduino faz uma ação, que no caso é mexer o servo motor.",
      demonstracao:
        "https://www.youtube.com/watch?v=e6ovtVS5xHE&ab_channel=starscream",
      // git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo: "Arduino Bluetooth Car",
      descricao:
        "Carrinho feito para ser controlado via bluetooth, por um aplicativo feito em Kotlin",
      demonstracao: "https://youtu.be/XT8551M75ho",
      git: "https://github.com/lincolnzera1/Kotlin-bluetooth-arduino",
    },
  ];

  const createDynamicTabs = () => {
    return (
      <AccordionTab header="Projetos">
        {/* Agrupar todos os parágrafos dentro de um único elemento div */}
        <div>
          {projetos.map((projeto, index) => (
            <div key={index} className="m-0">
              <h3>{projeto.titulo}:</h3>
              <p>{projeto.descricao}</p>
              <Button
                onClick={() => {
                  window.open(projeto.demonstracao, "_blank");
                }}
                severity="secondary"
                outlined
                label="Demonstração"
              />
              {projeto.git ? (
                <Button
                  onClick={() => {
                    window.open(projeto.git, "_blank");
                  }}
                  severity="secondary"
                  outlined
                  label="Código fonte"
                />
              ) : null}
              {projeto.gitBack ? (
                <Button severity="secondary" outlined label="Código Backend" />
              ) : null}
            </div>
          ))}
        </div>
      </AccordionTab>
    );
  };

  return (
    <Fundo>
      <ContainerCentral>
        <Paragrafo size={40}>Guilherme Lincoln</Paragrafo>
        <Paragrafo>
          Olá! Eu sou desenvolvedor Front-end com 1+ anos de experiência. Tenho
          experiência atuando em projetos utilizando o Framework Flutter com a
          linguagem Dart e a biblioteca React, com as linguagens Javascript e
          Typescript.
        </Paragrafo>
        <ContainerIcons>
          <a href="#" onClick={handleGithub}>
            <BsGithub size={30} />
          </a>
          <a href="#" onClick={handleLinkedin}>
            <BsLinkedin size={30} />
          </a>
        </ContainerIcons>
        <div className="card">
          <Accordion>{createDynamicTabs()}</Accordion>
        </div>
      </ContainerCentral>
    </Fundo>
  );
};

export default Home;
