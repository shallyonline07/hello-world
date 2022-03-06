import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadGreen() {
    this.router.navigate(['/feature3/green']);
  }
  
  loadBlue() {
    this.router.navigate(['/feature3/blue']);
  }

}
