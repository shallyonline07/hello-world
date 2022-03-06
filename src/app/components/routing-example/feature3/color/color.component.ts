import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadRed() {
    this.router.navigate(['/feature3/color/red']);
  }

  loadGreen() {
    this.router.navigate(['/feature3/color/green']);
  }
  
  loadBlue(type: string) {
    // this.router.navigate([`/feature3/color/blue/${type}`]);
    this.router.navigate(['/feature3/color/blue/' + type]);
  }

}
