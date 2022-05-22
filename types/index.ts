export type TTime = '10' | '30' | '60';
export type TPriority = 'light' | 'medium' | 'hard' | string;

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
    setModal: (v: boolean) => void,

}

export interface ITimer {
    start: boolean,
    time: number
}
