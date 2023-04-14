import React, { useState } from 'react'
import { ContainerCentral, ContainerIcons, Fundo, Header, Paragrafo, ProjetoContainer, SliderContainer } from './styles'
import { useNavigate, Link } from 'react-router-dom';

// assets
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

// Carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from '../Carrossel/Home';

const Home = () => {

    const images = [
        "https://via.placeholder.com/600x300?text=Slide+1",
        "https://via.placeholder.com/600x300?text=Slide+2",
        "https://via.placeholder.com/600x300?text=Slide+3",
        "https://via.placeholder.com/600x300?text=Slide+4",
        "https://via.placeholder.com/600x300?text=Slide+5",
        "https://via.placeholder.com/600x300?text=Slide+6",
        "https://via.placeholder.com/600x300?text=Slide+7",
    ];

    const handleLinkedin = (e: any) => {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/guilherme-lincoln-lima/", "_blank");
    }

    const handleGithub = (e: any) => {
        e.preventDefault();
        window.open("https://github.com/lincolnzera1", "_blank");
    }

    const titulos = ["Oficinas 4.0", "Projeto Adelco", "Lit", "4", "5"]
    const descricao = ["Desenvolvedor Flutter E ReactJs", "Desenvoldedor React Typescript e Flutter", "Flutter/Dart", "x", "y"]

    const projetos = [
        {
            titulo: "Oficinas 4.0", descricao: "Desenvolvedor Flutter/Dart.\n Desenvolvedor ReactJs & Node.js.",
        },
        { titulo: "Projeto Adelco", descricao: "Desenvoldedor React Typescript e Flutter/Dart." },
        { titulo: "Lit", descricao: "Flutter/Dart.\nLinguagem C com esp32.\nMontagem de circuitos com esp32." },
        { titulo: "Carrinho bluetooth", descricao: "Controlando carrinho com arduino usando aplicativo feito em Kotlin" },
    ];

    

    return (
        <Fundo>
            <Header>
                <h4>Home</h4>
                <h4>Projetos</h4>
                <h4>Portifólio</h4>
            </Header>
            <ContainerCentral>
                <Paragrafo size={40} >Guilherme Lincoln</Paragrafo>
                <Paragrafo>Olá! Eu sou desenvolvedor Front-end com 1+ anos de experiência. Tenho experiência atuando em projetos utilizando o Framework Flutter com a linguagem Dart e a biblioteca React, com as linguagens Javascript e Typescript.</Paragrafo>
                <ContainerIcons>
                    <a href="#" onClick={handleGithub}><BsGithub size={30} /></a>
                    <a href="#" onClick={handleLinkedin}><BsLinkedin size={30} /></a>
                </ContainerIcons>
                <SliderContainer>
                    <ImageSlider
                        slides={projetos}
                    />
                </SliderContainer>
            </ContainerCentral>
        </Fundo>
    )
}

export default Home