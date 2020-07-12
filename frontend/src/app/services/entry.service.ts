import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Entry} from '../models/entry';
import {State} from '../models/state.enum';
import { planData } from '../../assets/plan/plan.json';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  dataUrl: string = 'assets/plan/plan.json';

  constructor(private httpClient: HttpClient) { }

  createEntries(httpData: any): Entry[] {
    let entries: Entry[] = [];
    for(let data of httpData['planData']) {
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
    return entries;
  }

  getEntries(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }
}
