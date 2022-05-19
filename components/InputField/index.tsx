import React from 'react';
import styled from "styled-components";
import {NextPage} from "next";

const InputField: NextPage = () => {
    return (
        <StyledContainer>
            <StyledInput/>
        <StyledButton>Add task</StyledButton>
    </StyledContainer>
);
};

export default InputField;

const StyledContainer = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 2rem;
`

const StyledInput = styled.input`
  width: 10rem;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10%;
  border-bottom-color: ${({ theme }) => theme.colors.free};
`

const StyledButton = styled.button`
  max-width: 7rem;
  text-align: center;
  padding: .25rem 1rem;
  border-radius: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.free};
  color: ${({ theme}) => theme.colors.light};
  margin-left: 1rem;
  cursor: pointer;
  transition: all 500ms ease-in;
  &:hover {
    transform: scale(1.08);
  }
`