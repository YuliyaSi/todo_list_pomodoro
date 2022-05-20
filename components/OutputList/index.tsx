import React from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {IList} from "../../types";
import Task from "./Task";

const OutputList: NextPage<IList> = ({ todos  }) => {
    return (
        <StyledContainer>
            <ul style={{ listStyle: 'none' }}>
                {todos.filter(todo => todo.priority === 'light').map(task => <li key={task.id}><Task id={task.id} title={task.title} description={task.description} completed={task.completed} priority={task.priority}/></li> )}
            </ul>
            <ul style={{ listStyle: 'none' }}>
                {todos.filter(todo => todo.priority === 'medium').map(task => <li key={task.id}><Task id={task.id} title={task.title} description={task.description} completed={task.completed} priority={task.priority}/></li> )}
            </ul>
            <ul style={{ listStyle: 'none' }}>
                {todos.filter(todo => todo.priority === 'hard').map(task => <li key={task.id}><Task id={task.id} title={task.title} description={task.description} completed={task.completed} priority={task.priority}/></li> )}
            </ul>
        </StyledContainer>
    );
};

export default OutputList;

const StyledContainer = styled.div`
  width: 50%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`