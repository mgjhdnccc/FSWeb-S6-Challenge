import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { StarWarsApi } from '../api/starWarsApi';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async () => {
    // Toggle yapısı: tekrar tıklanınca kapatır
    if (showDetail) {
      setShowDetail(false);
      return;
    }

    try {
      const characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
      setDetail(characterDetail);
      setShowDetail(true);
    } catch (error) {
      console.error("Detay verisi alınamadı:", error);
    }
  };

  const imgPath = `/images/${charObj.name}.png`;

  return (
    <Wrapper>
      <button onClick={clickHandler}>{charObj.name}</button>

      <AnimatePresence>
        {showDetail && detail && (
          <DetailContainer
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <CharacterImg src={imgPath} alt={charObj.name} />
            <InfoText>Boy: {detail.height} cm</InfoText>
            <InfoText>Kilo: {detail.mass} kg</InfoText>
            <InfoText>Göz Rengi: {detail.eye_color}</InfoText>
            <InfoText>Doğum Yılı: {detail.birth_year}</InfoText>
          </DetailContainer>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem 0;

  button {
    font-size: 1.2em;
    padding: 0.6em 1.2em;
    border-radius: 0.6em;
    background-color: #000;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 2px 2px 6px #00000090;

    &:hover {
      background-color: #222;
    }
  }
`;

const DetailContainer = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  margin-top: 0.7rem;
  border-radius: 1rem;
  border: 1px solid #ffffff22;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  color: white;
  margin: 0.2rem 0;
`;
