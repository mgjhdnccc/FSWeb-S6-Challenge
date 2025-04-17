import React, { useState } from 'react';
import styled from 'styled-components';
import { StarWarsApi } from '../api/starWarsApi';

export const Character = ({charObj}) => {
const [detail, setDetail] = useState({});
const [showDetail, setShowDetail] = useState(false);

const clickHandler = async (e) =>{
    e.preventDefault();
    console.log('url', charObj.url);
    let characterDetail = await StarWarsApi.makeGetRequest(charObj.url);
    setDetail(characterDetail);
    setShowDetail(true);
    console.log('button clicked');
}

  return (
    <>
        <StyledWrapper>
        <button alt={charObj.name} onClick={clickHandler} >
            {
                charObj.name &&
                charObj.name.split('').map(char => <i>{ char === ' ' ? '   ' : char}</i>)
            }
        </button>
        </StyledWrapper>
        {
            showDetail &&
            <span>DETAY BILGI</span>
        }

    </>
  );
}

import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <button className="button">Hover me</button>
      </div>
    </StyledWrapper>
  );
}

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

  .container {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    border-radius: 0.9em;
    transition: all 0.4s ease;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.9em;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }

  .container:hover::before {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    filter: blur(1.2em);
  }
  .container:active::before {
    filter: blur(0.2em);
  }`;

export default Character;