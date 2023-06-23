import React from 'react';
import { styled } from 'styled-components';

function Select() {
  return (
    <StyledDiv>
      <fieldset>
        <legend>Select</legend>
        <label htmlFor="choose">
          overflow=none
          <select name="choose" defaultValue="default">
            <option value="default" disabled>
              골라골라
            </option>
            <option value="React">리액트</option>
            <option value="Java">자바</option>
            <option value="Spring">스프링</option>
            <option value="React Native">리액트 네이티브</option>
          </select>
        </label>
        <label htmlFor="choose1">
          overflow=auto
          <select name="choose1" defaultValue="default1">
            <option value="default1" disabled>
              골라골라
            </option>
            <option value="React">리액트</option>
            <option value="Java">자바</option>
            <option value="Spring">스프링</option>
            <option value="React Native">리액트 네이티브</option>
          </select>
        </label>
      </fieldset>
    </StyledDiv>
  );
}

export default Select;

const StyledDiv = styled.div`
  fieldset {
    overflow: hidden;
  }
`;
