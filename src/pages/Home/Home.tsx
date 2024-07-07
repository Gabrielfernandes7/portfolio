import { useState } from "react";
import { ContainerCentral, ContainerIcons, Fundo, Paragrafo } from "./styles";

// assets
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

// Carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// primereact
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

const Home = () => {
  const handleLinkedin = (e: any) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/gabriel-assun%C3%A7%C3%A3o-fernandes-mecatronica-aluno-ifce/",
      "_blank"
    );
  };

  const handleGithub = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.open("https://github.com/Gabrielfernandes7", "_blank");
  };

  const projetos = [
    {
      titulo: "Todo List Simples - Backend",
      descricao:
        "Este projeto tive como objetivo aplicar todos meu conhecimentos e documentar tudo que aprendo de novo no backend com o framework Spring Boot",
      git: "https://github.com/Gabrielfernandes7/todo-list",
    },
    {
      titulo: "Algoritmos Beecrowd",
      descricao:
        "Resolução de problemas propostos da Beecrowd com a linguagem Java",
      git: "https://github.com/Gabrielfernandes7/Algoritmos",
    },
    {
      titulo: "Algoritmos e Estrutura de dados com Java",
      descricao:
        "Reforçando conhecimentos de Algoritmos e Estrutura de dados com Java.",
      git: "https://github.com/Gabrielfernandes7/Estrutura-de-dados-Java",
    },
    {
      titulo:
        "Cardápio Digital - Backend",
      descricao:
        "API de cardápio digital utilizando o recurso DTO",
      git: "https://github.com/Gabrielfernandes7/cardapio-digital-api/",
    },
    {
      titulo: "POO com Python",
      descricao: "Reforçando os conceitos de POO aplicados com Python",
      git: "https://github.com/Gabrielfernandes7/python-poo-completo",
    },
  ];

  const createDynamicTabs = () => {
    return (
      <AccordionTab header={`Projetos (${projetos.length})`}>
        {/* Agrupar todos os parágrafos dentro de um único elemento div */}
        <div>
          {projetos.map((projeto, index) => (
            <div key={index} className="m-0">
              <h3>{projeto.titulo}:</h3>
              <p>{projeto.descricao}</p>
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
              <Divider />
            </div>
          ))}
        </div>
      </AccordionTab>
    );
  };

  const competencias = () => {
    return (
      <AccordionTab header={`Skills (16)`}>
        {/* Agrupar todos os parágrafos dentro de um único elemento div */}
        <div className="imagensMae">
          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=java" />
            <img src="https://skillicons.dev/icons?i=python" />
            <img src="https://skillicons.dev/icons?i=typescript" />
            <img src="https://skillicons.dev/icons?i=javascript" />
          </div>

          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=spring" />
            <img src="https://skillicons.dev/icons?i=fastapi" />
            <img src="https://skillicons.dev/icons?i=flask" />
            <img src="https://skillicons.dev/icons?i=postgres" />
          </div>
        </div>
        <div className="imagensMae">
          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=docker" />
            <img src="https://skillicons.dev/icons?i=github" />
            <img src="https://skillicons.dev/icons?i=git" />
            <img src="https://skillicons.dev/icons?i=linux" />
          </div>
          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=vue" />
            <img src="https://skillicons.dev/icons?i=vite" />
            <img src="https://skillicons.dev/icons?i=vitest" />
            <img src="https://skillicons.dev/icons?i=pinia" />
          </div>
        </div>
      </AccordionTab>
    );
  };

  return (
    <Fundo>
      <ContainerCentral>
        <Paragrafo size={40}>Gabriel Fernandes</Paragrafo>
        <Paragrafo>
          Olá! Sou desenvolvedor backend com Java. Utilizo os frameworks Spring Boot e Fastapi.
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
          <Accordion
            style={{ boxSizing: "border-box", marginBottom: 20, marginTop: 20 }}
          >
            {createDynamicTabs()}
          </Accordion>
        </div>
        <div className="card">
          <Accordion>{competencias()}</Accordion>
        </div>
      </ContainerCentral>
    </Fundo>
  );
};

export default Home;
