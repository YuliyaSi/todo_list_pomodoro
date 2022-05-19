export type TTime = '10' | '30' | '60';
export type TPriority = 'light' | 'medium' | 'urgent';

export interface ITask {
    id: number,
    title: string,
    description: string,
    completed: boolean,
}

export interface ILightTask extends ITask {
    time: Extract<TTime, '10'>,
    priority: Extract<TPriority, 'light'>
}

export interface IMediumTask extends ITask {
    time: Extract<TTime, '30'>,
    priority: Extract<TPriority, 'medium'>
}

export interface IUrgentTask extends ITask {
    time: Extract<TTime, '60'>,
    priority: Extract<TPriority, 'urgent'>
}


