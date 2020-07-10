import { Injectable } from '@angular/core';
import {ENTRIES} from '../models/mock/entries';
import {Entry} from '../models/entry';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(): Observable<Entry[]> {
    return of(ENTRIES);
  }
}
