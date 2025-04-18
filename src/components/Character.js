import React, { useState } from 'react';
import styled from 'styled-components';
import { StarWarsApi } from '../api/starWarsApi';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      const match = charObj.url.match(/\/people\/(\d+)\//); // id'yi yakala
      const id = match ? match[1] : null;
      if (!id) return console.error("ID bulunamadı");

      console.log("🔍 ID:", id);
      const characterDetail = await StarWarsApi.getPeopleDetails(id); // doğrudan güvenli çağrı
      console.log("✅ Detay verisi:", characterDetail);
      setDetail(characterDetail);
      setShowDetail(true);
    } catch (error) {
      console.error("❌ Detay verisi çekilemedi:", error);
    }
  };

  return (
    <>
      <StyledWrapper>
        <button onClick={clickHandler}>
          {charObj.name}
        </button>
      </StyledWrapper>

      {showDetail && detail && (
        <DetailWrapper>
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
  color: white;
  margin-top: 0.5rem;
  padding-left: 1rem;
`;
