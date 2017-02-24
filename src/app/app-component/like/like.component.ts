import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  color:string = "";
  constructor() { }
  isLiked() {
    if(this.color == "#337ab7") {
      this.color = "rgba(0, 0, 0, .5)"
    } else {
      this.color = "#337ab7";
    }
  } 
  ngOnInit() {
  }

}
