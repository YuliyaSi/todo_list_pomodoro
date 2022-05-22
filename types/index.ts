import {ReactNode} from "react";

export type TTime = '10' | '30' | '60';
export type TPriority = 'light' | 'medium' | 'hard';

export interface ILayout {
    title?: string,
    children: ReactNode,
}

export interface ITask {
    id?: number,
    title: string,
    description: string,
    completed: boolean,
    priority: TPriority
    time: TTime
}

export interface IList {
    todos: ITask[],
}

export type TInput = {
    addNewTask: (v: ITask) => void,
}

export interface IModal {
    handleFinishTask: () => void,
    handleRestart: () => void,
}

export interface ITimer {
    start: boolean,
    timeStop: () => void,
    time: TTime,
    setDone: (v: boolean) => void,
}

export interface IFiller {
    completed: number,
}
