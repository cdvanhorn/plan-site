import {Entry} from '../entry';
import {State} from '../state.enum';

export const ENTRIES: Entry[] = [
    {
        id: '1',
        who: 'stevess',
        notes: 'Working on learning Angular. <br><br>--- steve',
        tasks: [
            {id: '1', text: 'Create a project.', closed: null, state: State.Finished}
        ],
        date: new Date()
    },
    {
        id: '2',
        who: 'stevess',
        notes: 'Still working on Angular, it\'s been interesting. <br><br>--- steve',
        tasks: [
            {id: '1', text: 'Create a Service', closed: null, state: State.Noted}
        ],
        date: new Date()
    }
];