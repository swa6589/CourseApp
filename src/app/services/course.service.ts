import { Injectable } from '@angular/core';
import {course} from '../course';

@Injectable()
export class CourseService {
courses: course[];

  constructor() {
    this.courses=[
      {
        image:"Angular.jpg",
        name:"Angular",
        price:12000,
        description: "A component based client application framework"
      },
      {
        image:"aspnet.jpg",
        name:"aspnet",
        price:5000,
        description: "A webpage or website application "
      },
      {
        image:"dot-net-training-institute.jpg",
        name:"dot-net-training-institute",
        price:2100,
        description: "A fullstack program for dotnet"
      }
      ,
      {
        image:"bootsrap.jpg",
        name:"bootsrap",
        price:1100,
        description: "A style program which has been called as css. "
      }
    ]
   }

   getCourses():course[]{
     return this.courses;
   }
}
