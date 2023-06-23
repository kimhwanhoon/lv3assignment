import React from 'react';
import styled from 'styled-components';
import { DiApple } from 'react-icons/di';
import { DiCoda } from 'react-icons/di';

function Button() {
  return (
    <StyledButtonDiv>
      <div>
        <h1>Button</h1>
      </div>
      <div>
        <button className="primary-button" id="button-1" onClick={clickToAlert}>
          <DiApple />
          Large Primary Button
        </button>
        <button className="medium-button green" id="button-2">
          Medium
        </button>
        <button className="small-button green" id="button-3">
          Small
        </button>
      </div>
      <div>
        <button
          className="primary-button"
          id="button-4"
          onClick={clickToPrompt}
        >
          <DiCoda />
          Large Negative Button
        </button>
        <button className="medium-button red" id="button-5">
          Medium
        </button>
        <button className="small-button red" id="button-6">
          Small
        </button>
      </div>
    </StyledButtonDiv>
  );
}

export default Button;

const clickToAlert = () => {
  alert('버튼을 만들어 보세요.');
};

const clickToPrompt = () => {
  prompt('어렵나요?');
};

const StyledButtonDiv = styled.div`
  button {
    border: none;
    margin: 1rem;
    border-radius: 0.65rem;
    cursor: pointer;

    transition: ease-in-out 0.3s;
  }
  button:hover {
    transform: scale(1.025);
  }
  button:active {
    transform: scale(0.95);
    transition: cubic-bezier(0, 0, 0.2, 1) 0.15s;
  }
  .primary-button {
    padding: 1rem;
    background-color: transparent;
  }
  .green {
    background: #55efc4;
  }
  .red {
    background: #fab1a0;
  }
  #button-1 {
    outline: 3px #55efc4 solid;
  }
  #button-4 {
    outline: 3px #fab1a0 solid;
  }

  .medium-button {
    padding: 1rem 2rem;
  }

  .small-button {
    padding: 0.6rem 1.2rem;
  }
`;

//fab1a0
