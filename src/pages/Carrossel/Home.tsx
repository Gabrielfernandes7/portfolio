import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Modal from "../../components/Modal";
import { ProjetoContainer } from "../Home/styles";

interface SliderProps {
  titulo: string;
  descricao: string;

}

interface ProjetoProps {
  slides: SliderProps[];
}

const ImageSlider: React.FC<ProjetoProps> = ({ slides }) => {

  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 671) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 990){
        setSlidesToShow(2)
      } 
      else {
        setSlidesToShow(3); // ajuste este número conforme necessário
      }
    };

    handleResize(); // verifique a largura da janela quando o componente for montado
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tituloModal, setTituloModal] = useState<string>("");

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
