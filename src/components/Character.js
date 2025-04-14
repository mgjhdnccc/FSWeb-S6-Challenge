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

const StyledWrapper = styled.div`
  button {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 50px;
   position: relative;
   padding: 0 20px;
   font-size: 18px;
   text-transform: uppercase;
   border: 0;
   box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
   background-color: hsl(210deg 100% 44%);
   border-radius: 12px;
   overflow: hidden;
   transition: 31ms cubic-bezier(.5, .7, .4, 1);
  }

  button:before {
   content: attr(alt);
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   inset: 0;
   font-size: 15px;
   font-weight: bold;
   color: white;
   letter-spacing: 4px;
   opacity: 1;
  }

  button:active {
   box-shadow: none;
   transform: translateY(7px);
   transition: 35ms cubic-bezier(.5, .7, .4, 1);
  }

  button:hover:before {
   transition: all .0s;
   transform: translateY(100%);
   opacity: 0;
  }

  button i {
   color: white;
   font-size: 15px;
   font-weight: bold;
   letter-spacing: 4px;
   font-style: normal;
   transition: all 2s ease;
   transform: translateY(-20px);
   opacity: 0;
   min-width: 7px;
  }

  button:hover i {
   transition: all .2s ease;
   transform: translateY(0px);
   opacity: 1;
  }

  button:hover i:nth-child(1) {
   transition-delay: 0.045s;
  }

  button:hover i:nth-child(2) {
   transition-delay: calc(0.045s * 3);
  }

  button:hover i:nth-child(3) {
   transition-delay: calc(0.045s * 4);
  }

  button:hover i:nth-child(4) {
   transition-delay: calc(0.045s * 5);
  }

  button:hover i:nth-child(6) {
   transition-delay: calc(0.045s * 6);
  }

  button:hover i:nth-child(7) {
   transition-delay: calc(0.045s * 7);
  }

  button:hover i:nth-child(8) {
   transition-delay: calc(0.045s * 8);
  }

  button:hover i:nth-child(9) {
   transition-delay: calc(0.045s * 9);
  }

  button:hover i:nth-child(10) {
   transition-delay: calc(0.045s * 10);
  }`;