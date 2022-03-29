import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit, OnDestroy {
  type: string;
  subscription: Subscription = new Subscription();
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe(value => {
        this.type = value['type'];
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
