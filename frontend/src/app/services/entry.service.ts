import { Injectable } from '@angular/core';
import {ENTRIES} from '../models/mock/entries';
import {Entry} from '../models/entry';
import { Observable, of } from 'rxjs';
import * as planData from '../../data/plan.json';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(): Observable<Entry[]> {
    //we're going to build an array of entries from some json
    console.log(planData);
    return of(ENTRIES);
  }
}
