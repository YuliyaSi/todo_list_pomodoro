import React, {useId, useState} from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {TInput} from "../../types";

const InputField: NextPage<TInput> = ({ addNewTask }) => {
    const id = useId();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('light');
    const [time, setTime] = useState(0);

    const handleAddTask = () => {
        addNewTask({ id, title, description, priority, completed: false, time});
    }

    return (
        <StyledContainer>
            <StyledInput type='text' value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
            <StyledInput type='text' value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
            <StyledSelect value={priority} onChange={(e) => setPriority(e.currentTarget.value)}>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </StyledSelect>
            <StyledInput type='number' value={time} onChange={(e) => setTime(Number(e.currentTarget.value))}/>
        <StyledButton onClick={handleAddTask}>Add task</StyledButton>
    </StyledContainer>
);
};

export default InputField;

const StyledContainer = styled.div`
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

const StyledSelect = styled.select`
  width: 10rem;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10%;
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