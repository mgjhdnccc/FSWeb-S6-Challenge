import React, { useState } from 'react';
import styled from 'styled-components';
import { StarWarsApi } from '../api/starWarsApi';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();
    console.log('Karakter URL:', charObj.url);
    const characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
    setDetail(characterDetail);
    setShowDetail(true);
    console.log('Detay verisi:', characterDetail);
  };

  return (
    <>
      <StyledWrapper>
        <button onClick={clickHandler}>
          {charObj.name}
        </button>
      </StyledWrapper>

      {showDetail && (
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
    font-size: 1.4em;
    padding: 0.6em 0.8em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
  }
`;

const DetailWrapper = styled.div`
  color: white;
  margin-top: 1rem;
  padding-left: 1rem;
`;