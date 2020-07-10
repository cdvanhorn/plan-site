import {Entry} from '../entry';
import {State} from '../state.enum';

export const ENTRIES: Entry[] = [
    {
        id: '2',
        who: 'stevess',
        notes: 'Still working on Angular, it\'s been interesting. <br><br>--- steve',
        tasks: [
            {id: '1', text: 'Create a Service', closed: null, state: State.Noted},
            {id: '2', text: 'Create a Component', closed: new Date('07/08/2020'), state: State.Finished},
            {id: '2', text: 'Buy a boat', closed: null, state: State.Discarded}
        ],
        date: new Date('07/09/2020')
    },
    {
        id: '1',
        who: 'stevess',
        notes: 'Working on learning Angular. <br><br>--- steve',
        tasks: [
            {id: '1', text: 'Create a project.', closed: null, state: State.Finished}
        ],
        date: new Date('07/07/2020')
    }
];