import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {course} from '../../../course'

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  courseCode:course;

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params =>
        this.courseCode=params['ccode']);
    console.log(this.courseCode);
   }

  ngOnInit() {
  }

}
