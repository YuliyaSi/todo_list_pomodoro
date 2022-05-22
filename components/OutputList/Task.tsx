import React, {useState} from 'react';
import {NextPage} from "next";
import {ITask} from "../../types";
import styled from "styled-components";
import {BsPlayCircle, BsStopCircle} from "react-icons/bs";
import Timer from "./Timer";

const Task: NextPage<ITask> = ({ id, title, description, completed, priority, time}) => {
    const [done, setDone] = useState(completed);
    const [start, setStart] = useState(false);

    const timeStart = () => {
        setStart(true);
    }
    const timeStop = () => {
        setStart(false)
    }

    return (
        <StyledTask priority={priority}>
            <StyledCheck>
                <input type="checkbox" checked={done} id={id!.toString()} style={{ display: 'none'}}/>
                <label htmlFor={id!.toString()}/>
            </StyledCheck>
            <TitleHolder>
                <p>{title}</p>
                <div>{description}</div>
            </TitleHolder>
            <Buttons>
                <ControllerPlay onClick={timeStart}/>
                <ControllerStop onClick={timeStop}/>
            </Buttons>
            <Timer start={start} timeStop={timeStop} time={time} setDone={setDone}/>
        </StyledTask>
    );
};

export default Task;

const StyledTask = styled.div<Partial<ITask>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  gap: 2rem;
  background-color: ${({ theme, priority }) => priority === 'light' ? theme.colors.freeLight : priority === 'medium' ? theme.colors.attentionLight : theme.colors.warningLight};
  border: 1px solid transparent;
  border-radius: 10px;
`;

const StyledCheck = styled.div`
  flex-basis: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  label {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.warning};
    border-radius: 50%;
    box-shadow: 0 7px 10px ${({ theme }) => theme.colors.warningLight};
    cursor: pointer;
    transition: 0.2s ease transform, 0.2s ease background-color,
    0.2s ease box-shadow;
    overflow: hidden;
    z-index: 1;
  }

  label:before {
    content: "";
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 50%;
    box-shadow: inset 0 7px 10px ${({ theme }) => theme.colors.warningLight};
    transition: 0.2s ease width, 0.2s ease height;
  }

  label:hover:before {
    width: 2rem;
    height: 2rem;
    box-shadow: inset 0 7px 10px ${({ theme }) => theme.colors.warningLight};
  }

  label:active {
    transform: scale(0.8);
  }

  & input:checked + label {
    background-color: ${({ theme }) => theme.colors.free};
    box-shadow: 0 7px 10px ${({ theme }) => theme.colors.freeLight};
  }
`

const TitleHolder = styled.div`
  width: 20rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 2rem;
  & p {
    font-weight: bold;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`
const ControllerPlay = styled(BsPlayCircle)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
const ControllerStop = styled(BsStopCircle)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`