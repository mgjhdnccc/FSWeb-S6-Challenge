import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // ⭐ animasyon için eklendi
import { StarWarsApi } from '../api/starWarsApi';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();

    if (showDetail) {
      setShowDetail(false); // yeniden tıklanınca kapansın
      return;
    }

    if (!detail) {
      try {
        const characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
        setDetail(characterDetail);
      } catch (error) {
        console.error("❌ Detay verisi çekilemedi:", error);
      }
    }

    setShowDetail(true);
  };

  return (
    <>
      <StyledWrapper>
        <button onClick={clickHandler}>
          {charObj.name}
        </button>
      </StyledWrapper>

      {showDetail && detail && (
        <AnimatedDetail
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <p>Boy: {detail.height} cm</p>
          <p>Kilo: {detail.mass} kg</p>
          <p>Göz Rengi: {detail.eye_color}</p>
          <p>Doğum Yılı: {detail.birth_year}</p>
        </AnimatedDetail>
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

// 🌀 motion.div ile stil verilmiş özel detay kutusu
const AnimatedDetail = styled(motion.div)`
  color: white;
  margin-top: 0.5rem;
  padding-left: 1rem;
`;
