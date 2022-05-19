import React from 'react';
import {NextPage} from "next";
import {ITask} from "../../types";

const Task: NextPage<ITask> = ({id }) => {
    return (
        <div key={id}>

        </div>
    );
};

export default Task;