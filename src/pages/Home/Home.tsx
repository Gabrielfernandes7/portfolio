import React from 'react'
import { ContainerCentral, ContainerIcons, Fundo, Header, Paragrafo } from './styles'

// assets
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Home = () => {
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
                    <BsGithub size={24} />
                    <span>          </span>
                    <span>     </span>
                    <BsLinkedin size={24}/>
                </ContainerIcons>
                
            </ContainerCentral>
        </Fundo>
    )
}

export default Home