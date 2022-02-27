import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input('numberOfLikes') likesCount: number = 0;  // 0 is default value if parent does not pass
  @Output() onLikeClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.likesCount);
  }

  handleClick() {
    this.onLikeClick.emit();
  }

}
