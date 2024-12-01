import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./SecondScreen.css";

function SecondScreen() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState(""); // Estado para o título dinâmico

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        navigate("/");
      }, 150000); // 150 segundos
    };

    // Eventos de interação
    const events = ["click", "mousemove", "keydown", "scroll", "touchstart"];

    // Adicionar listeners
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Inicia o timer na primeira vez
    resetTimer();

    // Limpar timer e listeners ao desmontar
    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [navigate]);

 

  // Função para abrir o modal com as imagens e título dinâmico
  const openModal = (index) => {
    let imageList = [];
    let newTitle = "";

    // Altera as imagens e o título dependendo da imagem clicada
    if (index === 0) {
      imageList = [
        "./Imagem/Livros/Livro_01/Imagem_Teste_01.jpg",
        "https://via.placeholder.com/300x200?text=Imagem+2",
        "https://via.placeholder.com/300x200?text=Imagem+3",
      ];
      newTitle = "Galeria de Imagens - Conjunto 1";
    } else if (index === 1) {
      imageList = [
        "https://via.placeholder.com/300x200?text=Imagem+4",
        "https://via.placeholder.com/300x200?text=Imagem+5",
        "https://via.placeholder.com/300x200?text=Imagem+6",
      ];
      newTitle = "Galeria de Imagens - Conjunto 2";
    } else if (index === 2) {
      imageList = [
        "https://via.placeholder.com/300x200?text=Imagem+7",
        "https://via.placeholder.com/300x200?text=Imagem+8",
        "https://via.placeholder.com/300x200?text=Imagem+9",
      ];
      newTitle = "Galeria de Imagens - Conjunto 3";
    }

    setImages(imageList);
    setCurrentIndex(index); // Define o índice inicial para o slider
    setTitle(newTitle); // Altera o título
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setImages([]);
  };

  return (
    <div className="second-screen">
      {/* Marquee na parte superior */}
      <div className="marquee">
        <p>Bem-vindo à Segunda Tela! Aproveite as funcionalidades. 🚀</p>
      </div>

      <section>
        {/* Título centralizado */}
        <h1 className="main-title">Galeria de Imagens</h1>

        {/* Seção com três colunas */}
        <div className="columns">
          <div className="column">
            <h2>Coluna 1</h2>
            <p>Subtítulo 1</p>
            <div className="grid">
              <img
                src="https://via.placeholder.com/300x200?text=Imagem+1"
                alt="Imagem 1"
                onClick={() => openModal(0)}
              />
            </div>
          </div>
          <div className="column">
            <h2>Coluna 2</h2>
            <p>Subtítulo 2</p>
            <div className="grid">
              <img
                src="https://via.placeholder.com/300x200?text=Imagem+2"
                alt="Imagem 2"
                onClick={() => openModal(1)}
              />
            </div>
          </div>
          <div className="column">
            <h2>Coluna 3</h2>
            <p>Subtítulo 3</p>
            <div className="grid">
              <img
                src="https://via.placeholder.com/300x200?text=Imagem+3"
                alt="Imagem 3"
                onClick={() => openModal(2)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <section className="modal-container">
            {/* Marquee no topo */}
            <div className="marquee">
              <p>Bem-vindo à Segunda Tela! Aproveite as funcionalidades. 🚀</p>
            </div>

            {/* Título */}
            <h2 className="modal-title">{title}</h2> {/* Título dinâmico */}

            {/* Slider */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                initialSlide={0} // Inicia no slide correspondente
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`Imagem ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Botão para voltar */}
            <button className="back-button" onClick={closeModal}>Voltar</button>
          </section>
        </div>
      )}
    </div>
  );
}

export default SecondScreen;