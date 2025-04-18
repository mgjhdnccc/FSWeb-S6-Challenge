import React, { useState } from 'react';
import styled from 'styled-components';
import { StarWarsApi } from '../api/starWarsApi';
import { motion } from 'framer-motion';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();
    if (showDetail) {
      setShowDetail(false);
      return;
    }
    try {
      console.log("🛰 Veri çekiliyor:", charObj.url);
      const characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
      console.log("✅ Detay verisi:", characterDetail);
      setDetail(characterDetail);
      setShowDetail(true);
    } catch (error) {
      console.error("❌ Detay verisi çekilemedi:", error);
    }
  };

  // Görsel dosyasını karakter adına göre eşleştir
  const imageName = `${charObj.name}.png`;
  const imagePath = `/images/${imageName}`;

  return (
    <>
      <StyledWrapper>
        <button onClick={clickHandler}>
          {charObj.name}
        </button>
      </StyledWrapper>

      {showDetail && detail && (
        <MotionDetailWrapper
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img src={imagePath} alt={charObj.name} />
          <p>Boy: {detail.height} cm</p>
          <p>Kilo: {detail.mass} kg</p>
          <p>Göz Rengi: {detail.eye_color}</p>
          <p>Doğum Yılı: {detail.birth_year}</p>
        </MotionDetailWrapper>
      )}
    </>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 1.2em;
    padding: 0.6em 1em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    margin: 0.4rem 0;
  }
`;

const MotionDetailWrapper = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #444;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  color: white;
  max-width: 300px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.2rem 0;
  }
`;
