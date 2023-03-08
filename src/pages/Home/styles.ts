import styled from 'styled-components';

interface paragrafo {
    size?: number
}

export const Fundo = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;

    height: 100vh;
    width: 100vw;

    font-size: 20px;
    color: white;

    overflow: hidden;

`

export const Header = styled.div`
    position: absolute;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    
    border: 1px solid white;

    height: 80px;
    width: 100%;

    top: 0;
`

export const ContainerCentral = styled.div`
    
    padding: 20px;

    height: 70vh;
    width: 70vw;
    
    border: 2px solid white;
    
`


export const Paragrafo = styled.p<paragrafo>`
  font-size: ${props => props.size}px;
`

export const ContainerIcons = styled.div`
    padding-top: 20px;
    margin-right: 20px;
    padding-right: 20px;
    
`