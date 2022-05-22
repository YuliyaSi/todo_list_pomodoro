import React, {useId, useState} from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {TInput, TPriority, TTime} from "../../types";

const InputField: NextPage<TInput> = ({ addNewTask }) => {
    const id = useId();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<TPriority>('light');
    const [time, setTime] = useState<TTime>('10');

    const handleAddTask = () => {
        addNewTask({ id, title, description, priority, completed: false, time});
    }

    return (
        <StyledContainer>
            <StyledBox>
                <div>
                    <p>Title of task</p>
                    <StyledInput
                        type='text'
                        placeholder={'e.g: Work'}
                        value={title}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <p>Describe your task</p>
                    <StyledInput
                        type='text'
                        placeholder={'e.g: Do something special'}
                        value={description}
                        onChange={(e) => setDescription(e.currentTarget.value)}
                    />
                </div>
            </StyledBox>

            <StyledBox>
                <div>
                    <p>Set priority of task from the list</p>
                    <StyledSelect value={priority} onChange={(e) => setPriority(e.currentTarget.value as TPriority)}>
                        <option value="light">Light</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </StyledSelect>
                </div>
                <div>
                    <p>Set time from list</p>
                    <StyledSelect value={time} onChange={(e) => setTime(e.currentTarget.value as TTime)}>
                        <option value="10">10 sec</option>
                        <option value="30">30 sec</option>
                        <option value="60">60 sec</option>
                    </StyledSelect>
                </div>
            </StyledBox>
        <StyledButton onClick={handleAddTask}>Add task</StyledButton>
    </StyledContainer>
);
};

export default InputField;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.attentionLight};
  box-shadow: 0px 3px 100px 8px rgba(247, 183, 51, 0.59);
`

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  & * {
    flex: 1 1 40%;
  }
`

const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 15px;
  width: 80%;
  height: 3rem;
  border: 1px solid transparent;
  outline: none;
  border-bottom-color: ${({ theme }) => theme.colors.free};
`

const StyledSelect = styled.select`
  width: 10rem;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.free};
  outline: none;
  border-radius: 10px;
  padding: 0.5rem;
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
    transform: scale(1.1);
  }
`