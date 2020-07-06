import { Component, OnInit } from '@angular/core';
import {Entry} from '../models/entry';
import {State} from '../models/state.enum';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entry: Entry = {
    id: '1',
    who: 'david',
    notes: 'Working on learning Angular.',
    tasks: [
      {id: '1', text: 'foo', closed: null, state: State.Noted}
    ],
    date: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }

}
