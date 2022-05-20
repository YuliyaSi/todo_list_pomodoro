export type TTime = '10' | '30' | '60';
export type TPriority = 'light' | 'medium' | 'hard';

export interface ITask {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    priority: TPriority
}

export interface IList {
    todos: ITask[],
}

export type TInput = {
    addNewTask: (v: ITask) => void,
    // todos: Pick<IList, 'todos'>
}
