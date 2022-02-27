import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  noOfLikes = 10;

  constructor() { }

  ngOnInit(): void {
  }

  IncrementLike() {
    this.noOfLikes++;
  }

}
