import React, { useState } from 'react';
import styled from 'styled-components'; 
import characterImages from '../images/characterImages';
import { StarWarsApi } from '../api/starWarsApi';

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

  const image = characterImages[charObj.name];

  return (
    <>
      <StyledWrapper>
        <button onClick={clickHandler}>{charObj.name}</button>
      </StyledWrapper>

      {showDetail && detail && (
        <DetailWrapper>
          {image && <img src={image} alt={charObj.name} />}
          <p>Boy: {detail.height} cm</p>
          <p>Kilo: {detail.mass} kg</p>
          <p>Göz Rengi: {detail.eye_color}</p>
          <p>Doğum Yılı: {detail.birth_year}</p>

          {/* Like/Unlike */}
          <div className="like-unlike-radio">
            <div>
            <input id={`like-${charObj.name}`} name={`feedback-${charObj.name}`} value="like" className="custom-radio-fb" type="radio" />
              <label htmlFor={`like-${charObj.name}`} className="feedback-label">
                <svg className="icon" width={27} height={27} viewBox="0 0 27 27" fill="currentColor">
                  <path d="M0.72 26.5h5.2V10.9H0.72V26.5zM26.63 15.26l-2.26 8.49c-.37 1.61-1.81 2.75-3.47 2.75H8.52V10.93l2.23-8.05c.21-1.36 1.39-2.37 2.77-2.37 1.55 0 2.81 1.25 2.81 2.8v7.6h6.84c2.29.001 3.98 2.13 3.46 4.35z"/>
                </svg>
                Like
              </label>
            </div>
            <div>
              <input
                id={`unlike-${charObj.name}`}
                name={`feedback-${charObj.name}`}
                value="unlike"
                className="custom-radio-fb"
                type="radio"
              />
              <label htmlFor={`unlike-${charObj.name}`} className="feedback-label">
                <svg className="icon" width={27} height={27} viewBox="0 0 27 27" fill="currentColor">
                  <path d="M26.72 0.5h-5.2v15.6h5.2V0.5zM0.82 11.74l2.26-8.49c.37-1.61 1.81-2.75 3.47-2.75h12.38v15.57l-2.23 8.06c-.21 1.36-1.39 2.37-2.77 2.37-1.55 0-2.81-1.25-2.81-2.8V16.1H4.28c-2.29 0-3.98-2.13-3.46-4.36z"/>
                </svg>
                Unlike
              </label>
            </div>
          </div>
        </DetailWrapper>
      )}
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 1.2em;
    padding: 0.6em 1em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    margin: 0.4rem 0;
    min-width: 160px;
    text-align: center;
  }
`;

const DetailWrapper = styled.div`
  color: #ad4ec6;
  margin: 1rem 0;
  padding: 2rem;
  border: 2px solid #ad4ec6;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  max-width: 800px;
  animation: fadeIn 0.5s ease-in-out;
  text-align: center;

  img {
    display: block;
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    margin: 0 auto 1rem;
    object-fit: contain;
  }

  .like-unlike-radio {
    --inactive-color: #515254;
    --active-color: #ad4ec6;
    --hover: #888;
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  .custom-radio-fb {
    display: none;
  }

  .feedback-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--inactive-color);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .feedback-label:hover {
    color: var(--hover);
  }

  .custom-radio-fb:checked ~ .feedback-label {
    color: var(--active-color);
  }

  .custom-radio-fb:checked ~ .feedback-label svg {
    animation: bounce 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounce {
    0% { transform: scale(0.9); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 1.5rem;

    img {
      max-width: 150px;
    }

    .like-unlike-radio {
      gap: 20px;
    }

    .feedback-label {
      font-size: 0.9rem;
    }
  }
`;
