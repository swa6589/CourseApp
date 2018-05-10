import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service';
import {course} from '../../../course';

@Component({
  selector: 'reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {

  reviews;

  constructor(private rs:ReviewService) { 
    rs.getReviews().subscribe(
      (data)=>{this.reviews=data},
      (error)=>{alert("something went wrong");}
    );
  }

  ngOnInit() {
  }


}
