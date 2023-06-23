import React, { useState } from 'react';
import { styled } from 'styled-components';
const onChangeHandler = (e, setFn) => {
  if (e.target.id === 'price') {
    setFn(() => {
      const initialValue = String(parseInt(e.target.value.replaceAll(',', '')));
      if (initialValue.length > 3) {
        const result = Number(initialValue).toLocaleString();
        return result;
      }
      return initialValue;
    });
  } else {
    setFn(e.target.value);
  }
};
const onClickHandler = (nameVal, priceVal) => {
  const filteredPriceValue = priceVal.replaceAll(',', '');
  const result = {
    name: nameVal,
    price: filteredPriceValue,
  };
  alert(JSON.stringify(result));
};
function Input() {
  const [nameValue, setNameValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);

  return (
    <StyledDiv>
      <div>
        <h1>Input</h1>
      </div>
      <div id="input-container">
        <label htmlFor="name">
          이름
          <input
            id="name"
            type="text"
            value={nameValue}
            onChange={(e) => onChangeHandler(e, setNameValue)}
          />
        </label>
        <label htmlFor="price">
          가격
          <input
            id="price"
            type="text"
            value={priceValue}
            onChange={(e) => onChangeHandler(e, setPriceValue)}
          />
        </label>
        <button onClick={() => onClickHandler(nameValue, priceValue)}>
          저장
        </button>
      </div>
    </StyledDiv>
  );
}

export default Input;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #input-container {
    display: flex;
    gap: 2rem;
    margin-left: 1rem;
  }
  input {
    margin-left: 1rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: none;
    outline: 1px solid #222;
  }
  button {
    background: #55efc4;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  button:hover {
    transform: rotate(-10deg);
  }
  button:active {
    transform: rotate(0deg);
  }
`;
