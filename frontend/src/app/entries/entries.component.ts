import { Component, OnInit } from '@angular/core';
import {Entry} from '../models/entry';
import {ENTRIES} from '../models/mock/entries';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = ENTRIES;

  constructor() { }

  ngOnInit(): void {
  }

}
