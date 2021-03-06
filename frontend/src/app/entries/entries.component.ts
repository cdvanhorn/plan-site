import { Component, OnInit } from '@angular/core';
import {Entry} from '../models/entry';
import {EntryService} from '../services/entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService.getEntries().subscribe(data =>
      this.entries = this.entryService.createEntries(data)
    );
  }
}
