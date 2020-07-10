import { Injectable } from '@angular/core';
import {Entry} from '../models/entry';
import {State} from '../models/state.enum';
import { Observable, of } from 'rxjs';
import { planData } from '../../data/plan.json';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(): Observable<Entry[]> {
    //we're going to build an array of entries from some json
    let entries: Entry[] = [];
    for(let data of planData) {
      let entry: Entry = {
        id: "0",
        who: "st3v3",
        notes: data.notes,
        date: new Date(data.date),
        tasks: []
      };
      for(let task of data.tasks) {
        let state: State;
        if(task.state == "Finished")
          state = State.Finished;
        else if(task.state == "Noted")
          state = State.Noted;
        else if(task.state == "Discarded")
          state = State.Discarded

        let closedDate: Date = null;
        if(task.closed !== null)
          closedDate = new Date(task.closed);

        entry.tasks.push({
          id: "0", text: task.text, closed: closedDate, state: state
        });
      }
      entries.push(entry);
    }
    return of(entries);
  }
}
