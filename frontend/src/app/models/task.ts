import { State } from './state.enum';

export interface Task {
    id: string,
    text: string,
    closed: Date,
    state: State
}
