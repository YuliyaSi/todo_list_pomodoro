export type TTime = '10' | '30' | '60';
export type TPriority = 'light' | 'medium' | 'hard';

export interface ITask {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    priority: TPriority
    time: number
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
    time: number,
    setDone: (v: boolean) => void,
}
