import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  upcoming: string[];

  constructor() { 
    this.upcoming=[
      "Angular 4 starts on June 11",
      "Core Java starts on 30 may",
      "SQL starts on June 2"
    ]
  }

  ngOnInit() {
  }

}
