import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.headerTitle = 'Welcome to my page';
  }

  loadFeature2() {
    this.router.navigate(['/feature2']);
  }

  loadFeature3() {
    this.router.navigate(['/feature3']);
  }

}
