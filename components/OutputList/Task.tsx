import React, {useState} from 'react';
import {NextPage} from "next";
import {ITask} from "../../types";
import styled from "styled-components";

const Task: NextPage<ITask> = ({ title, description, completed, priority }) => {
    const [done, setDone] = useState(completed)
    return (
        <StyledTask priority={priority}>
            <div>
            <h3>{title}</h3>
            <span>{description}</span>
            </div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
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