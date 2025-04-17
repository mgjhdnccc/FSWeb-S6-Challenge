import React, { useState } from 'react';
import styled from 'styled-components';
import { StarWarsApi } from '../api/starWarsApi';

export const Character = ({ charObj }) => {
  const [detail, setDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();
    const characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
    setDetail(characterDetail);
    setShowDetail(true);
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
