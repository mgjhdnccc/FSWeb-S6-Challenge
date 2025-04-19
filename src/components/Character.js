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
              <input defaultChecked id={`like-${charObj.name}`} name={`feedback-${charObj.name}`} value="like" className="custom-radio-fb" type="radio" />
              <label htmlFor={`like-${charObj.name}`} className="feedback-label">
                <svg className="icon" width={27} height={27} viewBox="0 0 27 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.7229 26.5H5.92292V10.9008H0.7229V26.5ZM26.6299 15.2618L24.372 23.7566C23.9989 25.3696 22.5621 26.5 20.9072 26.5H8.52293V10.9278L10.7573 2.87293C10.9669 1.50799 12.1418 0.5 13.524 0.5C15.0699 0.5 16.323 1.7527 16.323 3.29837V10.8998H23.1651C25.4519 10.9009 27.1453 13.0335 26.6299 15.2618Z" />
                </svg>
                Like
              </label>
            </div>
            <div>
              <input id={`unlike-${charObj.name}`} name={`feedback-${charObj.name}`} value="unlike" className="custom-radio-fb" type="radio" />
              <label htmlFor={`unlike-${charObj.name}`} className="feedback-label">
                <svg className="icon" width={27} height={27} viewBox="0 0 27 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.7229 0.5L21.5229 0.5L21.5229 16.0992L26.7229 16.0992L26.7229 0.5ZM0.815853 11.7382L3.07376 3.24339C3.44687 1.63037 4.88372 0.500027 6.53861 0.500027L18.9229 0.500028L18.9229 16.0722L16.6885 24.1271C16.4789 25.492 15.304 26.5 13.9218 26.5C12.3759 26.5 11.1228 25.2473 11.1228 23.7016L11.1228 16.1002L4.28068 16.1002C1.99391 16.0991 0.300502 13.9664 0.815853 11.7382Z" />
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
`;
