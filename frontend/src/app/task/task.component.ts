import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { State } from '../models/state.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  state = State;

  constructor() { }

  ngOnInit(): void {
  }

}
