import React, { useState } from 'react';
import styled from 'styled-components';
import { StarWarsApi } from '../api/starWarsApi';

// Karakter ismi ile görsel eşleşmesi
import characterImages from '../images/characterImages';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async () => {
    if (showDetail) {
      setShowDetail(false);
      return;
    }

    try {
      const characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
      setDetail(characterDetail);
      setShowDetail(true);
    } catch (error) {
      console.error("❌ Detay verisi çekilemedi:", error);
    }
  };

  // İsme göre uygun görseli al
  const image = characterImages[charObj.name];

  return (
    <>
      <StyledWrapper>
        <button onClick={clickHandler}>
          {charObj.name}
        </button>
      </StyledWrapper>

      {showDetail && detail && (
        <DetailWrapper>
          {image && <img src={image} alt={charObj.name} />}
          <p>Boy: {detail.height} cm</p>
          <p>Kilo: {detail.mass} kg</p>
          <p>Göz Rengi: {detail.eye_color}</p>
          <p>Doğum Yılı: {detail.birth_year}</p>
        </DetailWrapper>
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

const DetailWrapper = styled.div`
  color:#ad4ec6;
  margin: 1rem 0;
  padding: 2rem;
  border: 2px solid #0f0;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  max-width: 800px;
  animation: fadeIn 0.5s ease-in-out;

  img {
    display: block;
    max-width: 200px;
    max-height: 200px;
    margin: 0 auto 1rem;
    object-fit: contain;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
