import React from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {IList} from "../../types";
import Task from "./Task";

const OutputList: NextPage<IList> = ({todos}) => {

    return (
        <StyledContainer>
            {todos.map((task, index) =>
                <div key={index}>
                    <Task
                        id={index}
                        title={task.title}
                        description={task.description}
                        completed={task.completed}
                        priority={task.priority}
                        time={task.time}/>
                </div>
            )}
        </StyledContainer>
    );
};

export default OutputList;

const StyledContainer = styled.div`
  margin: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;