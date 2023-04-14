import styled from 'styled-components';

interface paragrafo {
    size?: number
}

export const Fundo = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #181717;

    height: 100vh;
    width: 100vw;

    font-size: 20px;
    color: #FFFFFF;

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

    text-align: center;

    h4 {
        text-align: center;
    }
`

export const H4 = styled.h4`
    @media (max-width: 816px) {
        visibility: hidden;
    }
`

export const ContainerCentral = styled.div`

    position: relative;
    
    padding: 20px;

    height: 70vh;
    width: 1200px;
    
    border: 2px solid white;
    
`


export const Paragrafo = styled.p<paragrafo>`
  font-size: ${props => props.size}px;
`

export const ContainerIcons = styled.div`
    padding-top: 20px;
    margin-right: 20px;
    padding-right: 20px;

    a {
        text-decoration: none;
        color: inherit;

        margin-left: 20px;
    }
    
`

export const ProjetoContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    text-align: center;

    position: relative;

    height: 300px;
    width: 300px;

    border: 2px solid white;

    background-color: black;

    h2 {
        margin-bottom: 40px;
    }

    cursor: pointer;
    transition: background-color 0.5s ease;

    :hover {
        background-color: #6b6a6a;
    }
    

`

export const SliderContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    

    background-color: black;

    width: 100%;

    box-sizing: border-box;
    margin-top: 100px;
    padding: 20px;

    border: 2px solid white;
`