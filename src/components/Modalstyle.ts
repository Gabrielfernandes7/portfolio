import styled from "styled-components";

export const FundoModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: black;
    border: 3px solid white;
    border-radius: 18px;

    height: 50%;
    width: 50%;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 850px) {
        width: 425px;
    }

    @media (max-width: 850px) {
        padding-bottom: 40px;
    }
    
`

export const Actionbutton = styled.button`
    height: 50px;
    width: 100px;

    border: 2px solid white;
    background-color: black;

    color: white;

    font-size: 16px;

    margin-left: auto;
    margin-right: 20px;

    cursor: pointer;
`

export const Span = styled.span`
    @media (max-width: 870px) {
    }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;
    margin-right: 10px;

    

`

export const CloseModal = styled.div`
    /* border: 2px solid white; */

    background-color: black;

    position: absolute;
    top: 10px;
    right: 10px;

    padding: 10px;

    font-size: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

export const Paragrafo = styled.p`
    margin-bottom: 150px;
    font-size: 32px;

    @media (max-width: 969px) {
        margin-top: 50px;
        
    }
`