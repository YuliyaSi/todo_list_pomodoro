import React, {useState} from 'react';
import {NextPage} from "next";
import {ITask} from "../../types";
import styled from "styled-components";
import {BsPlayCircle, BsStopCircle} from "react-icons/bs";
import Timer from "./Timer";

const Task: NextPage<ITask> = ({ title, description, completed, priority, time }) => {
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
            <div>
            <h3>{title}</h3>
            <span>{description}</span>
            </div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <Buttons>
                <BsPlayCircle onClick={timeStart}/>
                <BsStopCircle onClick={timeStop}/>
            </Buttons>
            <Timer start={start} time={time}/>
        </StyledTask>
    );
};

export default Task;

const StyledTask = styled.div<Partial<ITask>>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, priority }) => priority === 'light' ? theme.colors.free : priority === 'medium' ? theme.colors.attention : theme.colors.warning};
  padding: 0 3rem;
`

const Buttons = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  & * {
    font-size: x-large;
    cursor: pointer;
  }
`