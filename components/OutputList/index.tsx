import React from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {IList} from "../../types";
import Task from "./Task";
import {StyledList} from "../../styles/Shared";

const OutputList: NextPage<IList> = ({ todos}) => {
    console.log(todos)
    return (
        <StyledContainer>
            <StyledList>
                <div>
                    <ul style={{listStyle: 'none'}}>
                        {todos.filter(todo => todo.priority === 'light').map(task => <li key={task.id}>
                            <Task
                                id={task.id} title={task.title} description={task.description}
                                completed={task.completed}
                                priority={task.priority}
                                time={task.time}/>
                        </li>)}
                    </ul>
                    <ul style={{listStyle: 'none'}}>
                        {todos.filter(todo => todo.priority === 'medium').map(task => <li key={task.id}>
                            <Task
                                id={task.id} title={task.title} description={task.description}
                                completed={task.completed}
                                priority={task.priority}
                                time={task.time}
                            />
                        </li>)}
                    </ul>
                    <ul style={{listStyle: 'none'}}>
                        {todos.filter(todo => todo.priority === 'hard').map(task => <li key={task.id}>
                            <Task id={task.id}
                                  title={task.title}
                                  description={task.description}
                                  completed={task.completed}
                                  priority={task.priority}
                                  time={task.time}
                            />
                        </li>)}
                    </ul>
                </div>
            </StyledList>
        </StyledContainer>
    );
};

export default OutputList;

const StyledContainer = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`