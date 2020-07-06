import { Task } from './task';

export interface Entry {
    id: string,
    who: string,
    notes: string,
    date: Date,
    tasks: Task[]
}
