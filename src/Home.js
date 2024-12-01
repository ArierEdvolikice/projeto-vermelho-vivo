import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Vídeo de fundo */}
      <video className="background-video" autoPlay loop muted>
        <source src="./Imagem/Video_Apresentação/Apresentação_Vídeo.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

        <button className="home-button" onClick={() => navigate("/second-screen")}>Iniciar</button>

    </div>
  );
}

export default Home;