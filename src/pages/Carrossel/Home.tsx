import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "../../components/Moda";
import { ProjetoContainer } from "../Home/styles";

interface SliderProps {
  titulo: string;
  descricao: string;

}

interface ProjetoProps {
  slides: SliderProps[];
}

const ImageSlider: React.FC<ProjetoProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tituloModal, setTituloModal] = useState<string>("");
  const [variableFromChild, setVariableFromChild] = useState(false);


  function handleModalOpen(e: string) {
    setIsOpen(!isOpen);
    setTituloModal(e)
    console.log(isOpen)
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (

    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{
            paddingLeft: 200
          }}>
            <ProjetoContainer onClick={() => handleModalOpen(slide.titulo)}>
              <h2>{slide.titulo}</h2>
              {slide.descricao.split("\n").map((line, lineIndex) => (
                <p key={lineIndex} style={{ marginTop: -150 }}>{line}</p>
              ))}
            </ProjetoContainer>
            {/* <img src={image} alt={`slide-${index}`} /> */}
          </div>
        ))}
      </Slider>
      {
        isOpen ?
          <Modal 
            callback={handleModalClose}
          info={tituloModal}
          ></Modal>
          :
          null
      }
    </div>
  );
};

export default ImageSlider;
