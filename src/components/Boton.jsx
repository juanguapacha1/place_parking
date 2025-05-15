import React from 'react';
import styled from 'styled-components';

function Boton({ text, onClick }) {
    return (
        <StyledWrapper>
            <button onClick={onClick}> {/* Aquí pasamos el evento onClick */}
                <span>{text}</span>
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
   border: 1px solid rgb(121, 121, 121);
   position: relative;
   overflow: hidden;
   transition: all 0.5s ease-in;
   z-index: 1;
   margin-top: 20px;
   color: black;
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
   color: black;

  }

  button::before {
   left: -10px;
   background: linear-gradient(45deg, #19758C 0%, #19758C 100%);
  }

  button::after {
   right: -10px;
   background: linear-gradient(45deg, #19758C 0%, #19758C 100%);
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
   color:rgba(0, 0, 0, 0.65);
   transition: all 0.3s ease-in;
   font-weight: bold;
  }
`;

export default Boton;