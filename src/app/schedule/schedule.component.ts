import { Component, OnInit } from '@angular/core';
import { SCHEDULE } from '../mock-schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule = SCHEDULE;

  constructor() { }

  ngOnInit() {
  }

}
