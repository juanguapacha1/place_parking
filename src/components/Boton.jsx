import React from 'react';
import styled from 'styled-components';

function Boton({ text }) {
    return (
        <StyledWrapper>
            <button>
                <span> {text}
                </span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* From uiverse.io by @Ali-Tahmazi99 */
  button {
   display: inline-block;
   width: 120px;
   height: 30px;
   border-radius: 10px;
   border: 1px solidrgb(121, 121, 121);
   position: relative;
   overflow: hidden;
   transition: all 0.5s ease-in;
   z-index: 1;
   margin-top: 20px;
  }

  button::before,
  button::after {
   content: '';
   position: absolute;
   top: 0;
   width: 0;
   height: 100%;
   transform: skew(15deg);
   transition: all 0.5s;
   overflow: hidden;
   z-index: -1;
  }

  button::before {
   left: -10px;
   background: #AF6543;
  }

  button::after {
   right: -10px;
   background: #AF6543;
  }

  button:hover::before,
  button:hover::after {
   width: 58%;
  }

  button:hover span {
   color: black;
   transition: 0.3s;
  }

  button span {
   color: wihte;
   font-size: 18px;
   transition: all 0.3s ease-in;
  }`;

export default Boton;
