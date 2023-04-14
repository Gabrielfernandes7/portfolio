import React, { useState } from 'react'
import { Actionbutton, CloseModal, DivInfo, FundoModal, ModalStyle, Span } from './Modalstyle'

interface modal {
    titulo: string
    descricao: string
}

interface modalProps {
    info: string
    callback: (dataFromChild: boolean) => void;
}

const Modal = ({ info, callback }: modalProps) => {

    const [inputValue, setInputValue] = useState(false);

    function handleModalClose() {
        callback(!inputValue);
    }

    const oficinas = [
        {
            titulo: "Controle do esp32 pelo app Flutter",
            link: "https://www.youtube.com/shorts/kx7DY7PO-io"
        },
        {
            titulo: "Cálculo do consumo do chuveiro elétrico",
            link: "https://www.youtube.com/shorts/sh3pxnTNNYY"
        },
    ]

    const carrinho = [
        {
            titulo: "Controlando carrinho por bluetooth, com arduino e App feito em Kotlin por mim.",
            link: "https://www.youtube.com/watch?v=XT8551M75ho"
        }
    ]

    const adelco = [
        {
            titulo: "Construindo o frontend de um site para a organização Adelco indígena (em contrução)",
            link: "https://dev.adelco.ltap.ifce.edu.br/"
        }
    ]

    const lit = [
        {
            titulo: "Aplcaitivo de rede social feito em flutter, para os bolsistas do laboratório LIT",
            link: "https://www.youtube.com/shorts/CQvh1-grAK8"
        }
    ]

    const handleClick = (e: string) => {
        window.open(e, "_blank");
    }

    return (
        <FundoModal>
            <ModalStyle>
                <CloseModal onClick={handleModalClose}>
                    X
                </CloseModal>
                {
                    info === "Oficinas 4.0" ?
                        <div style={{ textAlign: "center" }}>
                            <p style={{ marginBottom: 200, fontSize: 35 }}>{info}</p>
                            {oficinas.map((infoDescription, index) => (
                                <DivInfo key={index} style={{ width: "100%" }} >
                                    <Span key={index}>{infoDescription.titulo}</Span>
                                    <Actionbutton onClick={() => handleClick(infoDescription.link)} >Demo</Actionbutton>
                                </DivInfo>
                            ))}
                        </div> : null
                }
                {
                    info === "Carrinho bluetooth" ?
                        <div style={{ textAlign: "center" }}>
                            <p style={{ marginBottom: 200, fontSize: 35 }}>{info}</p>
                            {carrinho.map((infoDescription, index) => (
                                <DivInfo key={index} style={{ width: "100%" }} >
                                    <Span key={index}>{infoDescription.titulo}</Span>
                                    <Actionbutton onClick={() => handleClick(infoDescription.link)} >Demo</Actionbutton>
                                </DivInfo>
                            ))}
                        </div> : null
                }
                {
                    info === "Projeto Adelco" ?
                        <div style={{ textAlign: "center" }}>
                            <p style={{ marginBottom: 200, fontSize: 35 }}>{info}</p>
                            {adelco.map((infoDescription, index) => (
                                <DivInfo key={index} style={{ width: "100%" }} >
                                    <Span key={index}>{infoDescription.titulo}</Span>
                                    <Actionbutton onClick={() => handleClick(infoDescription.link)} >Demo</Actionbutton>
                                </DivInfo>
                            ))}
                        </div> : null
                }
                {
                    info === "Lit" ?
                        <div style={{ textAlign: "center" }}>
                            <p style={{ marginBottom: 200, fontSize: 35 }}>{info}</p>
                            {lit.map((infoDescription, index) => (
                                <DivInfo key={index} style={{ width: "100%" }} >
                                    <Span key={index}>{infoDescription.titulo}</Span>
                                    <Actionbutton onClick={() => handleClick(infoDescription.link)} >Demo</Actionbutton>
                                </DivInfo>
                            ))}
                        </div> : null
                }
            </ModalStyle>
        </FundoModal>
    )
}

export default Modal